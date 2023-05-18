import { StateSchema } from "app/providers/StoreProvider";

export const getArticleDetailsCommentsStatus = (state: StateSchema) => state.articleDetailsComments?.status;
export const getArticleDetailsCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
