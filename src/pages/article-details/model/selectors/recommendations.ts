import { StateSchema } from "app/providers/StoreProvider";
import { STATE_STATUSES } from "shared/constants/state.constants";

export const getArticleDetailsRecommendationsStatus = (state: StateSchema) =>
    state.articleDetailsPage?.recommendations?.status ?? STATE_STATUSES.INIT;
export const getArticleDetailsRecommendationsError = (state: StateSchema) =>
    state.articleDetailsPage?.recommendations?.error ?? "";
