import * as I from "./interfaces";

export const initialState: I.state  = {
    totalUserList: [],
    userList: [],
    since: 0,
    page: 0,
    perPage: 10,
    prevPage: -1,
    isLoading: false,
}