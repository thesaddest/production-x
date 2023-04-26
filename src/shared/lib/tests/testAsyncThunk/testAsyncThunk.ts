import { StateSchema } from "app/providers/StoreProvider";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import { loginByUsername } from "features/auth-by-username/model/services/loginByUsername/loginByUsername";

type TestActionCreator<Return, Arg, RejectedValue> = (
    arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    actionCreator: TestActionCreator<Return, Arg, RejectedValue>;

    constructor(actionCreator: TestActionCreator<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        return await action(this.dispatch, this.getState, undefined);
    }
}
