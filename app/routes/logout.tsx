import { useEffect } from 'react';
import { Navigate } from '@remix-run/react';

/* Project */
import { LocalAuthService } from '~/services';

export default function LogoutRoute() {
  const { removeLocalSession } = LocalAuthService();

  useEffect(() => {
    removeLocalSession();
  }, []);

  return <Navigate to={'/'} />;
}
