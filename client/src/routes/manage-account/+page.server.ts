import type { PageServerLoad } from "../$types";
import type { Actions } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ cookies }) => {
    let token = cookies.get('accessToken');
    return { token };
};

export const actions = {

} satisfies Actions;
