import axiosClient from "./api.config";

const URL = '/users';

export async function getUser(accessToken: string) {
    try {
        const response = await axiosClient.get(`${URL}/me`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function getAllUsers(accessToken: string, page: number) {
    try {
        const response = await axiosClient.get(`${URL}?page=${page}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function toggleBanUser(accessToken: string, userId: number, feedback: string) {
    try {
        const data = {
            feedback: feedback
        }
        const response = await axiosClient.patch(`${URL}/toggle-ban/${userId}`, data, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function deleteUser(accessToken: string, userId: number) {
    try {
        const response = await axiosClient.delete(`${URL}/${userId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function updateProfile(id: number, accessToken: string, data: any) {
    try {
        const response = await axiosClient.patchForm(`${URL}/update-profile/${id}`, data, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        return response.data

    } catch (error) {
        throw error;
    }
}

export async function resetPassword(data: any) {
    const result = await axiosClient.patch(`${URL}/reset-password`, data)
    return result
}

export async function sendVerifyCode(data: any) {
    const result = await axiosClient.post(`${URL}/verify-code`, data)
    return result
}