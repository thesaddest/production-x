import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/loginSchema";
import { STATE_STATUSES } from "shared/constants/state.constants";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";

const initialState: LoginSchema = {
    username: "",
    password: "",
    status: STATE_STATUSES.START,
    error: "",
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUsername.pending, (state) => {
            state.status = STATE_STATUSES.PENDING;
        });
        builder.addCase(loginByUsername.fulfilled, (state) => {
            state.status = STATE_STATUSES.SUCCEEDED;
        });
        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.status = STATE_STATUSES.FAILED;
            state.error = action.payload;
        });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
