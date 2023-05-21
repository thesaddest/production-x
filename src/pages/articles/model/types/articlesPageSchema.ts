import { STATE_STATUSES } from "shared/constants/state.constants";
import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/article";

export interface ArticlesPageSchema extends EntityState<Article> {
    status: STATE_STATUSES;
    error?: string;

    view: ArticleView;
}
