import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import * as db from '$lib/server/database';
import { goto } from '$app/navigation';


export const load: PageServerLoad = async ({ cookies, request }) => {
    // const user = await db.getUserFromSession(cookies.get('sessionid'));
    // return { user };
    // console.log(request);

};


export const actions = {
    logout: async ({ request, cookies }) => {
        try {
            cookies.delete('accessToken');
            redirect(300, '/')

        } catch (error) {
            throw error
        }

    }
} satisfies Actions;
