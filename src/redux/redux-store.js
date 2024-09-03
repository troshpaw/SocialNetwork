import { combineReducers, legacy_createStore as createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

// const store = configureStore({
//     reducer: {
//         dialogsPage: dialogsReducer,
//         profilePage: profileReducer,
//         sidebar: sidebarReducer
//     }
// });

export default store;