import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";
import { useTranslation } from "react-i18next";

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
}

export const Text: FC<TextProps> = ({ className, title, text }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Text, {}, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
