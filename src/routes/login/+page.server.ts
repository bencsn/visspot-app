import { env } from '$env/dynamic/private';
import { error, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	login: async (event) => {
		console.log(event);
		const apiUrl = env.API_URL;
		if (!apiUrl) {
			throw error(500, { message: 'API_URL environment variable is not defined' });
		}

		// redirect to the login page
		throw redirect(301, `${apiUrl}/login`);
	}
};
