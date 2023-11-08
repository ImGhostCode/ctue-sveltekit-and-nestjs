import axiosClient from "./api.config";


const URL = '/auth';

export async function register(data: any) {


    const result = await axiosClient.post(`${URL}/register`, data)


    return result
}

export async function login(data: any) {

    const result = await axiosClient.post(`${URL}/login`, data)

    return result
}
// export async function getUserFromSession(accessToken: string) {

//     const result = await axiosClient.post(`${URL}/login`, data)

//     return result
// }