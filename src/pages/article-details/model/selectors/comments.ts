import { StateSchema } from "app/providers/StoreProvider";
import { STATE_STATUSES } from "shared/constants/state.constants";

export const getArticleDetailsCommentsStatus = (state: StateSchema) =>
    state.articleDetailsPage?.comments?.status ?? STATE_STATUSES.INIT;
export const getArticleDetailsCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error ?? "";
