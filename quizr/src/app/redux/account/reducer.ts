import { Action, Reducer } from "redux";
import { actionLogIn, actionLogOut, LOG_IN, LOG_OUT } from "./actions";
import { AnyAction } from "@reduxjs/toolkit";

interface AccountState {
    isLoggedIn: boolean;
    name: string;
}

const initialState: AccountState = {
    isLoggedIn: false,
    name: "Guest Account",
};

const reducer: Reducer<AccountState, AnyAction> = (
    state = initialState,
    action
) => {
    if (actionLogIn.match(action)) {
        return {
            isLoggedIn: true,
            name: action.payload.name,
        };
    } else if (actionLogOut.match(action)) {
        return initialState;
    }

    return state;
};

export default reducer;
