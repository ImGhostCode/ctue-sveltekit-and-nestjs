import { goto } from '$app/navigation';
import * as db from '$lib/server/database';
import type { LayoutServerLoad } from './$types';
import { fail, redirect, type Actions, } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ request, cookies }) => {
    const token: string | undefined = cookies.get('accessToken');
    let user: any = null;
    const wordPack: { data: any } = await db.getWords(1, 'null', [], 'null', 'null', 'null', '')
    const words: [] = wordPack?.data?.words
    if (token) {
        user = await db.getUser(token);
    }
    return {
        user: user?.data,
        words
    };
};