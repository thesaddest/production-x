import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AboutPage } from "pages/about";
import { MainPage } from "pages/main";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPage />} />
                    <Route path={"/"} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
