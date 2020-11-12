import * as I from "./interfaces";

export const initialState: I.state  = {
    totalUserList: [],
    since: 0,
    page: 0,
    perPage: 10,
    userList: [],
    isLoading: false,
    prevPage: -1,
}