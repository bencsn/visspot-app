import type { RequestEvent, ServerLoadEvent } from '@sveltejs/kit';

export function getAccessToken(
	event: ServerLoadEvent<Partial<Record<string, string>>, Record<string, unknown>, string | null> | RequestEvent<Partial<Record<string, string>>, string | null>
) {
	return event.cookies.get('accessToken');
}
