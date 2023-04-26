import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginStatus } from "./getLoginStatus";
import { STATE_STATUSES } from "shared/constants/state.constants";

describe("getLoginStatus.test", () => {
    test("should return pending", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { status: STATE_STATUSES.PENDING },
        };

        expect(getLoginStatus(state as StateSchema)).toEqual(STATE_STATUSES.PENDING);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginStatus(state as StateSchema)).toEqual(STATE_STATUSES.START);
    });
});
