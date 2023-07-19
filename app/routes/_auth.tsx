import { HeadersFunction, LoaderArgs } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

import MainHeader from '~/components/navigation/MainHeader';
import { getUserFromSession } from '~/data/auth.server';

export default function MarketingLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export function loader({ request }: LoaderArgs) {
  return getUserFromSession(request);
}

export const headers: HeadersFunction = () => {
  return {
    'Cache-Control': 'max-age=3600', // 60 minutes
  };
};
