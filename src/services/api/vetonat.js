export const BASE_URL = 'https://127.0.0.1:8000';
export const BASE_URL_VETONAT = 'http://localhost:5173/';
// eslint-disable-next-line no-restricted-globals
export function getMe() {
  return fetch('https://127.0.0.1:8000/api/me', { credentials: 'include' })
    .then((response) => {
      if (response.status === 401) {
        return Promise.resolve(null);
      }
      return response.json();
    });
}

export function loginUrl() {
  return `${BASE_URL}/login`;
}

export function logoutUrl() {
  return `${BASE_URL}/logout`;
}
