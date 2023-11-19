import type { PageServerLoad } from "../$types";
import * as db from '$lib/server/database';


export const load: PageServerLoad = async ({ }) => {
    const result = await db.getLeaderboard()
    return { leaderboard: result.data };
};