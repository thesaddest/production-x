import { FC } from "react";
import { Button } from "shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "entities/counter/model/slice/counterSlice";
import { useTranslation } from "react-i18next";

export const Counter: FC = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.incrementState());
    };

    const decrement = () => {
        dispatch(counterActions.decrementState());
    };

    return (
        <div>
            <h1 data-testid={"value-title"}>{counterValue}</h1>
            <Button data-testid={"increment-btn"} onClick={increment}>
                {t("INCREMENT")}
            </Button>
            <Button data-testid={"decrement-btn"} onClick={decrement}>
                {t("DECREMENT")}
            </Button>
        </div>
    );
};
