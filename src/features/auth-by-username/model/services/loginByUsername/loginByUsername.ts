import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "entities/user";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    "login/loginByUsername",
    async (authData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post<User>("http://localhost:8000/login", authData);

            if (!data) {
                throw new Error();
            }

            return data;
        } catch (e) {
            return rejectWithValue("error");
        }
    },
);
