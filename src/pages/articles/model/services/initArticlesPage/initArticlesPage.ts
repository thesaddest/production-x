import { ActionCreatorWithPayload, createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../../services/fetchArticlesList/fetchArticlesList";
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";

interface ParameterMapping {
    [key: string]: ActionCreatorWithPayload<any>;
}

const parameterMapping: ParameterMapping = {
    order: articlesPageActions.setOrder,
    sort: articlesPageActions.setSort,
    search: articlesPageActions.setSearch,
    articleType: articlesPageActions.setArticleType,
};

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    "articlesPage/initArticlesPage",
    async (searchParams, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            searchParams.forEach((value, key) => {
                const action = parameterMapping[key];
                if (action) {
                    dispatch(action(value));
                }
            });

            dispatch(articlesPageActions.initArticlesPageState());
            dispatch(fetchArticlesList({}));
        }
    },
);
