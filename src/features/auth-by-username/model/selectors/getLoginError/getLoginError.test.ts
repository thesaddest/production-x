import { StateSchema } from "app/providers/StoreProvider";
import { getLoginError } from "./getLoginError";

describe("getLoginError.test", () => {
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { error: "TEST ERROR" },
        };

        expect(getLoginError(state as StateSchema)).toEqual("TEST ERROR");
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginError(state as StateSchema)).toEqual("");
    });
});
