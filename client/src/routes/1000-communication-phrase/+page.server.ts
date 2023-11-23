import type { PageServerLoad } from './$types';
import * as db from '$lib/server/database';

type Types = { id: number, name: string, isWord: boolean }
type Topics = { id: number, name: string, isWord: boolean, selected: boolean }

export const load: PageServerLoad = async ({ cookies }) => {
    const typesSentence: Types = await db.getTypes(false)
    let topicsSentence: Topics[] = await db.getTopics(false)
    topicsSentence = topicsSentence.map(topic => {
        return { ...topic, selected: false }
    })
    return {
        typesSentence, topicsSentence
    };
};