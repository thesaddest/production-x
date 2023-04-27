import { createSlice } from "@reduxjs/toolkit";
import { ProfileSchema } from "../types/profile";
import { STATE_STATUSES } from "shared/constants/state.constants";

const initialState: ProfileSchema = {
    readonly: true,
    status: STATE_STATUSES.START,
    error: undefined,
    data: undefined,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
