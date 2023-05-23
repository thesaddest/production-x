import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/page";

const AboutPage = memo(() => {
    const { t } = useTranslation("about");

    return <Page>{t("ABOUT PAGE")}</Page>;
});

export default AboutPage;
