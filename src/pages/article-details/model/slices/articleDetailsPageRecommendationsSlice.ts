import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { STATE_STATUSES } from "shared/constants/state.constants";
import { Article } from "entities/article";
import { ArticleDetailsPageRecommendationsSchema } from "../types/articleDetailsPageRecommendationsSchema";
import { fetchArticleRecommendations } from "../services/fetchArticleRecommendations/fetchArticleRecommendations";

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsPageRecommendationsSlice = createSlice({
    name: "articleDetailsPageRecommendationsSlice",
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationsSchema>({
        status: STATE_STATUSES.INIT,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleRecommendations.pending, (state) => {
            state.status = STATE_STATUSES.LOADING;
        });
        builder.addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
            state.status = STATE_STATUSES.SUCCESS;
            recommendationsAdapter.setAll(state, action.payload);
        });
        builder.addCase(fetchArticleRecommendations.rejected, (state, action) => {
            state.status = STATE_STATUSES.ERROR;
            state.error = action.payload;
        });
    },
});

export const { reducer: articleDetailsPageRecommendationsReducer } = articleDetailsPageRecommendationsSlice;
