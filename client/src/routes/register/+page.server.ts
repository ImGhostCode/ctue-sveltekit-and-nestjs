import { error } from '@sveltejs/kit'; import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ params }) => {
    // const post = await getPostFromDatabase(params.slug);
    // if (post) { return post; }
    // throw error(404, 'Not found');
};