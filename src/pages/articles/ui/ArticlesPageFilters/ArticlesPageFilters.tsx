import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { ArticlesSortFiled, ArticleType, ArticleView, ArticleViewSelector } from "entities/article";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import { SortOrder } from "shared/types/sortOrder";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { ArticleTabTypes } from "features/article-type-tabs";
import { ArticleSortSelect } from "features/article-sort-select";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { articlesPageActions } from "../../model/slices/articlesPageSlice";
import {
    getArticlesPageArticleType,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import cls from "./ArticlesPageFilters.module.scss";

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo<ArticlesPageFiltersProps>(({ className }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const articleType = useSelector(getArticlesPageArticleType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch],
    );

    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(articlesPageActions.setOrder(newOrder));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeSort = useCallback(
        (newSort: ArticlesSortFiled) => {
            dispatch(articlesPageActions.setSort(newSort));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesPageActions.setSearch(search));
            dispatch(articlesPageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData],
    );

    const onChangeTabType = useCallback(
        (value: ArticleType) => {
            dispatch(articlesPageActions.setArticleType(value));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelect
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input placeholder={t("SEARCH")} onChange={onChangeSearch} value={search} />
            </Card>
            <ArticleTabTypes value={articleType} onChangeType={onChangeTabType} className={cls.tabs} />
        </div>
    );
});
