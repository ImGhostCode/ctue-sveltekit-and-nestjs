import { json } from '@sveltejs/kit'
import * as db from '$lib/server/database';

export async function GET(event) {
    const token = event.cookies.get('accessToken');
    const query = event.url.search
    const params = new URLSearchParams(query);
    const page = params.get('page');
    // const sort = params.get('sort');
    const topic = params.getAll('topic')
    const type = params.get('type')


    const result = await db.getSentences(topic, type ? parseInt(type) : null, parseInt(page || '1'))
    return json(result)

}