import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATE_STATUSES } from "shared/constants/state.constants";
import { ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { fetchArticleById } from "../services/fetchArticleById";
import { Article } from "../types/article";

const initialState: ArticleDetailsSchema = {
    status: STATE_STATUSES.INIT,
    error: undefined,
    data: undefined,
};

const articleDetailsSlice = createSlice({
    name: "articleDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
            state.data = action.payload;
            state.status = STATE_STATUSES.SUCCESS;
        });
        builder.addCase(fetchArticleById.pending, (state) => {
            state.error = undefined;
            state.status = STATE_STATUSES.LOADING;
        });
        builder.addCase(fetchArticleById.rejected, (state, action) => {
            state.status = STATE_STATUSES.ERROR;
            state.error = action.payload;
        });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
