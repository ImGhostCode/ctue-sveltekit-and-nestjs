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

export async function postSentence(accessToken: string, data: any) {
    try {
        const response = await axiosClient.post(`${URL}`, data, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        });
        return response.data
    } catch (error) {
        throw error;
    }
}

export async function patchSentence(accessToken: string, data: any, id: number) {
    try {
        const response = await axiosClient.patch(`${URL}/${id}`, data, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        });
        return response.data
    } catch (error) {
        throw error;
    }
}

export async function deleteSentence(accessToken: string, id: number) {
    try {
        const response = await axiosClient.delete(`${URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        });
        return response.data
    } catch (error) {
        throw error;
    }
}