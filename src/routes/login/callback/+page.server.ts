import type { PageServerLoad } from '../$types';
import { error, redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async (event) => {
	console.log(event);
	const url = new URL(event.request.url);
	const code = url.searchParams.get('code');
	const state = url.searchParams.get('state');

	if (!code || !state) {
		throw error(500, {
			message: 'Something went wrong. State or authorisation code could not be found.'
		});
	}

	const response = await fetch(`${env.API_URL}/login/callback?code=${code}&state=${state}`);
	const data = await response.json();

	const accessToken = data.accessToken;
	const refreshToken = data.refreshToken;

	if (!accessToken || !refreshToken) {
		throw error(401, {
			message: 'Something went wrong. Access token or refresh token could not be found.'
		});
	}

	// Set the access token and refresh token in the cookie
	event.cookies.set('accessToken', accessToken, {
		httpOnly: true,
		secure: true,
		sameSite: 'strict',
        path: "/",
		maxAge: 60 * 60 * 24 * 7 // 7 days
	});

	event.cookies.set('refreshToken', refreshToken, {
		httpOnly: true,
		secure: true,
		sameSite: 'strict',
        path: "/",
		maxAge: 60 * 60 * 24 * 7 // 7 days
	});

	// Redirect to the home page
	throw redirect(301, '/');
};
