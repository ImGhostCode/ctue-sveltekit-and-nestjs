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