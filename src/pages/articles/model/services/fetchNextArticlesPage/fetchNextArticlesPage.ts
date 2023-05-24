import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { STATE_STATUSES } from "shared/constants/state.constants";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../../services/fetchArticlesList/fetchArticlesList";
import {
    getArticlesPageHasMore,
    getArticlesPageNumber,
    getArticlesPageStatus,
} from "../../selectors/articlesPageSelectors";

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    "articlesPage/fetchNextArticlesPage",
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNumber(getState());
        const status = getArticlesPageStatus(getState());

        if (hasMore && status !== STATE_STATUSES.LOADING) {
            const nextPage = page + 1;
            dispatch(articlesPageActions.setPage(nextPage));
            dispatch(fetchArticlesList({}));
        }
    },
);
