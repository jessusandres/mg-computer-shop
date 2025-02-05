import { useMemo } from 'react';

/* Extra */
import axios from 'axios';

/* Project */
import env from '~/config/env';

export const HttpService = () => {
  const axiosInstance = useMemo(() => {
    return axios.create({
      baseURL: env.APP_BACKEND_URL,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }, []);

  return {
    axiosInstance,
  };
};
