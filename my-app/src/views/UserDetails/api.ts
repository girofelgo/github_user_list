import axios from 'axios';
import * as I from "./interfaces";

export const fetchUserDetails = (params: I.fetchUserDetails): Promise<any> => axios
    .get(`https://api.github.com/user/${params.id}`);
