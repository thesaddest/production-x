import { StateSchema } from "app/providers/StoreProvider";
import { ArticlesSortFiled, ArticleType, ArticleView } from "entities/article";

export const getArticlesPageStatus = (state: StateSchema) => state.articlesPage?.status;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error || "";
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.TILE;
export const getArticlesPageNumber = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited;
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order ?? "asc";
export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticlesSortFiled.CREATED;
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? "";
export const getArticlesPageArticleType = (state: StateSchema) => state.articlesPage?.articleType ?? ArticleType.ALL;
