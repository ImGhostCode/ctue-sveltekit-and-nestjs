import { config } from "dotenv";
import axiosClient from "./api.config";


const URL = '/contribution';

export async function postContribution(accessToken: string, data: any) {

    try {
        const response = await axiosClient.post(`${URL}`, data, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })

        return response.data;

    } catch (error) {
        throw error;
    }
}

// export async function updateProfile(id: number, accessToken: string, data: any) {

//     try {

//         const response = await axiosClient.patchForm(`${URL}/update-profile/${id}`, data, {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`,
//             },
//         })
//         return response.data

//     } catch (error) {
//         throw error;
//     }
// }
