import { StateSchema } from "app/providers/StoreProvider";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsStatus } from "./articleDetails";
import { STATE_STATUSES } from "shared/constants/state.constants";

describe("getArticleDetailsData.test", () => {
    test("should return data", () => {
        const data = {
            id: "1",
            title: "some title",
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };

        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test("should work with empty data", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });

    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: "Error",
            },
        };

        expect(getArticleDetailsError(state as StateSchema)).toEqual("Error");
    });

    test("should work with empty error", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });

    test("should return loading status", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                status: STATE_STATUSES.LOADING,
            },
        };

        expect(getArticleDetailsStatus(state as StateSchema)).toEqual(STATE_STATUSES.LOADING);
    });

    test("should work with inited status", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                status: STATE_STATUSES.INIT,
            },
        };

        expect(getArticleDetailsStatus(state as StateSchema)).toEqual(STATE_STATUSES.INIT);
    });
});
