import { config } from "dotenv";
import axiosClient from "./api.config";


const URL = '/specialization';

export async function getSpecializations() {

    try {
        const response = await axiosClient.get(`${URL}`)
        return response.data;

    } catch (error) {
        throw error;
    }
}
