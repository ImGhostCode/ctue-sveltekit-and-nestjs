import { config } from "dotenv";
import axiosClient from "./api.config";


const URL = '/topic';

export async function getTopics() {

    try {
        const response = await axiosClient.get(`${URL}`)
        return response.data.data;

    } catch (error) {
        throw error;
    }
}
