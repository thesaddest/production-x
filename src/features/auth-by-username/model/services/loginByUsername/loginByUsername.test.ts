import { userActions } from "entities/user";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";
import { loginByUsername } from "./loginByUsername";

describe("loginByUsername.test", () => {
    test("fulfilled login", async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        const userData = { username: "TEST_USERNAME", id: "1" };
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));

        const result = await thunk.callThunk({ username: "TEST_USERNAME", password: "123" });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(userData);
    });

    test("rejected login", async () => {
        const thunk = new TestAsyncThunk(loginByUsername);

        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk({ username: "TEST_USERNAME", password: "123" });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("error");
    });
});
