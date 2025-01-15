import type { PageServerLoad } from '../../$types';
import { fetchBook } from '$lib/backendApi';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, params }) => {
  if (!await locals.auth()) {
    redirect(302, '/auth/signin');
  }

  return {
    book: await fetchBook(params.slug)
  };
};
