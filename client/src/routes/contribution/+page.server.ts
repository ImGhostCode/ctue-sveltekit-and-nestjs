import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import * as db from '$lib/server/database';
import { goto } from '$app/navigation';
import { isLoadingForm } from '$lib/store';


export const load: PageServerLoad = async ({ cookies }) => {
    // const user = await db.getUserFromSession(cookies.get('sessionid'));
    const token: string | undefined = cookies.get('accessToken');
    return { token };
};


export const actions = {
    contribute: async ({ request, cookies }) => {
        try {
            isLoadingForm.set(true)

            const formData = Object.fromEntries(await request.formData());
            console.log("form data contribution::: ", formData);
            const token: string | undefined = cookies.get('accessToken');
            const userId = Number(formData.userId)
            // console.log(formData);
            delete formData.userId

            if (!token) {
                isLoadingForm.set(false)
                return fail(400, {
                    token,
                    noToken: true
                });

            }

            const { ilustrate } = formData as { ilustrate: File };
            const ilustrateFile = ilustrate;

            const formDataWithFile = new FormData();
            if (
                ((formData.ilustrate as File).name &&
                    (formData.ilustrate as File).name !== 'undefined') && formData.name
            ) {
                // return fail(400, {
                //     error: true,
                //     message: 'You must provide a file or name to update'
                // });
                formDataWithFile.append('ilustrate', ilustrateFile);
            }


            // formDataWithFile.append('name', formData.name);



            // const result = await db.updateProfile(userId, token || '', formDataWithFile);

            // if (result.statusCode == 200) {
            //     isLoadingForm.set(false)
            //     return { success: true, message: result.message };
            // } else {
            //     return fail(400, {
            //         error: true,
            //         message: result.message
            //     });
            // }

            return { data: true }

        } catch (error) {
            isLoadingForm.set(false)
            throw error
        } finally {
            isLoadingForm.set(false)
        }

    }
} satisfies Actions;