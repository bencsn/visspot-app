import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async (e) => {
    const parentData = await e.parent();
    if (!parentData.isLoggedIn || !parentData.user) {
        throw redirect(302, '/login');
    }
    return {}
};