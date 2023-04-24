import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/user";
import { USER_LOCALSTORAGE_KEY } from "shared/constants/localstorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    "login/loginByUsername",
    async (authData, { rejectWithValue, dispatch }) => {
        try {
            const { data } = await axios.post<User>("http://localhost:8000/login", authData);

            if (!data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
            dispatch(userActions.setAuthData(data));

            return data;
        } catch (e) {
            return rejectWithValue("error");
        }
    },
);
