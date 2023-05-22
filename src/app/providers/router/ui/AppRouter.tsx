import { Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "app/providers/router/model/routerConfig";
import { PageLoader } from "widgets/page-loader/PageLoader";
import { AppRouteProps } from "shared/config";
import { RequireAuth } from "app/providers/router/ui/RequireAuth";

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;
        return (
            <Route
                path={route.path}
                key={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return <Routes>{Object.values(routerConfig).map(renderWithWrapper)}</Routes>;
};
