import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import * as db from '$lib/server/database';


export const load: PageServerLoad = async ({ cookies }) => {
    // const user = await db.getUserFromSession(cookies.get('sessionid'));
    // return { user };
};

export const actions = {

    register: async ({ cookies, request, url }) => {
        // TODO register the user
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


        console.log(email, name, password);

        const result = await db.register(data)
        console.log(result.data);

        if (result.data.statusCode == 400) {

            return fail(400, { name, isExisted: true, message: result.data.message });

        } else {

            return { success: true, message: result.data.message };
        }



        // if (!user || user.password !== hash(password)) {
        //     return fail(400, { email, incorrect: true });
        // }


    },
} satisfies Actions;