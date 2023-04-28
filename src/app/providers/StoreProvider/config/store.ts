import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { counterReducer } from "entities/counter";
import { userReducer } from "entities/user";
import { createReducerManager } from "app/providers/StoreProvider/config/reducerManager";
import { api } from "shared/api/api";
import { NavigateOptions, To } from "react-router-dom";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const extraArg: ThunkExtraArg = {
        api: api,
        navigate,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        // @ts-ignore
        reducer: reducerManager.reduce as ReducersMapObject<StateSchema>,
        devTools: __IS__DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
