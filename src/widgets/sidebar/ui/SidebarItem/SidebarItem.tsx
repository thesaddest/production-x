import { memo } from "react";
import cls from "./SidebarItem.module.scss";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "../../model/items";
import { classNames } from "shared/lib/classNames/classNames";

interface SidebarItemProps {
    item: SidebarItemType;
    isCollapsed: boolean;
}

export const SidebarItem = memo<SidebarItemProps>(({ item, isCollapsed }) => {
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.isCollapsed]: isCollapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
