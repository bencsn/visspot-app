import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ params }) => {
	console.log('load');
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const slug = (params as any).slug as string;
	return {
		slug
	};
};
