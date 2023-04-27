import { Country, Currency } from "shared/constants/common";
import { STATE_STATUSES } from "shared/constants/state.constants";

export interface Profile {
    firstName: string;
    lastName: string;
    age: number;
    currency: Currency;
    country: Country;
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    status: STATE_STATUSES;
    error?: string;
    readonly: boolean;
}
