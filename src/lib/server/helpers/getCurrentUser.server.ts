import { env } from '$env/dynamic/private';
import { error, type HttpError, type ServerLoadEvent } from '@sveltejs/kit';
import { getAccessToken } from './getAccessToken.server';


export async function getCurrentUser(event: ServerLoadEvent) {
    try {
        const accessToken = getAccessToken(event);
        if (!env.API_URL) {
            throw error(500, { message: 'API_URL environment variable is not defined' });
        }

        if (!accessToken) {
            return null
        }
        // get user info
        const userResponse = await fetch(`${env.API_URL}/user/me`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        if (userResponse.status === 401) {
            // refresh token
            const refreshToken = event.cookies.get('refreshToken');
            if (!refreshToken) {
                return null
            }
            const refreshResponse = await fetch(`${env.API_URL}/login/refresh-token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    refreshToken
                })
            });
            if (refreshResponse.status !== 200) {
                return null
            }
            const refreshData = await refreshResponse.json();
            const newAccessToken = refreshData.accessToken;
            const newRefreshToken = refreshData.refreshToken;
            if (!newAccessToken || !newRefreshToken) {
                return null
            }
            // Set the access token and refresh token in the cookie
            event.cookies.set('accessToken', newAccessToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                path: '/',
                maxAge: 60 * 60 * 24 * 7 // 7 days
            });

            event.cookies.set('refreshToken', newRefreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                path: '/',
                maxAge: 60 * 60 * 24 * 7 // 7 days
            });

            // retry
            const retryResponse = await fetch(`${env.API_URL}/user/me`, {
                headers: { Authorization: `Bearer ${newAccessToken}` }
            });

            if (retryResponse.status !== 200) {
                return null
            }

            const userData = await retryResponse.json();
            return userData
        }

        if (userResponse.status !== 200) {
            return null
        }
        const userData = await userResponse.json();
        return userData;
    } catch (err) {
        const httpErr = err as HttpError;
        throw error(httpErr.status || 500, {
            message: httpErr?.body?.message || 'Error fetching data'
        });
    }
}

