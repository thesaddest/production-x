import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/page";

const MainPage = memo(() => {
    const { t } = useTranslation("main");

    return <Page>{t("MAIN PAGE")}</Page>;
});

export default MainPage;
