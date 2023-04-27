import { RouteProps } from "react-router-dom";
import { AboutPage } from "pages/about";
import { MainPage } from "pages/main";
import { AppRoutes, RouterPath } from "shared/config";
import { NotFoundPage } from "pages/not-found";
import { ProfilePage } from "pages/profile";

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RouterPath.profile,
        element: <ProfilePage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouterPath.not_found,
        element: <NotFoundPage />,
    },
};
