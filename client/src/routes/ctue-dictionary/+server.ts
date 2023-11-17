import { json } from '@sveltejs/kit'
import * as db from '$lib/server/database';

export async function GET(event) {
    const query = event.url.search
    const params = new URLSearchParams(query);
    const topic = params.getAll('topic')
    const type = params.get('type')
    const specialization = params.get('specialization')
    const level = params.get('level')
    const page = params.get('page')
    const sort = params.get('sort')
    const key = params.get('key')
    const result = await db.getWords(parseInt(page || '1'), sort, topic, specialization, type, level, key || '')
    const data = result.data
    return json(data)
}