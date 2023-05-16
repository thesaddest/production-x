import { fetchProfileData } from "./fetchProfileData";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";
import { Country } from "entities/country";
import { Currency } from "entities/currency";

const data = {
    username: "TEST_USERNAME",
    age: 21,
    country: Country.Poland,
    firstName: "TEST_FIRSTNAME",
    lastName: "TEST_LASTNAME",
    currency: Currency.PLN,
    city: "Warsaw",
};

describe("fetchProfileData.test", () => {
    test("fulfilled fetch", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: data }));

        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("rejected fetch", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe("rejected");
    });
});
