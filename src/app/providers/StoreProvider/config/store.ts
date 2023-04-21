import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/counter";
import { userReducer } from "entities/user";
import { loginReducer } from "features/auth-by-username";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS__DEV__,
        preloadedState: initialState,
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
