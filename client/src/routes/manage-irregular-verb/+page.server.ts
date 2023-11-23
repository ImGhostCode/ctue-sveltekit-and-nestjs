import { redirect, type Actions, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import * as db from '$lib/server/database';

export const load: PageServerLoad = async ({ cookies }) => {
    const token: string | undefined = cookies.get('accessToken');
    if (!token) {
        throw redirect(307, '/login');
    }
    return {}
};

export const actions = {
    postIrregular: async ({ request, cookies }) => {
        const token: string | undefined = cookies.get('accessToken');
        if (!token) {
            throw redirect(307, '/login');
        }
        const formData = Object.fromEntries(await request.formData())
        const v1 = formData.v1
        const v2 = formData.v2
        const v3 = formData.v3
        const mean = formData.mean
        const res = await db.postIrregularVerb(token, { v1, v2, v3, mean })
        if (res.statusCode !== 200) {
            return fail(400, { error: true, message: res.message });
        } else {
            return { success: true, message: res.message }
        }
    },
    patchIrregular: async ({ request, cookies }) => {
        const token: string | undefined = cookies.get('accessToken');
        if (!token) {
            throw redirect(307, '/login');
        }
        const formData = Object.fromEntries(await request.formData())
        const id = formData.id
        const v1 = formData.v1
        const v2 = formData.v2
        const v3 = formData.v3
        const mean = formData.mean
        const res = await db.patchIrregular(token, { v1, v2, v3, mean }, id)
        if (res.statusCode !== 200) {
            return fail(400, { error: true, message: res.message });
        } else {
            return { success: true, message: res.message }
        }
    }
} satisfies Actions;