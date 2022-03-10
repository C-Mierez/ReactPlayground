import { AnyAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Services } from "../../service";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch = () =>
    useDispatch<AppDispatch>() as ThunkDispatch<RootState, Services, AnyAction>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
