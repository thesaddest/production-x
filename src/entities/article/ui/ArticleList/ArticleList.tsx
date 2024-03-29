import { classNames } from "shared/lib/classNames/classNames";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { ArticleListItemSkeleton } from "entities/article/ui/ArticleListItem/ArticleListItemSkeleton";
import { Text, TextSize } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { Article, ArticleView } from "../../model/types/article";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getArticleListItemSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.TILE ? 9 : 3)
        .fill(0)
        .map((item, index) => <ArticleListItemSkeleton className={cls.card} view={view} key={index} />);
};

export const ArticleList = memo<ArticleListProps>((props) => {
    const { className, articles, view = ArticleView.TILE, isLoading, target } = props;
    const { t } = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title={t("NO ARTICLES")} size={TextSize.L} />
            </div>
        );
    }
    const renderArticle = (article: Article) => {
        return <ArticleListItem article={article} view={view} key={article.id} className={cls.card} target={target} />;
    };

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles && articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getArticleListItemSkeletons(view)}
        </div>
    );
});
