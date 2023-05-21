import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { ArticleListItemSkeleton } from "entities/article/ui/ArticleListItem/ArticleListItemSkeleton";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { Article, ArticleView } from "../../model/types/article";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getArticleListItemSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.TILE ? 9 : 3)
        .fill(0)
        .map((item, index) => <ArticleListItemSkeleton className={cls.card} view={view} key={index} />);
};

export const ArticleList = memo<ArticleListProps>((props) => {
    const { className, articles, view = ArticleView.LIST, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {getArticleListItemSkeletons(view)}
            </div>
        );
    }

    const renderArticle = useCallback(
        (article: Article) => {
            return <ArticleListItem article={article} view={view} key={article.id} className={cls.card} />;
        },
        [view],
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
        </div>
    );
});
