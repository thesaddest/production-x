import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
    "profile/fetchProfileData",
    async (profileId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;
        if (!profileId) {
            return rejectWithValue("error");
        }
        try {
            const { data } = await extra.api.get<Profile>(`/profile/${profileId}`);

            if (!data) {
                throw new Error();
            }

            return data;
        } catch (e) {
            return rejectWithValue("error");
        }
    },
);
