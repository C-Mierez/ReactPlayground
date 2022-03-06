import { createAction } from "@reduxjs/toolkit";
import { Account } from "../../models/account";

export const LOG_IN = "[Account] LOG_IN";
export const actionLogIn = createAction<Account>(LOG_IN);

export const LOG_OUT = "LOG_OUT";
export const actionLogOut = createAction(LOG_OUT);
