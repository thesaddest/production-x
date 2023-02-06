import { RouteProps } from "react-router-dom";
import { AboutPage } from "pages/about";
import { MainPage } from "pages/main";
import { AppRoutes, RouterPath } from "shared/config";

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage />,
    },
};
