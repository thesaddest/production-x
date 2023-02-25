import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "app/providers/router/model/routerConfig";
import { PageLoader } from "widgets/page-loader/PageLoader";

export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routerConfig).map(({ path, element }) => (
                    <Route key={path} element={<div className="page-wrapper">{element}</div>} path={path} />
                ))}
            </Routes>
        </Suspense>
    );
};
