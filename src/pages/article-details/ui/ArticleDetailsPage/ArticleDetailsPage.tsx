import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleDetailsPage.module.scss";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "entities/article";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import { CommentList } from "entities/comment";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsCommentsReducer, getArticleComments } from "../../model/slices/articleDetalisCommentsSlice";
import { useSelector } from "react-redux";
import { getArticleDetailsCommentsStatus } from "../../model/selectors/comments";
import { STATE_STATUSES } from "shared/constants/state.constants";
import { getArticleDetailsCommentsError } from "../../model/selectors/comments";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchArticleById } from "entities/article/model/services/fetchArticleById";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { fetchCommentsByArticleId } from "pages/article-details/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

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

    useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

    if (!id) {
        return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>{t("ARTICLE WAS NOT FOUND")}</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text title={t("COMMENTS")} className={cls.commentTitle} />
                <CommentList comments={comments} isLoading={commentsStatus === STATE_STATUSES.LOADING} />
            </div>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;
