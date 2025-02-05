import { useState } from 'react';
import { HttpService } from '~/services/http.service';

export const UserService = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { axiosInstance } = HttpService();

  const fetchProfile = async () => {
    setIsLoading(true);

    const user = await axiosInstance
      .get(`/users/profile`)
      .then((result) => result.data?.user || null);

    setIsLoading(false);

    return user;
  };

  return {
    isLoading,
    fetchProfile,
  };
};
