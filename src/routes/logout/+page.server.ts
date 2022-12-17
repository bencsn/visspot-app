import type { Actions } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const actions: Actions = {
	default: async (event) => {
		event.cookies.set('accessToken', '', {
			httpOnly: true,
			secure: true,
			sameSite: 'strict',
			path: '/',
			maxAge: 60 * 60 * 24 * 7 // 7 days
		});

		event.cookies.set('refreshToken', '', {
			httpOnly: true,
			secure: true,
			sameSite: 'strict',
			path: '/',
			maxAge: 60 * 60 * 24 * 7 // 7 days
		});

		throw redirect(302, '/login');
	}
};
