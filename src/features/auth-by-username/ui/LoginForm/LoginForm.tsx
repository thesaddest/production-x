import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autoFocus placeholder={t("ENTER USERNAME")} type="text" className={cls.input} />
            <Input placeholder={t("ENTER PASSWORD")} type="text" className={cls.input} />
            <Button className={cls.loginBtn}>{t("LOGIN")}</Button>
        </div>
    );
};
