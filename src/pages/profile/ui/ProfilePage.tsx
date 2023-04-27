import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "entities/profile";

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfileProps {
    className?: string;
}

const ProfilePage = memo<ProfileProps>(({ className }) => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames("", {}, [className])}>{t("PROFILE PAGE")}</div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
