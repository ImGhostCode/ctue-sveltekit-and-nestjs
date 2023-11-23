import { json } from '@sveltejs/kit'
import * as db from '$lib/server/database';

export async function POST(event) {
    const data = await event.request.formData()
    const token = event.cookies.get('accessToken');
    const userId = data.get('userId')
    const result = await db.deleteUser(token, userId)
    return json(result)
}

export async function GET(event) {
    const token = event.cookies.get('accessToken');
    const query = event.url.search
    const params = new URLSearchParams(query);
    const page = params.get('page');
    const result = await db.getAllUsers(token, parseInt(page || '1'))
    return json(result)
}

export async function PATCH(event) {
    const token = event.cookies.get('accessToken');
    const data = await event.request.formData()
    const userId = await data.get('userId')
    const feedback = await data.get('feedback')
    const result = await db.toggleBanUser(token, userId, feedback || '')
    return json(result)
}