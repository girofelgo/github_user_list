import {ThunkAction} from "redux-thunk";
import * as api from './api';
import {userDetails} from "./actionTypes";
import * as I from './interfaces'

export type userDetailsAction = {
    type: userDetails,
    [key: string]: any;
}

export function fetchUserDetails(params: I.fetchUserDetails): ThunkAction<Promise<any>, void, undefined, userDetailsAction> {
    return dispatch => {
        dispatch({
            type: userDetails.FETCH,
        });
        return api.fetchUserDetails(params)
            .then(response => dispatch(fetchUserDetailsSuccess(response)))
            .catch(err => dispatch(fetchUserDetailsFailure(err)));
    };
}

function fetchUserDetailsSuccess(response: any): userDetailsAction {
    return {
        type: userDetails.FETCH_SUCCESS,
        response,
    };
}

function fetchUserDetailsFailure(error: any): userDetailsAction {
    return {
        type: userDetails.FETCH_FAILURE,
        error,
    };
}

