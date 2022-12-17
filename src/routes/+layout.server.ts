import type { LayoutServerLoad } from './$types';
import { getCurrentUser } from '$lib/server/helpers/getCurrentUser.server';

export const load: LayoutServerLoad = async (event) => {
	const currentUser = await getCurrentUser(event);
	const isLoggedIn = !!currentUser;
	return { user: currentUser, isLoggedIn };
};
