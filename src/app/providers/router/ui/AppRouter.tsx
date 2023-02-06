import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "app/providers/router/model/routerConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routerConfig).map(({ path, element }) => (
                    <Route element={element} path={path} />
                ))}
            </Routes>
        </Suspense>
    );
};
