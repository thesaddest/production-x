import { memo, useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { fetchProfileData, ProfileCard, profileReducer } from "entities/profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfileProps {
    className?: string;
}

const ProfilePage = memo<ProfileProps>(({ className }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames("", {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
