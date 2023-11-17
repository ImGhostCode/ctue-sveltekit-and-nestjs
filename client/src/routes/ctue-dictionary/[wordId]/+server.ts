import { json, redirect } from '@sveltejs/kit'
import * as db from '$lib/server/database';

export async function PATCH(event) {
    const wordId = await event.params.wordId
    const token = event.cookies.get('accessToken');
    if (!token) {
        throw redirect(307, '/login');
    }
    const result = await db.toggleFavorite(token, wordId)
    return json(result)
}

export async function GET(event) {
    const token = await event.cookies.get('accessToken');
    let result = []
    if (token) {
        const data = await db.getAllFavorite(token);
        result = data.data.Word
    }
    return json(result)
}