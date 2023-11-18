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

export async function postIrregularVerb(accessToken: string, data: any) {
    try {
        const response = await axiosClient.post(`${URL}`, data, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function patchIrregular(accessToken: string, data: any, id: number) {
    try {
        const response = await axiosClient.patch(`${URL}/${id}`, data, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function deleteIrregular(accessToken: string, id: number) {
    try {
        const response = await axiosClient.delete(`${URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
        return response.data;
    } catch (error) {
        throw error;
    }
}