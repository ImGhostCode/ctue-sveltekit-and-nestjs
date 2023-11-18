import { config } from "dotenv";
import axiosClient from "./api.config";


const URL = '/practice';

export async function createPractice(accessToken: string, data: any) {

    try {
        const response = await axiosClient.post(`${URL}`, data, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        return response.data

    } catch (error) {
        throw error;
    }
}