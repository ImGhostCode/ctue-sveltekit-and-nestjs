import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import * as db from '$lib/server/database';
import { goto } from '$app/navigation';
import { isLoadingForm } from '$lib/store';

type Types = { id: number, name: string, isWord: boolean }
type Levels = { id: number, name: string }
type Specializations = { id: number, name: string }
type Topics = { id: number, name: string, isWord: boolean, selected: boolean, image: string }

export const load: PageServerLoad = async ({ cookies }) => {

    const token: string | undefined = cookies.get('accessToken');

    if (!token) {
        throw redirect(307, '/login');
    }

    const typesWord: Types = await db.getTypes(true)


    const levels: Levels = await db.getLevels()
    const specializations: Specializations = await db.getSpecializations()
    let topicsWord: Topics[] = await db.getTopics(true)

    topicsWord = topicsWord.map(topic => {
        return { ...topic, selected: false }
    })

    return {
        token, typesWord, levels, specializations, topicsWord

    };
};


// export const actions = {
//     'get-word-pack': async ({ request, cookies }) => {
//         try {
//             isLoadingForm.set(true)

//             const token: string | undefined = cookies.get('accessToken');

//             if (!token) {
//                 isLoadingForm.set(false)
//                 return fail(400, {
//                     token,
//                     noToken: true,
//                     message: 'Hết hạn đăng nhập'
//                 });

//             }

//             const formData = Object.fromEntries(await request.formData());

//             let topicsId: string[] = [];
//             if (formData.topics instanceof File) {
//                 // Handle if topics is a file, maybe upload or process it differently
//             } else if (formData.topics) {
//                 topicsId = formData.topics.split(',');
//             }

//             const res = await db.getWordPack(token, parseInt(formData.typeId), parseInt(formData.levelId), parseInt(formData.specializationId), topicsId, parseInt(formData.numberOfSentence))


//             if (res.data?.statusCode == 400) {

//                 return fail(400, { error: 'Error', message: res.data.message });

//             } else {
//                 return { success: true, data: res.data, message: 'Gửi yêu cầu thành công' }
//             }
//         } catch (error) {
//             isLoadingForm.set(false)
//             console.log('error:::', error);

//             throw error
//         } finally {
//             isLoadingForm.set(false)
//         }

//     },
// } satisfies Actions;