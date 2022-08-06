import userReducer from "./reducers/user";
import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";

const allReducers = combineReducers({
    user: userReducer,
});

const store = configureStore({
    reducer: allReducers
  })

export default store;