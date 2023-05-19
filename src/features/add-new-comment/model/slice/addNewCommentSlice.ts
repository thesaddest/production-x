import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATE_STATUSES } from "shared/constants/state.constants";
import { AddNewCommentSchema } from "../types/addNewComment";

const initialState: AddNewCommentSchema = {
    status: STATE_STATUSES.INIT,
    error: undefined,
    text: undefined,
};

const addNewCommentSlice = createSlice({
    name: "addNewComment",
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        // builder.addCase(.pending, (state) => {
        //     state.status = STATE_STATUSES.LOADING;
        // });
        // builder.addCase(.fulfilled, (state) => {
        //     state.status = STATE_STATUSES.SUCCESS;
        // });
        // builder.addCase(.rejected, (state, action) => {
        //     state.status = STATE_STATUSES.ERROR;
        //     state.error = action.payload;
        // });
    },
});

export const { actions: addNewCommentActions } = addNewCommentSlice;
export const { reducer: addNewCommentReducer } = addNewCommentSlice;
