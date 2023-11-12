import { config } from "dotenv";
import axiosClient from "./api.config";


const URL = '/contribution';

export async function postContribution(accessToken: string, data: any) {

    try {
        const response = await axiosClient.postForm(`${URL}`, data, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })

        return response.data;

    } catch (error) {
        throw error;
    }
}
export async function getContribution(accessToken: string, type: string) {

    try {
        const response = await axiosClient.get(`${URL}/user?type=${type}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        return response.data;

    } catch (error) {
        throw error;
    }
}

