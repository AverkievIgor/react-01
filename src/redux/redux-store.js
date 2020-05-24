import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./Profile-Reducer";
import MessagesReducer from "./Messages-Reducer";
import SidebarReducer from "./Sidebar-Reducer";
import UsersReducer from "./Users-Reducer";
import authReducer from "./Auth-Reducer";
import thunkMiddleware from "redux-thunk";



let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    MessagesPage: MessagesReducer,
    Sidebar: SidebarReducer,
    UsersPage: UsersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;