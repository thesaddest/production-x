import { STATE_STATUSES } from "shared/constants/state.constants";
import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticlesSortFiled, ArticleType, ArticleView } from "entities/article";
import { SortOrder } from "shared/types/sortOrder";

export interface ArticlesPageSchema extends EntityState<Article> {
    status: STATE_STATUSES;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticlesSortFiled;
    search: string;
    articleType: ArticleType;

    _inited: boolean;
}
