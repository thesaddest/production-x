import { Suspense, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "app/providers/router/model/routerConfig";
import { PageLoader } from "widgets/page-loader/PageLoader";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/user";

export const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => {
        return Object.values(routerConfig).filter((route) => {
            return !(route.authOnly && !isAuth);
        });
    }, [isAuth]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route key={path} element={<div className="page-wrapper">{element}</div>} path={path} />
                ))}
            </Routes>
        </Suspense>
    );
};
