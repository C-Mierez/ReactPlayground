import { combineReducers } from "redux";
import accountReducer from "./account/reducer";

// Combining all the defined reducers
const reducers = combineReducers({
    account: accountReducer,
});

export default reducers;
