import { json } from '@sveltejs/kit'
import * as db from '$lib/server/database';

export async function GET(event) {
    const token = event.cookies.get('accessToken');
    if (!token) {
        return json({ error: 'Hết hạn đăng nhập. Vui lòng đăng nhập lại' })
    }
    const query = event.url.search
    const params = new URLSearchParams(query);
    const page = params.get('page');
    const result = await db.getAllPractices(token, parseInt(page || '1'))
    return json(result)
}
