import type { PageServerLoad } from './$types';
import * as db from '$lib/server/database';
import { isLoadingForm } from '$lib/store';
import { fail, type Actions, redirect } from '@sveltejs/kit';

type Types = { id: number, name: string, isWord: boolean }
type Levels = { id: number, name: string }
type Specializations = { id: number, name: string }
type Topics = { id: number, name: string, isWord: boolean, selected: boolean, image: string }

export const load: PageServerLoad = async ({ cookies }) => {
    const token: string | undefined = cookies.get('accessToken');
    if (!token) {
        isLoadingForm.set(false)
        throw redirect(307, '/login');
    }
    const types: Types[] = await db.getTypes(true)
    const levels: Levels[] = await db.getLevels()
    const specializations: Specializations[] = await db.getSpecializations()
    let topics: Topics[] = await db.getTopics(true)

    topics = topics.map(topic => {
        return { ...topic, selected: false }
    })
    return {
        types, levels, specializations, topics
    }
};


export const actions = {
    addWord: async ({ request, cookies }) => {
        try {
            isLoadingForm.set(true)
            const token: string | undefined = cookies.get('accessToken');
            if (!token) {
                isLoadingForm.set(false)
                throw redirect(307, '/login');
            }
            const formData = Object.fromEntries(await request.formData());
            const { ilustrate } = formData as { ilustrate: File };
            const ilustrateFile = ilustrate;
            const formDataWithFile = new FormData();
            if (
                ((formData.ilustrate as File).name &&
                    (formData.ilustrate as File).name !== 'undefined')
            ) {
                formDataWithFile.append('picture', ilustrateFile);
            }
            const content = formData.content
            const mean = formData.mean
            const typeId = formData.typeId
            const topicId = formData.topicId ? String(formData.topicId).split(',') : [];
            const levelId = formData.levelId
            const specializationId = formData.specializationId
            const examples = formData.examples
            const synonyms = formData.synonyms
            const antonyms = formData.antonyms
            const note = formData.note
            const phonetic = formData.phonetic
            formDataWithFile.append('content', content);
            formDataWithFile.append('mean', mean);
            formDataWithFile.append('typeId', typeId);
            if (topicId.length > 1) {
                for (const id of topicId) {
                    formDataWithFile.append('topicId', id);
                }
            } else {
                for (const id of topicId) {
                    formDataWithFile.append('topicId', id);
                    formDataWithFile.append('topicId', id);
                }
            }
            formDataWithFile.append('levelId', levelId);
            formDataWithFile.append('specializationId', specializationId);
            if (typeof examples === 'string' && examples !== '') {
                const examplesArray = examples.split('\r\n');
                if (examplesArray.length > 1) {
                    for (const example of examplesArray) {
                        formDataWithFile.append('examples', example);
                    }
                } else {
                    for (const example of examplesArray) {
                        formDataWithFile.append('examples', example);
                    }
                    formDataWithFile.append('examples', '');
                }
            }
            if (typeof synonyms === 'string' && synonyms !== '') {
                const synonymsArray = synonyms.split('\r\n');
                if (synonymsArray.length > 1) {
                    for (const synonym of synonymsArray) {
                        formDataWithFile.append('synonyms', synonym);
                    }
                } else {
                    for (const synonym of synonymsArray) {
                        formDataWithFile.append('synonyms', synonym);
                    }
                    formDataWithFile.append('synonyms', '');
                }
            }
            if (typeof antonyms === 'string' && antonyms !== '') {
                const antonymsArray = antonyms.split('\r\n');
                if (antonymsArray.length > 1) {
                    for (const antonym of antonymsArray) {
                        formDataWithFile.append('antonyms', antonym);
                    }
                } else {
                    for (const antonym of antonymsArray) {
                        formDataWithFile.append('antonyms', antonym);
                    }
                    formDataWithFile.append('antonyms', '');
                }
            }
            if (note) formDataWithFile.append('note', note);
            if (phonetic) formDataWithFile.append('phonetic', phonetic);
            const res = await db.postWord(token, formDataWithFile)
            if (res.statusCode !== 200) {
                return fail(400, { error: true, message: res.message });
            } else {
                return { success: true, message: res.message }
            }
        } catch (error) {
            isLoadingForm.set(false)
            throw error
        } finally {
            isLoadingForm.set(false)
        }
    },
    editWord: async ({ request, cookies }) => {
        try {
            isLoadingForm.set(true)
            const token: string | undefined = cookies.get('accessToken');
            if (!token) {
                isLoadingForm.set(false)
                throw redirect(307, '/login');
            }
            const formData = Object.fromEntries(await request.formData());
            const { ilustrate } = formData as { ilustrate: File };
            const ilustrateFile = ilustrate;
            const formDataWithFile = new FormData();
            if (
                ((formData.ilustrate as File).name &&
                    (formData.ilustrate as File).name !== 'undefined')
            ) {
                formDataWithFile.append('picture', ilustrateFile);
            }
            const id = formData.id
            const content = formData.content
            const mean = formData.mean
            const typeId = formData.typeId
            const topicId = formData.topicId ? String(formData.topicId).split(',') : []
            const levelId = formData.levelId
            const specializationId = formData.specializationId
            const examples = formData.examples
            const synonyms = formData.synonyms
            const antonyms = formData.antonyms
            const note = formData.note
            const phonetic = formData.phonetic
            formDataWithFile.append('content', content);
            formDataWithFile.append('mean', mean);
            formDataWithFile.append('typeId', typeId);
            if (topicId.length > 1) {
                for (const id of topicId) {
                    formDataWithFile.append('topicId', id);
                }
            } else {
                for (const id of topicId) {
                    formDataWithFile.append('topicId', id);
                    formDataWithFile.append('topicId', id);
                }
            }
            formDataWithFile.append('levelId', levelId);
            formDataWithFile.append('specializationId', specializationId);
            if (typeof examples === 'string' && examples !== '') {
                const examplesArray = examples.split('\r\n');
                if (examplesArray.length > 1) {
                    for (const example of examplesArray) {
                        formDataWithFile.append('examples', example);
                    }
                } else {
                    for (const example of examplesArray) {
                        formDataWithFile.append('examples', example);
                    }
                    formDataWithFile.append('examples', '');
                }
            }
            if (typeof synonyms === 'string' && synonyms !== '') {
                const synonymsArray = synonyms.split('\r\n');
                if (synonymsArray.length > 1) {
                    for (const synonym of synonymsArray) {
                        formDataWithFile.append('synonyms', synonym);
                    }
                } else {
                    for (const synonym of synonymsArray) {
                        formDataWithFile.append('synonyms', synonym);
                    }
                    formDataWithFile.append('synonyms', '');
                }
            }
            if (typeof antonyms === 'string' && antonyms !== '') {
                const antonymsArray = antonyms.split('\r\n');
                if (antonymsArray.length > 1) {
                    for (const antonym of antonymsArray) {
                        formDataWithFile.append('antonyms', antonym);
                    }
                } else {
                    for (const antonym of antonymsArray) {
                        formDataWithFile.append('antonyms', antonym);
                    }
                    formDataWithFile.append('antonyms', '');
                }
            }
            if (note) formDataWithFile.append('note', note);
            if (phonetic) formDataWithFile.append('phonetic', phonetic);
            const res = await db.editWord(token, id, formDataWithFile)
            if (res.statusCode !== 200) {
                return fail(400, { error: true, message: res.message });
            } else {
                return { success: true, message: res.message }
            }
        } catch (error) {
            isLoadingForm.set(false)
            throw error
        } finally {
            isLoadingForm.set(false)
        }
    }
} satisfies Actions;