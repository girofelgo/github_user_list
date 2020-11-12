export interface state {
    isLoading: boolean,
    userList: user[],
    page: number,
    perPage: number,
}

export interface dispatch {
    fetchUserList: (params: fetchUserList) => void,
    setPage: (page: number) => void,
    setPerPage: (perPage: number) => void,
}

export type fetchUserList = {
    page: number,
    perPage: number,
}

export type user = {
    login: string,
    avatar_url: string,
    id: number,
}

export type userList = state & dispatch;