import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}>/</div>
        </div>
    );
};
