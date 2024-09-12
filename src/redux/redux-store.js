// import { combineReducers, legacy_createStore as createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

// let reducers = combineReducers({
//     dialogsPage: dialogsReducer,
//     profilePage: profileReducer,
//     sidebar: sidebarReducer
// });

// let store = createStore(reducers);

const store = configureStore({
    reducer: {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        usersPage: usersReducer,
        sidebar: sidebarReducer
    }
});

window.store = store;

export default store;