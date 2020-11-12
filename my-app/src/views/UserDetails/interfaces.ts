export interface state {
    isLoading: boolean,
    userDetails: {
        created_at: string,
        login: string,
        name: string,
        bio: string,
        blog: string,
        followers: number | null,
        following: number | null,
        html_url: string,
        id: number | null,
        public_gists: number | null,
        public_repos: number | null,
        updated_at: string,
    }
}

export interface dispatch {
    fetchUserDetails: (params: fetchUserDetails) => void,
}

export type fetchUserDetails = {
    id: number
}