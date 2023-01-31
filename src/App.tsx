import classes from "./button.module.scss";
import "./index.scss";

const App = () => {
    return (
        <div className="app">
            HEY
            <button className={classes.btn}>
                PRESS MEEEEE
            </button>
        </div>
    );
};

export default App;