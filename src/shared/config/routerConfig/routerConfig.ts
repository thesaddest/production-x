import { RouteProps } from "react-router-dom";

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
};
export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    PROFILE = "profile",
    // last
    NOT_FOUND = "not_found",
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.NOT_FOUND]: "*",
};
