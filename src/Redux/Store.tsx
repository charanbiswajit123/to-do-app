import { configureStore, combineReducers, Middleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Reducer } from "./Reducer";

const rootReducer = combineReducers({ item: Reducer });

const middleware: Middleware[] = [thunk, logger];

const Store = configureStore({
    reducer: rootReducer,
    middleware,
});

export default Store;
