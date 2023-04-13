import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { FC } from "react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={classNames(cls.mainLink)} to={"/"}>
                    {t("MAIN PAGE")}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                    {t("ABOUT")}
                </AppLink>
            </div>
        </div>
    );
};
