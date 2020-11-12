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
                // in order to access previous pages, accumulate already loaded users into separate array
                totalUserList: state.totalUserList.concat(action.response.data),
                // github users pagination only shows a "since" parameter from the headers,
                // indicating the id, from which to start a next page
                since: parseInt(action.response.headers.link.match(/\d+/g)[0]),
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
        case userList.SET_USER_LIST:
            return {
                ...state,
                userList: state.totalUserList.slice(action.page * action.perPage, (action.page + 1) * action.perPage )
            };
        case userList.SET_PREV_PAGE:
            return {
                ...state,
                prevPage: action.prevPage,
            };
        case userList.SET_MAX_PAGE:
            return {
                ...state,
                maxPage: action.maxPage,
            };
        default:
            return state;
    }
}
