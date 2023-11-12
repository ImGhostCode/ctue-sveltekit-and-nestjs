import { config } from "dotenv";
import axiosClient from "./api.config";


const URL = '/type';

export async function getTypes(isWord: boolean) {

    try {
        const response = await axiosClient.get(`${URL}/${isWord}`)
        return response.data.data;

    } catch (error) {
        throw error;
    }
}
