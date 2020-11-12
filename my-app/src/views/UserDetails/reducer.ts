import {userDetails} from './actionTypes';
import {initialState} from './initialState';
import {userDetailsAction} from "./actions";

export const userDetailsReducer = (state = initialState, action: userDetailsAction) => {
    switch (action.type) {
        case userDetails.FETCH:
            return {
                ...state,
                isLoading: true,
            };
        case userDetails.FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userDetails: action.response.data,
            };
        case userDetails.FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}
