import { applyMiddleware, compose } from "@reduxjs/toolkit";
import { AnyAction, createStore } from "redux";
import { injectServices, Services } from "../../service";
import loggingMiddleware from "./account/middleware";
import thunkMiddleware, { ThunkAction } from "redux-thunk";

import reducers from "./reducers";

// Better and extensible way to create the reducer and do all required setup
const configureStore = (services: Services) => {
    const middlewares = [
        loggingMiddleware,
        thunkMiddleware.withExtraArgument(services),
    ];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(reducers, {}, middlewareEnhancer);

    return store;
};

export const store = configureStore(injectServices());

// export type RootState = ReturnType<typeof store.getState>;
const rootReducer = reducers;
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    Services,
    AnyAction
>;
