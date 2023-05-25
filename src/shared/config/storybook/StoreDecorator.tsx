import "app/styles/index.scss";
import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/auth-by-username/model/slice/loginSlice";
import { profileReducer } from "entities/profile";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "entities/article/model/slice/articleDetailsSlice";
import { articleDetailsPageReducer } from "pages/article-details/model/slices";
/* eslint-disable */
const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator =
    (initialState: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: StoryFn) =>
        (
            <StoreProvider initialState={initialState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
                <StoryComponent />
            </StoreProvider>
        );
