import axios from 'axios';
import * as I from "./interfaces";

export const fetchUserList = (params: I.fetchUserList): Promise<any> => axios
    .get(`https://api.github.com/users?since=${params.since}&per_page=${params.perPage}`);
