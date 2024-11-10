import type { PageServerLoad } from './$types';
import { fetchBooks } from '$lib/backendApi';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	if (!await event.locals.auth()) {
		redirect(302, '/auth/signin');
	}

	return {
		books: await fetchBooks()
	};
};
