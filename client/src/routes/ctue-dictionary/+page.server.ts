import type { PageServerLoad } from './$types';
import * as db from '$lib/server/database';


type Types = { id: number, name: string, isWord: boolean }
type Levels = { id: number, name: string }
type Specializations = { id: number, name: string }
type Topics = { id: number, name: string, isWord: boolean, selected: boolean, image: string }

export const load: PageServerLoad = async ({ cookies }) => {
    const token: string | undefined = cookies.get('accessToken');
    let favorite: any = null;
    if (token) {
        const data = await db.getAllFavorite(token);
        favorite = data.data.Word
    }
    const types: Types[] = await db.getTypes(true)
    const levels: Levels[] = await db.getLevels()
    const specializations: Specializations[] = await db.getSpecializations()
    let topics: Topics[] = await db.getTopics(true)

    topics = topics.map(topic => {
        return { ...topic, selected: false }
    })
    return {
        types, levels, specializations, topics, favorite
    }
};