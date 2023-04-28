import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginError.test", () => {
    test("should return value", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: "TEST_USERNAME" },
        };

        expect(getLoginUsername(state as StateSchema)).toEqual("TEST_USERNAME");
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginUsername(state as StateSchema)).toEqual("");
    });
});
