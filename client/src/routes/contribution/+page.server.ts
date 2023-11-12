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
    let wordConHistory = await db.getContribution(token || '', 'word')
    let sentenceConHistory = await db.getContribution(token || '', 'sentence')

    topicsWord = topicsWord.map(topic => {
        return { ...topic, selected: false }
    })

    topicsSentence = topicsSentence.map(topic => {
        return { ...topic, selected: false }
    })

    return {
        token, typesWord, typesSentence, levels, specializations, topicsWord, topicsSentence, conHistory: [...wordConHistory.data, ...sentenceConHistory.data]

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
            } else {
                fail(400, {
                    error: `Missing`,
                    message: 'Vui lòng diền các thông tin cần thiết',
                    missingFields: []
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
                note: formData.note
            };

            formDataWithFile.append('type', 'word');
            formDataWithFile.append('content', JSON.stringify(contentData));

            const res = await db.postContribution(token, formDataWithFile)


            if (res.data?.statusCode == 400) {

                return fail(400, { error: 'Error', message: res.data.message });

            } else {
                return { success: true, data: res.data, message: 'Gửi yêu cầu thành công' }
            }
        } catch (error) {
            isLoadingForm.set(false)
            console.log('error:::', error);

            // throw error
        } finally {
            isLoadingForm.set(false)
        }

    },
    'contribute-sentence': async ({ request, cookies }) => {
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
            const requiredFields = ['content', 'mean'];
            const missingFields: { [key: string]: boolean } = { 'content': false, 'mean': false };

            for (const field of requiredFields) {
                if (!formData[field]) {
                    isLoadingForm.set(false);
                    missingFields[field] = true;
                }
            }

            if (missingFields.content || missingFields.mean) {
                return fail(400, {
                    error: `Missing`,
                    message: 'Vui lòng diền các thông tin cần thiết',
                    missingFields
                });
            } else {
                fail(400, {
                    error: `Missing`,
                    message: 'Vui lòng diền các thông tin cần thiết',
                    missingFields: []
                });
            }


            const formDataWithFile = new FormData();

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
                note: formData.note
            };

            formDataWithFile.append('type', 'sentence');
            formDataWithFile.append('content', JSON.stringify(contentData));

            const res = await db.postContribution(token, formDataWithFile)

            if (res.data?.statusCode == 400) {

                return fail(400, { error: 'Error', message: res.data.message });

            } else {
                return { success: true, data: res.data, message: 'Gửi yêu cầu thành công' }
            }
        } catch (error) {
            isLoadingForm.set(false)
            // console.log(error);

            throw error
        } finally {
            isLoadingForm.set(false)
        }

    }
} satisfies Actions;