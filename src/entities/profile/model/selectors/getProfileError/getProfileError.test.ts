import { StateSchema } from "app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";
import { Country } from "entities/country";
import { Currency } from "entities/currency";

describe("getProfileError.test", () => {
    test("should return error", () => {
        const data = {
            username: "TEST_USERNAME",
            age: 21,
            country: Country.Poland,
            firstName: "TEST_FIRSTNAME",
            lastName: "TEST_LASTNAME",
            currency: Currency.PLN,
            city: "Warsaw",
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: "Error",
            },
        };

        expect(getProfileError(state as StateSchema)).toEqual("Error");
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
