import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { FC } from "react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={classNames(cls.mainLink)} to={"/"}>
                    Main
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                    About
                </AppLink>
            </div>
        </div>
    );
};
