import { STATE_STATUSES } from "shared/constants/state.constants";
import { Article } from "../types/article";

export interface ArticleDetailsSchema {
    error?: string;
    status: STATE_STATUSES;
    data?: Article;
}
