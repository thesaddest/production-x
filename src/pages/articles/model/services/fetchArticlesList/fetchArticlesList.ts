import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/article";

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    "articles/fetchArticlesList",
    async (articleId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const { data } = await extra.api.get<Article[]>(`/articles`, { params: { _expand: "user" } });

            if (!data) {
                throw new Error();
            }

            return data;
        } catch (e) {
            return rejectWithValue("error");
        }
    },
);
