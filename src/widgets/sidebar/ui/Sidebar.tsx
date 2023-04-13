import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "widgets/theme-switcher";
import { LangSwitcher } from "widgets/lang-switcher/ui/LangSwitcher";
import { useTranslation } from "react-i18next";

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
            <button data-testid={"sidebar-toggle"} onClick={onToggle}>
                {t("TOGGLE")}
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
