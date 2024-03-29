import { StateSchema } from "app/providers/StoreProvider";
import { STATE_STATUSES } from "shared/constants/state.constants";
import { getProfileStatus } from "./getProfileStatus";

describe("getProfileStatus.test", () => {
    test("should return profile status success", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                status: STATE_STATUSES.SUCCESS,
            },
        };

        expect(getProfileStatus(state as StateSchema)).toEqual(STATE_STATUSES.SUCCESS);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileStatus(state as StateSchema)).toEqual(undefined);
    });
});
