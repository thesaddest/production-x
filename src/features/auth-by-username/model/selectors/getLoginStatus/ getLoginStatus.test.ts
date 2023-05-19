import { StateSchema } from "app/providers/StoreProvider";
import { STATE_STATUSES } from "shared/constants/state.constants";
import { getLoginStatus } from "./getLoginStatus";

describe("getLoginStatus.test", () => {
    test("should return pending", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { status: STATE_STATUSES.LOADING },
        };

        expect(getLoginStatus(state as StateSchema)).toEqual(STATE_STATUSES.LOADING);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginStatus(state as StateSchema)).toEqual(STATE_STATUSES.INIT);
    });
});
