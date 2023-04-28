import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/profile";
import { STATE_STATUSES } from "shared/constants/state.constants";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";

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
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.data = action.payload;
            state.status = STATE_STATUSES.SUCCEEDED;
        });
        builder.addCase(fetchProfileData.pending, (state) => {
            state.status = STATE_STATUSES.PENDING;
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.status = STATE_STATUSES.FAILED;
            state.error = action.payload;
        });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
