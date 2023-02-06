export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
};
