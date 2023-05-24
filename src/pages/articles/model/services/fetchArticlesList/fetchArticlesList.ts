import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article, ArticleType } from "entities/article";
import { addQueryParams } from "shared/lib/url/addQueryParams";
import {
    getArticlesPageArticleType,
    getArticlesPageLimit,
    getArticlesPageNumber,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
} from "../../selectors/articlesPageSelectors";

interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
    "articlesPage/fetchArticlesList",
    async (props, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const sort = getArticlesPageSort(getState());
        const order = getArticlesPageOrder(getState());
        const search = getArticlesPageSearch(getState());
        const page = getArticlesPageNumber(getState());
        const type = getArticlesPageArticleType(getState());

        const limit = getArticlesPageLimit(getState());
        try {
            addQueryParams({ sort, order, search, type });
            const { data } = await extra.api.get<Article[]>(`/articles`, {
                params: {
                    _expand: "user",
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type,
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
