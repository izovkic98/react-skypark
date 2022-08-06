import userReducer from "./reducers/user";
import { combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux'

const allReducers = combineReducers({
    user: userReducer,
});

const store = createStore(allReducers);

export default store;