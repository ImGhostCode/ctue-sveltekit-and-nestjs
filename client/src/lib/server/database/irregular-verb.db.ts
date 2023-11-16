import { config } from "dotenv";
import axiosClient from "./api.config";


const URL = '/irregular-verb';

export async function getIrregularVerb(sort: string, key: string, page: number) {
    try {
        const response = await axiosClient.get(`${URL}?sort=${sort}&&key=${key}&&page=${page}`)
        return response.data.data;
    } catch (error) {
        throw error;
    }
}
