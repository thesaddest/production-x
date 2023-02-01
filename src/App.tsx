import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import { AboutPageAsync } from "./pages/about/AboutPage.async";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync />} />
                    <Route path={"/"} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
