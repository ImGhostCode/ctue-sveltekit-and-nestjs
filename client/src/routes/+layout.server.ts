import * as db from '$lib/server/database';
import type { LayoutServerLoad } from './$types';
import { fail, redirect, } from '@sveltejs/kit';


export const load: LayoutServerLoad = async ({ request, cookies }) => {
    const token: string | undefined = cookies.get('accessToken');
    let user = null;
    if (token) {
        user = await db.getUser(token);
    }

    return {
        user: user?.data, // Make sure 'user' is set to the user data
    };
};

