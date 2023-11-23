import axiosClient from "./api.config";

const URL = '/specialization';

export async function getSpecializations() {
    try {
        const response = await axiosClient.get(`${URL}`)
        return response.data.data;
    } catch (error) {
        throw error;
    }
}
