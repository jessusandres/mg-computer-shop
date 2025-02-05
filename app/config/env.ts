const env = import.meta.env;

export default {
  APP_NAME: env.VITE_APP_NAME,
  APP_BACKEND_URL: env.VITE_APP_BACKEND_URL,
  APP_LOGOUT_URL: env.VITE_APP_LOGOUT_URL,
  APP_LOGIN_URL: env.VITE_APP_LOGIN_URL,
};
