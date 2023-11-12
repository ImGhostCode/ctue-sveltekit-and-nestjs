import { config } from "dotenv";
import axiosClient from "./api.config";


const URL = '/topic';

export async function getTopics(isWord: boolean) {

    try {
        const response = await axiosClient.get(`${URL}/${isWord}`)
        return response.data.data;

    } catch (error) {
        throw error;
    }
}
