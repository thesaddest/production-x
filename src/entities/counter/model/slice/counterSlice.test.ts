import { counterReducer, counterActions } from "./counterSlice";
import { CounterSchema } from "entities/counter";

describe("counterSlice", () => {
    test("decrement", () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.decrementState())).toEqual({ value: 9 });
    });

    test("increment", () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.incrementState())).toEqual({ value: 11 });
    });

    test("should work with empty state", () => {
        expect(counterReducer(undefined, counterActions.incrementState())).toEqual({ value: 1 });
    });
});
