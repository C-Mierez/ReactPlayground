import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "../store";

const loggingMiddleware: Middleware<{}, RootState> =
    (store) => (next) => (action) => {
        const state = store.getState();
        console.log("Logging Middleware: ", action);
        next(action);
    };

export default loggingMiddleware;
