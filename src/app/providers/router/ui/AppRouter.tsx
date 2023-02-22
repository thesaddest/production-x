import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "app/providers/router/model/routerConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routerConfig).map(({ path, element }) => (
                    <Route key={path} element={<div className="page-wrapper">{element}</div>} path={path} />
                ))}
            </Routes>
        </Suspense>
    );
};
