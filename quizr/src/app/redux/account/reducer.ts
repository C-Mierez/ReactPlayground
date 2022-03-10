import { Reducer } from "redux";
import { actionLoading, actionLogIn, actionLogOut } from "./actions";
import { AnyAction } from "@reduxjs/toolkit";

interface AccountState {
    loading: boolean;
    isLoggedIn: boolean;
    name: string;
    image_url?: string;
}

const initialState: AccountState = {
    loading: false,
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
            image_url: action.payload.image_url,
            loading: false,
        };
    } else if (actionLogOut.match(action)) {
        return {
            ...initialState,
            loading: false,
        };
    } else if (actionLoading.match(action)) {
        console.log("Loading");
        return {
            ...state,
            loading: true,
        };
    }

    return state;
};

export default reducer;
