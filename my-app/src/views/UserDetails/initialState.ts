import * as I from "./interfaces";

export const initialState: I.state  = {
    userDetails: {
        bio: "",
        blog: "",
        created_at: "",
        followers: null,
        following: null,
        html_url: "",
        id: null,
        login: "",
        name: "",
        public_gists: null,
        public_repos: null,
        updated_at: ""
    },
    isLoading: false
}