import type { PageServerLoad } from './$types';
import { getAccessToken } from '../../lib/server/helpers/getAccessToken.server';
import { env } from '$env/dynamic/private';
import { redirect, type Actions } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	const apiEndpoint = env.API_URL;
	if (!apiEndpoint) {
		throw new Error('API_URL is not defined');
	}
	const accessToken = getAccessToken(event);
	if (!accessToken) {
		throw redirect(302, '/login');
	}
	try {
		const response = await fetch(`${apiEndpoint}/projects`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`
			}
		});
		const data = await response.json();
		return {
			projects: data.projects,
			error: null
		};
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		console.error(error);
		return {
			projects: [],
			error: error.message
		};
	}
};

export const actions: Actions = {
	createProject: async (event) => {
		const formData = await event.request.formData();
		const name = formData.get('Name');
        console.log(name)
		const apiUrl = env.API_URL;
		if (!apiUrl) {
			throw new Error('API_URL is not defined');
		}
		const accessToken = getAccessToken(event);
		if (!accessToken) {
			throw redirect(302, '/login');
		}

		try {
			const response = await fetch(`${apiUrl}/projects`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`
				},
				body: JSON.stringify({
					name
				})
			});
			const data = await response.json();
            if (!response.status.toString().startsWith('2')) {
                console.error(data.message)
                throw new Error(data.message)
            }
			return {
				project: data
			};
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			return {
				error: error.message
			};
		}
	}
};
