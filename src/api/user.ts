import axios from "axios";
import { IData, IDataUser } from "../models/IDataUser";

const baseUrl = 'https://api.github.com';

export const getUsersByQuery = async (q: string, page: number, per_page: number) => {
    return axios.get<IData>(`${baseUrl}/search/users`, {
        params: {q, page, per_page}
    })
}

export const getUserByLogin = async (login: string) => {
    return axios.get<IDataUser>(`${baseUrl}/users/${login}`);
}