import { SVGProps, VFC } from "react";
import { RouterPath } from "shared/config";
import MainIcon from "shared/assets/icons/main.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
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
    {
        path: RouterPath.profile,
        Icon: ProfileIcon,
        text: "PROFILE PAGE",
    },
];
