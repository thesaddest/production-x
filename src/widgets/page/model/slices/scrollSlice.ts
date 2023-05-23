import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScrollSchema } from "../types/scrollSchema";

const initialState: ScrollSchema = {
    scroll: {},
};

const scrollSlice = createSlice({
    name: "scroll",
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{ path: string; position: number }>) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
});

export const { actions: scrollActions } = scrollSlice;
export const { reducer: scrollReducer } = scrollSlice;
