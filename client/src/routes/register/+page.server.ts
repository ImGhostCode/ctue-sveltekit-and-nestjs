import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import * as db from '$lib/server/database';

export const actions = {
    register: async ({ cookies, request, url }) => {
        const data = await request.formData();
        const email = data.get('email');
        if (!email) {
            return fail(400, { email, missingEmail: true });
        }
        const name = data.get('name');
        if (!name) {
            return fail(400, { name, missingName: true });
        }
        const password = data.get('password');
        if (!password || password.length < 6) {
            return fail(400, { password, incorrectPassword: true });
        }
        const result = await db.register(data)
        if (result.data.statusCode == 400) {
            return fail(400, { name, isExisted: true, message: result.data.message });
        } else {
            return { success: true, message: result.data.message };
        }
    },
} satisfies Actions;