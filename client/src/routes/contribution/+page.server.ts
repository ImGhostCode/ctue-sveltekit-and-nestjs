import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import * as db from '$lib/server/database';
import { goto } from '$app/navigation';
import { isLoadingForm } from '$lib/store';

type Types = { id: number, name: string, isWord: boolean }
type Levels = { id: number, name: string }
type Specializations = { id: number, name: string }
type Topics = { id: number, name: string }

export const load: PageServerLoad = async ({ cookies }) => {

    const token: string | undefined = cookies.get('accessToken');
    const typesWord: Types = await db.getTypes(true)
    const typesSentence: Types = await db.getTypes(false)

    const levels: Types = await db.getLevels()
    const specializations: Specializations = await db.getSpecializations()
    const topics: Topics = await db.getTopics()



    //  console.log(typesWord, typesSentence);

    return {
        token, typesWord, typesSentence, levels, specializations, topics
    };
};


export const actions = {
    contribute: async ({ request, cookies }) => {
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

            // Validate required fields
            const requiredFields = ['content', 'mean', 'phonetic', 'ilustrate'];
            const missingFields: { [key: string]: boolean } = { 'content': false, 'mean': false, 'phonetic': false, 'ilustrate': false };

            for (const field of requiredFields) {
                if (!formData[field] || ((formData[field] as File).name &&
                    (formData[field] as File).name === 'undefined')) {
                    isLoadingForm.set(false);
                    missingFields[field] = true;
                }
            }

            if (missingFields.content || missingFields.mean || missingFields.phonetic || missingFields.ilustrate) {
                return fail(400, {
                    error: `Missing`,
                    message: 'Vui lòng diền các thông tin cần thiết',
                    missingFields
                });
            }

            const { ilustrate } = formData as { ilustrate: File };
            const ilustrateFile = ilustrate;

            const formDataWithFile = new FormData();
            if (
                ((formData.ilustrate as File).name &&
                    (formData.ilustrate as File).name !== 'undefined')
            ) {

                formDataWithFile.append('picture', ilustrateFile);
            }


            const contentData = {
                content: formData.content,
                mean: formData.mean,
                typeId: Number(formData.typeId),
                topicId: String(formData.topicId).split(','),
                levelId: Number(formData.levelId),
                specializationId: Number(formData.specializationId),
                examples: formData.examples,
                synonyms: formData.synonyms,
                antonyms: formData.antonyms,
            };

            formDataWithFile.append('type', 'word');
            formDataWithFile.append('content', JSON.stringify(contentData));

            const res = await db.postContribution(token, formDataWithFile)

            if (res.data.statusCode == 400) {

                return fail(400, { error: 'Error', message: res.data.message });

            } else {
                return { success: true, data: res.data, message: res.message }
            }
        } catch (error) {
            isLoadingForm.set(false)
            throw error
        } finally {
            isLoadingForm.set(false)
        }

    }
} satisfies Actions;