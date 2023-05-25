import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/article";

export const fetchArticleRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    "articlesDetailsPage/fetchArticleRecommendations",
    async (props, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;
        try {
            const { data } = await extra.api.get<Article[]>(`/articles`, {
                params: {
                    _limit: 4,
                },
            });

            if (!data) {
                throw new Error();
            }

            return data;
        } catch (e) {
            return rejectWithValue("error");
        }
    },
);
