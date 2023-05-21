import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { ArticleList, ArticleView } from "entities/article";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = memo<ArticlesPageProps>(({ className }) => {
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList view={ArticleView.LIST} articles={[]} />
        </div>
    );
});

export default ArticlesPage;
