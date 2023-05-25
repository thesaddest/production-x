import { STATE_STATUSES } from "shared/constants/state.constants";
import { EntityState } from "@reduxjs/toolkit";
import { Article } from "entities/article";

export interface ArticleDetailsPageRecommendationsSchema extends EntityState<Article> {
    status: STATE_STATUSES;
    error?: string;
}
