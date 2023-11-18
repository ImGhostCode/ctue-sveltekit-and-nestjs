import { json } from '@sveltejs/kit'
import * as db from '$lib/server/database';

export async function GET(event) {
    const token = event.cookies.get('accessToken');
    const query = event.url.search
    const params = new URLSearchParams(query);
    const page = params.get('page');
    const sort = params.get('sort');
    const key = params.get('key')
    const result = await db.getIrregularVerb(sort || 'asc', key || '', parseInt(page || '1'))
    return json(result)
}

export async function DELETE(event) {
    const token = event.cookies.get('accessToken');
    const query = event.url.search
    const params = new URLSearchParams(query);
    const id = params.get('id');
    const result = await db.deleteIrregular(token, parseInt(id))
    return json(result)
}