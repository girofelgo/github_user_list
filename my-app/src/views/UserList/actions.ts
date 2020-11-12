import {ThunkAction} from "redux-thunk";
import * as api from './api';
import {userList} from "./actionTypes";
import * as I from './interfaces'

export type userListAction = {
    type: userList,
    [key: string]: any;
}

export function fetchUserList(params: I.fetchUserList): ThunkAction<Promise<any>, void, undefined, userListAction> {
    return dispatch => {
        dispatch({
            type: userList.FETCH,
        });
        return api.fetchUserList(params)
            .then(response => dispatch(fetchUserListSuccess(response)))
            .catch(err => dispatch(fetchUserListFailure(err)));
    };
}

function fetchUserListSuccess(response: any): userListAction {
    return {
        type: userList.FETCH_SUCCESS,
        response,
    };
}

function fetchUserListFailure(error: any): userListAction {
    return {
        type: userList.FETCH_FAILURE,
        error,
    };
}

export function setPage(page: number): userListAction {
    return {
        type: userList.SET_PAGE,
        page,
    };
}

export function setPerPage(perPage: number): userListAction {
    return {
        type: userList.SET_PER_PAGE,
        perPage,
    };
}

