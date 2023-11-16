import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import * as db from '$lib/server/database';
import { goto } from '$app/navigation';
import { isLoadingForm } from '$lib/store';

type Types = { id: number, name: string, isWord: boolean }
type Levels = { id: number, name: string }
type Specializations = { id: number, name: string }
type Topics = { id: number, name: string, isWord: boolean, selected: boolean }


export const load: PageServerLoad = async ({ cookies }) => {

    const token: string | undefined = cookies.get('accessToken');

    if (!token) {
        throw redirect(307, '/login');
    }
    const typesWord: Types = await db.getTypes(true)
    const typesSentence: Types = await db.getTypes(false)

    const levels: Levels = await db.getLevels()
    const specializations: Specializations = await db.getSpecializations()
    let topicsWord: Topics[] = await db.getTopics(true)
    let topicsSentence: Topics[] = await db.getTopics(false)

    let listPendingContribution = await db.getListContribution(token || '', -1)


    return {
        token, listPendingContribution: listPendingContribution.data, typesWord, typesSentence, levels, specializations, topicsWord, topicsSentence
    };
};


export const actions = {
    'verify-contribution': async ({ request, cookies }) => {
        try {
            isLoadingForm.set(true)

            const token: string | undefined = cookies.get('accessToken');

            if (!token) {
                isLoadingForm.set(false)
                return fail(400, {
                    token,
                    noToken: true,
                    message: 'Hết hạn đăng nhập'
                });

            }

            const formData = Object.fromEntries(await request.formData());

            console.log(formData);


            const res = await db.verifyContribute(token, Number(formData.conId), { status: Number(formData.status), feedback: formData.feedback })

            if (res.data?.statusCode == 400) {

                return fail(400, { error: 'Error', message: res.data.message });

            } else {
                return { success: true, data: res.data, message: res.message }
            }
        } catch (error) {
            isLoadingForm.set(false)
            // console.log(error);

            throw error
        } finally {
            isLoadingForm.set(false)
        }
    },
} satisfies Actions;