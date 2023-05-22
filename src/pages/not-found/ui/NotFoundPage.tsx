import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Page } from "shared/ui/Page/Page";
import cls from "./NotFound.module.scss";

interface NotFoundProps {
    className?: string;
}

export const NotFoundPage = memo<NotFoundProps>(({ className }) => {
    const { t } = useTranslation();
    return <Page className={classNames(cls.NotFound, {}, [className])}>{t("PAGE NOT FOUND")}</Page>;
});
