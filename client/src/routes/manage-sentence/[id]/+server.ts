import { json } from '@sveltejs/kit'
import * as db from '$lib/server/database';

export async function DELETE(event) {
    const token = event.cookies.get('accessToken');
    const id = await event.params.id
    const result = await db.deleteSentence(token, id)
    return json(result)
}