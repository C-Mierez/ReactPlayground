import { AnyAction, createAction } from "@reduxjs/toolkit";
import { Account } from "../../models/account";
import { AppThunk } from "../store";

export const enum ActionType {
    LOG_IN = "Account/LOG_IN",
    LOG_OUT = "Account/LOG_OUT",
    LOADING = "Account/LOADING",
}

export const actionLogIn = createAction<Account>(ActionType.LOG_IN);

export const thunkLogIn =
    (name: string): AppThunk =>
    async (dispatch, getState, services) => {
        dispatch(actionLoading());
        const account = await services.accountAPI.logIn(name);
        const payload: Account = {
            name: account.name,
            image_url: account.image,
        };
        dispatch(actionLogIn(payload));
    };

export const actionLogOut = createAction(ActionType.LOG_OUT);

export const actionLoading = createAction(ActionType.LOADING);
