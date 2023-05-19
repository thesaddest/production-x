import { ProfileSchema, updateProfileData, ValidateProfileError } from "entities/profile";
import { STATE_STATUSES } from "shared/constants/state.constants";
import { Country } from "entities/country";
import { Currency } from "entities/currency";
import { profileReducer, profileActions } from "./profileSlice";

const data = {
    username: "TEST_USERNAME",
    age: 21,
    country: Country.Poland,
    firstName: "TEST_FIRSTNAME",
    lastName: "TEST_LASTNAME",
    currency: Currency.PLN,
    city: "Warsaw",
};

describe("profileSlice.test", () => {
    test("test set readonly", () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toStrictEqual({
            readonly: true,
        });
    });

    test("updateProfileData pending", () => {
        const state: DeepPartial<ProfileSchema> = {
            error: "test error",
            status: STATE_STATUSES.INIT,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toStrictEqual({
            status: STATE_STATUSES.LOADING,
            validateErrors: undefined,
            error: undefined,
        });
    });

    test("updateProfileData fulfilled", () => {
        const state: DeepPartial<ProfileSchema> = {
            error: "test error",
            status: STATE_STATUSES.INIT,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ""))).toStrictEqual({
            status: STATE_STATUSES.SUCCESS,
            validateErrors: undefined,
            error: undefined,
            form: data,
            data,
        });
    });
});
