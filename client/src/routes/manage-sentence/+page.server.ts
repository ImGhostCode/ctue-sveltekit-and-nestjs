import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import * as db from '$lib/server/database';

type Types = { id: number, name: string, isWord: boolean }
type Topics = { id: number, name: string, isWord: boolean, selected: boolean }

export const load: PageServerLoad = async ({ cookies }) => {
    const token: string | undefined = cookies.get('accessToken');
    if (!token) {
        throw redirect(307, '/login');
    }
    const typesSentence: Types[] = await db.getTypes(false)
    let topicsSentence: Topics[] = await db.getTopics(false)
    topicsSentence = topicsSentence.map(topic => {
        return { ...topic, selected: false }
    })
    return {
        typesSentence, topicsSentence
    };
};


export const actions = {
    postSentence: async ({ request, cookies }) => {
        const token: string | undefined = cookies.get('accessToken');
        if (!token) {
            throw redirect(307, '/login');
        }
        const formData = Object.fromEntries(await request.formData())
        const content = formData.content
        const mean = formData.mean
        const note = formData.note
        const typeId = formData.typeId
        let topicId: any[] = String(formData.topicId).split(',')
        const res = await db.postSentence(token, { content, mean, note, typeId, topicId })
        if (res.statusCode !== 200) {
            return fail(400, { error: true, message: res.message });
        } else {
            return { success: true, message: res.message }
        }
    },
    patchSentence: async ({ request, cookies }) => {
        const token: string | undefined = cookies.get('accessToken');
        if (!token) {
            throw redirect(307, '/login');
        }
        const formData = Object.fromEntries(await request.formData())
        const content = formData.content
        const mean = formData.mean
        const note = formData.note
        const typeId = formData.typeId
        const id = formData.id
        let topicId: any[] = String(formData.topicId).split(',')
        const res = await db.patchSentence(token, { content, mean, note, typeId, topicId }, id)
        if (res.statusCode !== 200) {
            return fail(400, { error: true, message: res.message });
        } else {
            return { success: true, message: res.message }
        }
    }
} satisfies Actions;