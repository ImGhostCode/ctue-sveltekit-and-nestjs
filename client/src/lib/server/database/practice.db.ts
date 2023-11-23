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

export async function getAllPractices(accessToken: string, page: number) {
    try {
        const response = await axiosClient.get(`${URL}/user?page=${page}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function getLeaderboard() {
    try {
        const response = await axiosClient.get(`${URL}`)
        return response.data
    } catch (error) {
        throw error;
    }
}