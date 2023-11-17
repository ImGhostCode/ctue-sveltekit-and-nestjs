import { config } from "dotenv";
import axiosClient from "./api.config";


const URL = '/sentence';

export async function getSentences(topic: string[], type: number | null, page: number) {

    const topicsString = topic.map((id) => `topic=${id}`).join('&&');
    const typeParameter = type !== null && !isNaN(type) ? `type=${type}&&` : '';
    try {
        const response = await axiosClient.get(`${URL}?${typeParameter}${topicsString ?? '&&' + topicsString}&&page=${page}`);
        return response.data.data;
    } catch (error) {
        throw error;
    }
}
