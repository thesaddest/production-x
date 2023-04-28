import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileStatus } from "../../model/selectors/getProfileStatus/getProfileStatus";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
    const { t } = useTranslation("profile");

    const data = useSelector(getProfileData);
    const status = useSelector(getProfileStatus);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t("PROFILE")} />
                <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
                    {t("EDIT")}
                </Button>
            </div>
            <div className={cls.data}>
                <Input value={data?.firstName} placeholder={t("YOUR NAME")} className={cls.input} />
                <Input value={data?.lastName} placeholder={t("YOUR SURNAME")} className={cls.input} />
            </div>
        </div>
    );
};
