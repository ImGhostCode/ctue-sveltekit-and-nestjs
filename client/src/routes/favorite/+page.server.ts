import type { PageServerLoad } from "../$types";
import { redirect, type Actions } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ cookies }) => {
    let token = cookies.get('accessToken');
    if (!token) {
        throw redirect(307, '/login');
    }
    return { token };
};