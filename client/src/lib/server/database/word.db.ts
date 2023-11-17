import { config } from "dotenv";
import axiosClient from "./api.config";


const URL = '/word';

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
