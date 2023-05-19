import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "entities/article";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import { CommentList } from "entities/comment";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { STATE_STATUSES } from "shared/constants/state.constants";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { AddCommentForm } from "features/add-new-comment";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { getArticleDetailsCommentsError, getArticleDetailsCommentsStatus } from "../../model/selectors/comments";
import { articleDetailsCommentsReducer, getArticleComments } from "../../model/slices/articleDetalisCommentsSlice";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = memo<ArticleDetailsPageProps>(({ className }) => {
    const { t } = useTranslation("article-details");
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsStatus = useSelector(getArticleDetailsCommentsStatus);
    const commentsError = useSelector(getArticleDetailsCommentsError);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

    if (!id) {
        return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>{t("ARTICLE WAS NOT FOUND")}</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text title={t("COMMENTS")} className={cls.commentTitle} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList comments={comments} isLoading={commentsStatus === STATE_STATUSES.LOADING} />
            </div>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;
