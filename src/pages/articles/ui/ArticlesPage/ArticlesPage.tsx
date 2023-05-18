import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticlesPage.module.scss";
import { memo } from "react";

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = memo<ArticlesPageProps>(({ className }) => {
    return <div className={classNames(cls.ArticlesPage, {}, [className])}></div>;
});

export default ArticlesPage;
