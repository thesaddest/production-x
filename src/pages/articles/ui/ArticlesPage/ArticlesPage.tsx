import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = memo<ArticlesPageProps>(({ className }) => {
    return <div className={classNames(cls.ArticlesPage, {}, [className])} />;
});

export default ArticlesPage;
