import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/country";
import { Currency } from "entities/currency";
import { getProfileData } from "./getProfileData";

describe("getProfileData.test", () => {
    test("should return data", () => {
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
                data,
            },
        };

        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
