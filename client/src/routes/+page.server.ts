import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import * as db from '$lib/server/database';


export const load: PageServerLoad = async ({ cookies, request }) => {
    // const user = await db.getUserFromSession(cookies.get('sessionid'));
    // return { user };
    console.log(request);

};
