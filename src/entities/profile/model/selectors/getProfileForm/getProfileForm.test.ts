import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/country";
import { Currency } from "entities/currency";
import { getProfileForm } from "./getProfileForm";

describe("getProfileForm.test", () => {
    test("should return profile form", () => {
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
                form: data,
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
