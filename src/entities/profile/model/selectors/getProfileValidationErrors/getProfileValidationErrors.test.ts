import { StateSchema } from "app/providers/StoreProvider";
import { getProfileValidationErrors } from "./getProfileValidationErrors";
import { ValidateProfileError } from "entities/profile";

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
