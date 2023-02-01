import "./index.scss";
import { Link, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import { AboutPageAsync } from "./pages/about/AboutPage.async";
import { Suspense } from "react";

const App = () => {
    return (
        <div>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                        <Route path={"/about"} element={<AboutPageAsync />}/>
                    <Route path={"/"} element={<MainPage />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;