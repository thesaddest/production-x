import { AnyAction, CombinedState, Dispatch, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { UserSchema } from "entities/user";
import { LoginSchema } from "features/auth-by-username";
import { ProfileSchema } from "entities/profile";
import { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entities/article";
import { ArticleDetailsPageSchema } from "pages/article-details";
import { AddNewCommentSchema } from "features/add-new-comment";
import { ArticlesPageSchema } from "pages/articles";
import { ScrollSchema } from "widgets/page";

export interface StateSchema {
    user: UserSchema;
    scrollSchema: ScrollSchema;
    // Async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addNewComment?: AddNewCommentSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    dispatch?: Dispatch;
    state: StateSchema;
}
