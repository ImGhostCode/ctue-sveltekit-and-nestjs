import { json, redirect } from '@sveltejs/kit'
import * as db from '$lib/server/database';

export async function DELETE(event) {
    const id = await event.params.id
    const token = event.cookies.get('accessToken');
    if (!token) {
        throw redirect(307, '/login');
    }
    const result = await db.deleteWord(token, id)
    return json(result)
}
