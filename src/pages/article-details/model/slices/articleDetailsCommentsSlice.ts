import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Comment } from "entities/comment";
import { StateSchema } from "app/providers/StoreProvider";
import { STATE_STATUSES } from "shared/constants/state.constants";
import { ArticleDetailsCommentsSchema } from "../types/articleDetailsCommentsSchema";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: "articleDetailsCommentsSlice",
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        status: STATE_STATUSES.INIT,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCommentsByArticleId.pending, (state) => {
            state.status = STATE_STATUSES.LOADING;
        });
        builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
            state.status = STATE_STATUSES.SUCCESS;
            commentsAdapter.setAll(state, action.payload);
        });
        builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
            state.status = STATE_STATUSES.ERROR;
            state.error = action.payload;
        });
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
