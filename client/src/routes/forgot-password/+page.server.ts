import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import * as db from '$lib/server/database';


export const load: PageServerLoad = async ({ cookies, request }) => {

};

export const actions = {
    forgotPassword: async ({ cookies, request, url }) => {
        const data = await request.formData();

        const email = data.get('email');
        const password = data.get('password');
        const repassword = data.get('repassword')
        const code = data.get('code')

        if (!email) return fail(400, { missingEmail: true });
        if (!password || password.length < 6) return fail(400, { passIsInvalid: true });
        if (password !== repassword) return fail(400, { notmatch: true });
        if (!code) return fail(400, { passCode: true });

        const result = await db.resetPassword({ newPassword: password, email, code })
        if (result.data.statusCode == 400) {
            return fail(400, { email, invalidCredential: true, message: result.data.message })
        } else {
            return { successGoto: true, message: result.data.message };
        }

    },
    sendVerifyCode: async ({ cookies, request, url }) => {
        const data = await request.formData();

        const email = data.get('email');

        if (!email) return fail(400, { missingEmail: true });

        const result = await db.sendVerifyCode({ email })
        if (result.data.statusCode == 400) {
            return fail(400, { invalidCredential: true, message: result.data.message });
        } else {
            return { success: true, message: result.data.message };
        }
    }
} satisfies Actions;