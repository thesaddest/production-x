import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATE_STATUSES } from "shared/constants/state.constants";
import { LoginSchema } from "../types/loginSchema";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";

const initialState: LoginSchema = {
    username: "",
    password: "",
    status: STATE_STATUSES.INIT,
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
            state.status = STATE_STATUSES.LOADING;
        });
        builder.addCase(loginByUsername.fulfilled, (state) => {
            state.status = STATE_STATUSES.SUCCESS;
        });
        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.status = STATE_STATUSES.ERROR;
            state.error = action.payload;
        });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
