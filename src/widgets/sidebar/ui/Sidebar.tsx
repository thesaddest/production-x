import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "widgets/theme-switcher";
import { LangSwitcher } from "widgets/lang-switcher/ui/LangSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.isCollapsed]: isCollapsed }, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
