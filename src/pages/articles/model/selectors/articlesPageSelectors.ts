import { StateSchema } from "app/providers/StoreProvider";
import { ArticleView } from "entities/article";

export const getArticlesPageStatus = (state: StateSchema) => state.articlesPage?.status;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error || "";
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.TILE;
