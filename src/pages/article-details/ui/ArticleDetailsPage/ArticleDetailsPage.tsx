import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleDetailsPage.module.scss";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "entities/article";
import { useParams } from "react-router-dom";

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = memo<ArticleDetailsPageProps>(({ className }) => {
    const { t } = useTranslation("article-details");
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>{t("ARTICLE WAS NOT FOUND")}</div>;
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
});

export default ArticleDetailsPage;
