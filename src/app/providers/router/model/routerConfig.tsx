import { RouteProps } from "react-router-dom";
import { AboutPage } from "pages/about";
import { MainPage } from "pages/main";
import { AppRoutes, RouterPath } from "shared/config";
import { NotFoundPage } from "pages/not-found";
import { ProfilePage } from "pages/profile";
import { ArticlesPage } from "pages/articles";
import { ArticleDetailsPage } from "pages/article-details";

type AppRouteProps = RouteProps & {
    authOnly?: boolean;
};

export const routerConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RouterPath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RouterPath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RouterPath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouterPath.not_found,
        element: <NotFoundPage />,
    },
};
