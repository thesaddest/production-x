import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/auth-by-username";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { t } = useTranslation();

    const onCloseModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={classNames(cls.links)} onClick={onShowModal}>
                {t("LOGIN")}
            </Button>
            <LoginModal isOpen={isOpen} onClose={onCloseModal} />
        </div>
    );
};
