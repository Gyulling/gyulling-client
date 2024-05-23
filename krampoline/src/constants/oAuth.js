const CLIENT_ID = import.meta.env.VITE_APP_REST_API_KEY;
const REDIRECT_URI = import.meta.env.VITE_APP_REDIRECT_URI;
const GRANT_TYPE = 'authorization_code';

export const CODE = new URL(window.location.href).searchParams.get('code');
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const GET_ACCESS_TOKEN_URL = `https://kauth.kakao.com/oauth/token?grant_type=${GRANT_TYPE}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${CODE}`;
