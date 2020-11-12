import {userList} from './actionTypes';
import {initialState} from './initialState';
import {userListAction} from "./actions";

export const userListReducer = (state = initialState, action: userListAction) => {
    switch (action.type) {
        case userList.FETCH:
            return {
                ...state,
                isLoading: true,
            };
        case userList.FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userList: action.response.data,
            };
        case userList.FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        case userList.SET_PAGE:
            return {
                ...state,
                page: action.page,
            };
        case userList.SET_PER_PAGE:
            return {
                ...state,
                perPage: action.perPage,
            };
        default:
            return state;
    }
}
