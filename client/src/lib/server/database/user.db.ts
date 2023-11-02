import { config } from "dotenv";
import axiosClient from "./api.config";


const URL = '/users';

export async function getUser(accessToken: string) {

    // const result = await axiosClient.get(`${URL}/me`, config: {
    //    accessToken: accessToken
    // })

    return result
}
