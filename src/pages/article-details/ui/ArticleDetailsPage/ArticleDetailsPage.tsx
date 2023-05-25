import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ArticleDetails, ArticleList } from "entities/article";
import { useNavigate, useParams } from "react-router-dom";
import { Text, TextSize } from "shared/ui/Text/Text";
import { CommentList } from "entities/comment";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { STATE_STATUSES } from "shared/constants/state.constants";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { AddCommentForm } from "features/add-new-comment";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { RouterPath } from "shared/config";
import { Page } from "widgets/page";
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { getArticleDetailsCommentsError, getArticleDetailsCommentsStatus } from "../../model/selectors/comments";
import { getArticleComments } from "../../model/slices/articleDetailsCommentsSlice";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import cls from "./ArticleDetailsPage.module.scss";
import { getArticleRecommendations } from "../../model/slices/articleDetailsPageRecommendationsSlice";
import {
    getArticleDetailsRecommendationsError,
    getArticleDetailsRecommendationsStatus,
} from "../../model/selectors/recommendations";
import { articleDetailsPageReducer } from "../../model/slices";

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = memo<ArticleDetailsPageProps>(({ className }) => {
    const { t } = useTranslation("article-details");
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsStatus = useSelector(getArticleDetailsCommentsStatus);
    const commentsError = useSelector(getArticleDetailsCommentsError);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsStatus = useSelector(getArticleDetailsRecommendationsStatus);
    const recommendationsError = useSelector(getArticleDetailsRecommendationsError);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    const onBackToList = useCallback(() => {
        navigate(RouterPath.articles);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>{t("ARTICLE WAS NOT FOUND")}</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t("BACK TO THE LIST")}
                </Button>
                <ArticleDetails id={id} />
                <Text size={TextSize.L} title={t("RECOMMENDATIONS")} className={cls.commentTitle} />
                <ArticleList
                    target="_blank"
                    className={cls.recommendations}
                    articles={recommendations}
                    isLoading={recommendationsStatus === STATE_STATUSES.LOADING}
                />
                <Text size={TextSize.L} title={t("COMMENTS")} className={cls.commentTitle} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList comments={comments} isLoading={commentsStatus === STATE_STATUSES.LOADING} />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;
