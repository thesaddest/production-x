import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { ArticleList, ArticleView, ArticleViewSelector } from "entities/article";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { STATE_STATUSES } from "shared/constants/state.constants";
import { Page } from "widgets/page";
import { Text } from "shared/ui/Text/Text";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import {
    getArticlesPageError,
    getArticlesPageStatus,
    getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { articlesPageActions, articlesPageReducer, getArticles } from "../../model/slices/articlesPageSlice";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = memo<ArticlesPageProps>(({ className }) => {
    const dispatch = useAppDispatch();
    const status = useSelector(getArticlesPageStatus);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const articles = useSelector(getArticles.selectAll);

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch],
    );

    if (error) {
        return <Text text={error} />;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList isLoading={status === STATE_STATUSES.LOADING} view={view} articles={articles} />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;
