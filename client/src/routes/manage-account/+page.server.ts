import type { PageServerLoad } from "../$types";
import * as db from '$lib/server/database';
import { fail, type Actions } from "@sveltejs/kit";

let token: string | undefined
let users: []
let totalPages: number
export const load: PageServerLoad = async ({ cookies }) => {
    token = cookies.get('accessToken');
    const response = await db.getAllUsers(token || '', 1)
    users = response.data.accounts
    totalPages = response.data.totalPages
    return { token, users, totalPages };
};

export const actions = {
    prePage: async ({ request }) => {
        const data = await request.formData();
        let currentPage: any = data.get('currentPage')
        if (currentPage <= '1') {
            return fail(400, { invalidCredential: true, message: '' })
        }
        currentPage = parseInt(currentPage) - 1
        const response = await db.getAllUsers(token || '', currentPage)
        if (response.statusCode == 400) {
            return fail(400, { invalidCredential: true, message: response.message })
        } else {
            users = response.data.accounts
            totalPages = response.data.totalPages
            return { success: true, currentPage, totalPages, users };
        }
    },
    nextPage: async ({ request }) => {
        const data = await request.formData();
        let currentPage: any = data.get('currentPage')
        if (currentPage >= totalPages) {
            return fail(400, { invalidCredential: true, message: '' })

        }
        currentPage = parseInt(currentPage) + 1
        const response = await db.getAllUsers(token || '', currentPage)
        if (response.statusCode == 400) {
            return fail(400, { invalidCredential: true, message: response.message })
        } else {
            users = response.data.accounts
            totalPages = response.data.totalPages
            return { success: true, currentPage, totalPages, users };
        }
    }
} satisfies Actions;
