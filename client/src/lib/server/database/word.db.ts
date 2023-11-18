import { config } from "dotenv";
import axiosClient from "./api.config";

const URL = '/word';

export async function getWords(page: number, sort: string | null, topic: any[], specialization: any, type: any, level: any, key: string) {
    try {
        let parameter = `&&page=${page}&&key=${key}`
        if (type != 'null') parameter += `&&type=${type}`
        if (sort != 'null') parameter += `&&sort=${sort}`
        if (level !== 'null') parameter += `&&level=${level}`
        if (specialization != 'null') parameter += `&&specialization=${specialization}`
        const topicsString = topic
            .map((topic) => `topic=${encodeURIComponent(topic)}`)
            .join('&&');

        const response = await axiosClient.get(`${URL}?&&${topicsString}${parameter}`)

        return response.data
    } catch (error) {
        throw error;
    }
}


export async function postWord(accessToken: string, data: any) {
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

export async function deleteWord(accessToken: string, id: number) {
    try {
        const response = await axiosClient.delete(`${URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function getWordPack(accessToken: string, type: any, level: any, specialization: any, topic: any[], numSentence: number) {
    try {
        let parameter = `numSentence=${numSentence}`
        if (type != 'null') parameter += `&&type=${type}`
        if (level !== 'null') parameter += `&&level=${level}`
        if (specialization != 'null') parameter += `&&specialization=${specialization}`
        const topicsString = topic
            .map((topic) => `topic=${encodeURIComponent(topic)}`)
            .join('&&');


        const response = await axiosClient.get(`${URL}/words-pack?${topicsString}${topicsString ? '&&' + parameter : parameter}`, {
            headers: {
                Authorization: `Bearer ${accessToken} `,
            },
        })
        return response.data
    } catch (error) {
        throw error;
    }
}

export async function editWord(accessToken: string, id: number, data: any) {
    try {
        const response = await axiosClient.patchForm(`${URL}/${id}`, data, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        return response.data;
    } catch (error) {
        throw error;
    }
}
