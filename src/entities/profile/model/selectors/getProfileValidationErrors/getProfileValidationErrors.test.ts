import { StateSchema } from "app/providers/StoreProvider";
import { ValidateProfileError } from "entities/profile";
import { getProfileValidationErrors } from "./getProfileValidationErrors";

describe("getProfileStatus.test", () => {
    test("should return profile validation errors", () => {
        const validationErrors = [
            ValidateProfileError.NO_DATA,
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_COUNTRY,
        ];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: validationErrors,
            },
        };

        expect(getProfileValidationErrors(state as StateSchema)).toEqual(validationErrors);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileValidationErrors(state as StateSchema)).toEqual(undefined);
    });
});
