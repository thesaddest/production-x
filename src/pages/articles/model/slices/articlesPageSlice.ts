import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { STATE_STATUSES } from "shared/constants/state.constants";
import { Article, ArticlesSortFiled, ArticleType, ArticleView } from "entities/article";

import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from "shared/constants/localstorage";
import { SortOrder } from "shared/types/sortOrder";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";
import { ArticlesPageSchema } from "../types/articlesPageSchema";

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: "articlesPageSlice",
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        status: STATE_STATUSES.INIT,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.TILE,
        page: 1,
        limit: 9,
        hasMore: true,
        sort: ArticlesSortFiled.CREATED,
        search: "",
        order: "asc",
        articleType: ArticleType.ALL,
        _inited: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticlesSortFiled>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setArticleType: (state, action: PayloadAction<ArticleType>) => {
            state.articleType = action.payload;
        },
        initArticlesPageState: (state) => {
            const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.LIST ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesList.pending, (state, action) => {
            state.status = STATE_STATUSES.LOADING;
            if (action.meta.arg.replace) {
                articlesAdapter.removeAll(state);
            }
        });
        builder.addCase(fetchArticlesList.fulfilled, (state, action) => {
            if (action.meta.arg.replace) {
                articlesAdapter.setAll(state, action.payload);
            } else {
                articlesAdapter.addMany(state, action.payload);
            }
            state.status = STATE_STATUSES.SUCCESS;
            state.hasMore = action.payload.length >= state.limit;
        });
        builder.addCase(fetchArticlesList.rejected, (state, action) => {
            state.status = STATE_STATUSES.ERROR;
            state.error = action.payload;
        });
    },
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;
