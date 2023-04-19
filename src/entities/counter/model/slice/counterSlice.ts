import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState = { value: 0 } as CounterState;

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incrementState(state) {
            state.value++;
        },
        decrementState(state) {
            state.value--;
        },
    },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
