import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../../services/fetchArticlesList/fetchArticlesList";
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    "articlesPage/initArticlesPage",
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            dispatch(articlesPageActions.initArticlesPageState());
            dispatch(fetchArticlesList({ page: 1 }));
        }
    },
);
