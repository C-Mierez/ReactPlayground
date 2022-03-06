import { applyMiddleware, compose } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { injectServices, Services } from "../../service";
import loggingMiddleware from "./account/middleware";

import reducers from "./reducers";

// Better and extensible way to create the reducer and do all required setup
const configureStore = (services: Services) => {
    const middlewares = [loggingMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(reducers, {}, middlewareEnhancer);

    return store;
};

export const store = configureStore(injectServices());

// export type RootState = ReturnType<typeof store.getState>;
const rootReducer = reducers;
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
