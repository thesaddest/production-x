import { STATE_STATUSES } from "shared/constants/state.constants";
import { Currency } from "entities/currency";
import { Country } from "entities/country";

export enum ValidateProfileError {
    INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
    INCORRECT_AGE = "INCORRECT_AGE",
    INCORRECT_COUNTRY = "INCORRECT_COUNTRY",
    NO_DATA = "NO_DATA",
    SERVER_ERROR = "SERVER_ERROR",
}

export interface Profile {
    id?: string;
    firstName?: string;
    lastName?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    status: STATE_STATUSES;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
