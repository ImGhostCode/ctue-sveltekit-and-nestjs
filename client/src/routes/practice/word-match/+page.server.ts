import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import * as db from '$lib/server/database';
import { goto } from '$app/navigation';
import { isLoadingForm } from '$lib/store';

type Types = { id: number, name: string, isWord: boolean }
type Levels = { id: number, name: string }
type Specializations = { id: number, name: string }
type Topics = { id: number, name: string, isWord: boolean, selected: boolean, image: string }

export const load: PageServerLoad = async ({ cookies }) => {

    const token: string | undefined = cookies.get('accessToken');

    if (!token) {
        throw redirect(307, '/login');
    }

    const typesWord: Types = await db.getTypes(true)


    const levels: Levels = await db.getLevels()
    const specializations: Specializations = await db.getSpecializations()
    let topicsWord: Topics[] = await db.getTopics(true)

    topicsWord = topicsWord.map(topic => {
        return { ...topic, selected: false }
    })

    return {
        token, typesWord, levels, specializations, topicsWord

    };
};