import { StateSchema } from "app/providers/StoreProvider";

export const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.data;
export const getArticleDetailsStatus = (state: StateSchema) => state.articleDetails?.status;
export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error;
