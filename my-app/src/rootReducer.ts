import {combineReducers} from "redux";
import {userListReducer} from "./views/UserList/reducer";
import {userDetailsReducer} from "./views/UserDetails/reducer";

export const reducers = combineReducers({
    userList: userListReducer,
    userDetails: userDetailsReducer,
})

export type RootState = ReturnType<typeof reducers>
