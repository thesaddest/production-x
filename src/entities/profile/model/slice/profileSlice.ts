import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATE_STATUSES } from "shared/constants/state.constants";
import { Profile, ProfileSchema } from "../types/profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const initialState: ProfileSchema = {
    readonly: true,
    status: STATE_STATUSES.INIT,
    error: undefined,
    data: undefined,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.validateErrors = undefined;
            state.form = state.data;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.data = action.payload;
            state.form = action.payload;
            state.status = STATE_STATUSES.SUCCESS;
            state.readonly = true;
        });
        builder.addCase(fetchProfileData.pending, (state) => {
            state.error = undefined;
            state.status = STATE_STATUSES.LOADING;
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.status = STATE_STATUSES.ERROR;
            state.error = action.payload;
        });
        builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.data = action.payload;
            state.form = action.payload;
            state.error = undefined;
            state.validateErrors = undefined;
            state.status = STATE_STATUSES.SUCCESS;
        });
        builder.addCase(updateProfileData.pending, (state) => {
            state.error = undefined;
            state.status = STATE_STATUSES.LOADING;
            state.validateErrors = undefined;
        });
        builder.addCase(updateProfileData.rejected, (state, action) => {
            state.status = STATE_STATUSES.ERROR;
            state.validateErrors = action.payload;
        });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
