import { StateSchema } from "app/providers/StoreProvider";
import { STATE_STATUSES } from "shared/constants/state.constants";

export const getLoginStatus = (state: StateSchema) => state?.loginForm?.status || STATE_STATUSES.INIT;
