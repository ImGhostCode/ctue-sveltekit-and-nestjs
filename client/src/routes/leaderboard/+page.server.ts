import type { PageServerLoad } from "../$types";
import * as db from '$lib/server/database';
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ cookies }) => {
    const token: string | undefined = cookies.get('accessToken');
    if (!token) {
        throw redirect(307, '/login');
    }
    const result = await db.getLeaderboard()
    return { leaderboard: result.data };
};