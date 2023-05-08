import { FC, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfilePageHeader.module.scss";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getProfileReadonly, profileActions, updateProfileData } from "entities/profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
    const { t } = useTranslation("profile");
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t("PROFILE")} />
            {readonly ? (
                <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn} onClick={onEdit}>
                    {t("EDIT")}
                </Button>
            ) : (
                <>
                    <Button theme={ButtonTheme.OUTLINE_RED} className={cls.editBtn} onClick={onCancelEdit}>
                        {t("CANCEL")}
                    </Button>

                    <Button theme={ButtonTheme.OUTLINE} className={cls.saveBtn} onClick={onSave}>
                        {t("SAVE")}
                    </Button>
                </>
            )}
        </div>
    );
};
