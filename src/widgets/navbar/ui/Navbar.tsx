import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/auth-by-username";
import { useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/user";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo<NavbarProps>(({ className }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const onCloseModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logOut());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} className={classNames(cls.links)} onClick={onLogout}>
                    {t("LOGOUT")}
                </Button>
                <LoginModal isOpen={isOpen} onClose={onCloseModal} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={classNames(cls.links)} onClick={onShowModal}>
                {t("LOGIN")}
            </Button>
            {isOpen && <LoginModal isOpen={isOpen} onClose={onCloseModal} />}
        </div>
    );
});
