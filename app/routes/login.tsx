import { Navigate, useSearchParams } from '@remix-run/react';

/* Project */
import { StorageService } from '~/services';

export default function LoginRoute() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  if (token) {
    const { setItem, keys } = StorageService();
    setItem(keys.TOKEN_KEY, token);
  }

  return <Navigate to={'/'} />;
}
