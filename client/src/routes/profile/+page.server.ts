import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import * as db from '$lib/server/database';
import { goto } from '$app/navigation';


export const load: PageServerLoad = async ({ cookies }) => {
    // const user = await db.getUserFromSession(cookies.get('sessionid'));
    const token: string | undefined = cookies.get('accessToken');
    return { token };
};



export const actions = {
    update: async ({ request, cookies }) => {
        try {
            const formData = Object.fromEntries(await request.formData());
            const token: string | undefined = cookies.get('accessToken');
            const userId = Number(formData.userId)
            // console.log(formData);
            delete formData.userId
            console.log(token);

            if (!token) {
                return fail(400, {
                    token,
                    noToken: true
                });

            }

            const { avt } = formData as { avt: File };
            const avtFile = avt;
            const formDataWithFile = new FormData();
            if (
                ((formData.avt as File).name &&
                    (formData.avt as File).name !== 'undefined') && formData.name
            ) {
                // return fail(400, {
                //     error: true,
                //     message: 'You must provide a file or name to update'
                // });
                formDataWithFile.append('avt', avtFile);
            }
            formDataWithFile.append('name', formData.name);

            const result = await db.updateProfile(userId, token || '', formDataWithFile);

            if (result.statusCode == 200) {
                return { success: true, message: result.message };
            } else {
                return fail(400, {
                    error: true,
                    message: result.message
                });
            }

        } catch (error) {
            throw error
        }

    }
} satisfies Actions;