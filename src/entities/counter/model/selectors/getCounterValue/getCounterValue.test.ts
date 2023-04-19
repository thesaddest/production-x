import { getCounterValue } from "./getCounterValue";
import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

describe("getCounterValue", () => {
    test("should return 10", () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
