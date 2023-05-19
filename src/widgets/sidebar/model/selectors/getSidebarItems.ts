import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/user";
import { RouterPath } from "shared/config";
import MainIcon from "shared/assets/icons/main.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import ArticleIcon from "shared/assets/icons/articles.svg";
import { SidebarItemType } from "../types/sidebar";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: RouterPath.main,
            Icon: MainIcon,
            text: "MAIN PAGE",
        },
        {
            path: RouterPath.about,
            Icon: AboutIcon,
            text: "ABOUT PAGE",
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: RouterPath.profile + userData.id,
                Icon: ProfileIcon,
                text: "PROFILE PAGE",
                authOnly: true,
            },
            {
                path: RouterPath.articles,
                Icon: ArticleIcon,
                text: "ARTICLES PAGE",
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
