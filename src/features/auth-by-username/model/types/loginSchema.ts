import { STATE_STATUSES } from "shared/constants/state.constants";

export interface LoginSchema {
    username: string;
    password: string;
    status: STATE_STATUSES;
    error?: string;
}
