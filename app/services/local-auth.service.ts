/* Extra */
import { useDispatch } from 'react-redux';

/* Project */
import { HomeActions } from '~/store/home.store';
import { UserService } from './user.service';
import { StorageService } from './storage.service';
import env from '~/config/env';

export const LocalAuthService = () => {
  const dispatch = useDispatch();
  const { fetchProfile, isLoading } = UserService();
  const { removeItem, keys } = StorageService();

  const login = () => {
    window.location.href = env.APP_LOGIN_URL;
  };

  const logout = () => {
    window.location.href = env.APP_LOGOUT_URL;
  };

  const removeLocalSession = () => {
    dispatch(HomeActions.removeUser());
    removeItem(keys.TOKEN_KEY);
  };

  const checkSession = async () => {
    const currentUser = await fetchProfile();

    if (currentUser?.email) {
      return dispatch(HomeActions.setUser({ user: currentUser }));
    }

    removeLocalSession();
  };

  return {
    isLoading,
    login,
    logout,
    checkSession,
    removeLocalSession,
  };
};
