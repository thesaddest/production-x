import { StateSchema } from "app/providers/StoreProvider";

export const getProfileStatus = (state: StateSchema) => state.profile?.status;
