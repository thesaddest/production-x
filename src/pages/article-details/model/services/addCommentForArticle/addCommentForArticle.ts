import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "entities/comment";
import { getUserAuthData } from "entities/user";
import { getArticleDetailsData } from "entities/article";
import { fetchCommentsByArticleId } from "../../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    "articleDetails/addCommentForArticle",
    async (text, thunkAPI) => {
        const { rejectWithValue, extra, getState, dispatch } = thunkAPI;
        try {
            const userData = getUserAuthData(getState());
            const article = getArticleDetailsData(getState());

            if (!userData || !text || !article) {
                return rejectWithValue("error");
            }

            const { data } = await extra.api.post<Comment>("/comments", {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article.id));
            return data;
        } catch (e) {
            return rejectWithValue("error");
        }
    },
);
