import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { t } = useTranslation();

    const onToggleModal = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={classNames(cls.links)} onClick={onToggleModal}>
                {t("Login")}
            </Button>
            <Modal isOpen={isOpen} onClose={onToggleModal}>
                <div>SOME_CONTENT</div>
            </Modal>
        </div>
    );
};
