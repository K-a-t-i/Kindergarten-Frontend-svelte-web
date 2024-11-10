import { AUTH_ZITADEL_ISSUER } from '$env/static/private';
import type { Session } from '@auth/core/types';

export async function readUserInfo(session: Session) {
	return fetch(`${AUTH_ZITADEL_ISSUER}/oidc/v1/userinfo`, {
		credentials: 'include',
		headers: {
			Authorization: 'Bearer ' + session.accessToken
		}
	});
}
