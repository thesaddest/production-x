import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "widgets/theme-switcher";
import { LangSwitcher } from "widgets/lang-switcher/ui/LangSwitcher";
import { useTranslation } from "react-i18next";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RouterPath } from "shared/config";
import MainIcon from "shared/assets/icons/main.svg";
import AboutIcon from "shared/assets/icons/about.svg";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const { t } = useTranslation();

    const onToggle = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid={"sidebar"}
            className={classNames(cls.Sidebar, { [cls.isCollapsed]: isCollapsed }, [className])}
        >
            <Button
                data-testid={"sidebar-toggle"}
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {isCollapsed ? ">" : "<"}
            </Button>
            <div className={cls.items}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RouterPath.main} className={cls.item}>
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t("MAIN PAGE")}</span>
                </AppLink>

                <AppLink theme={AppLinkTheme.SECONDARY} to={RouterPath.about} className={cls.item}>
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t("ABOUT")}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
