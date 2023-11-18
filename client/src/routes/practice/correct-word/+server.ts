import { json } from '@sveltejs/kit'
import * as db from '$lib/server/database';


export async function GET(event) {
    const token = event.cookies.get('accessToken');

    if (!token) {
        return json({ error: 'Hết hạn đăng nhập. Vui lòng đăng nhập lại' })
    }
    const query = event.url.search
    const params = new URLSearchParams(query);
    const topic = params.getAll('topic')
    const type = params.get('type')
    const specialization = params.get('specialization')
    const level = params.get('level')
    const numSentence = params.get('numSentence')

    const result = await db.getWordPack(token, type, level, specialization, topic, parseInt(numSentence || '5'))

    return json(result)
}

export async function POST(event) {
    const token = event.cookies.get('accessToken');

    if (!token) {
        return json({ error: 'Hết hạn đăng nhập. Vui lòng đăng nhập lại' })
    }
    const body = await event.request.json();
    const result = await db.createPractice(token, body)
    return json(result)
}