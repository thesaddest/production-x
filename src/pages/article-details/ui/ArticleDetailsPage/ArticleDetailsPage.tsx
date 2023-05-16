import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleDetailsPage.module.scss";
import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = memo<ArticleDetailsPageProps>(({ className }) => {
    const { t } = useTranslation("articles");
    return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}></div>;
});

export default ArticleDetailsPage;
