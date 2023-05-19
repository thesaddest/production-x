import { memo } from "react";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/user";
import { SidebarItemType } from "widgets/sidebar/model/types/sidebar";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
    item: SidebarItemType;
    isCollapsed: boolean;
}

export const SidebarItem = memo<SidebarItemProps>(({ item, isCollapsed }) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }
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
