import { combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./reducers/dialogs-reducer";
import profileReducer from "./reducers/profile-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
});

let store = legacy_createStore(reducers)

export default store;