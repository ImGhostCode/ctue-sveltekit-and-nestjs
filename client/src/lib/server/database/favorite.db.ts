import { config } from "dotenv";
import axiosClient from "./api.config";

const URL = '/favorite-item';

export async function getAllFavorite(accessToken: string) {
    try {
        const response = await axiosClient.get(`${URL}/user`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function toggleFavorite(accessToken: string, wordId: number) {
    try {
        const data = {
            wordId: wordId
        }
        const response = await axiosClient.patch(`${URL}`, data, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        return response.data;
    } catch (error) {
        throw error;
    }
}