import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import * as db from '$lib/server/database';

export const load: PageServerLoad = async ({ cookies }) => {

};

export const actions = {
    login: async ({ cookies, request, url }) => {
        const data = await request.formData();
        const email = data.get('email');
        if (!email) {
            return fail(400, { email, missingEmail: true });
        }
        const password = data.get('password');
        if (!password || password.length < 6) {
            return fail(400, { password, passIsInvalid: true });
        }
        const result = await db.login(data)
        if (result.data.statusCode == 400) {
            return fail(400, { email, invalidCredential: true, message: result.data.message });
        } else if (result.data.statusCode == 403) {
            return fail(400, { feedback: result.data.data.feedback, isBan: true, message: result.data.message });
        } else {
            cookies.set('accessToken', result.data.data.accessToken, { secure: true, httpOnly: true, maxAge: 60 * 60 * 24 });
            return { success: true, message: result.data.message };
        }
    },
} satisfies Actions;