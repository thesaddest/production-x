import { validateProfileData } from "./validateProfileData";
import { Country } from "entities/country";
import { Currency } from "entities/currency";
import { ValidateProfileError } from "entities/profile";

const data = {
    username: "TEST_USERNAME",
    age: 21,
    country: Country.Poland,
    firstName: "TEST_FIRSTNAME",
    lastName: "TEST_LASTNAME",
    currency: Currency.PLN,
    city: "Warsaw",
};
describe("fetchProfileData.test", () => {
    test("fulfilled fetch", async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test("without firstName and lastName", async () => {
        const result = validateProfileData({ ...data, lastName: "", firstName: "" });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test("incorrect age", async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test("incorrect country", async () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test("incorrect all", async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
