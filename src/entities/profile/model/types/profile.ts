import { STATE_STATUSES } from "shared/constants/state.constants";
import { Currency } from "entities/currency/model/types/currency";
import { Country } from "entities/country/model/types/country";

export interface Profile {
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
}
