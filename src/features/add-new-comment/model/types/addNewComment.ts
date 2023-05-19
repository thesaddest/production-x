import { STATE_STATUSES } from "shared/constants/state.constants";

export interface AddNewCommentSchema {
    text?: string;
    error?: string;
    status: STATE_STATUSES;
}
