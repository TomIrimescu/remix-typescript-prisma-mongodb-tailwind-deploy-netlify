import { LoaderArgs } from '@remix-run/node';
import { useRouteError, isRouteErrorResponse } from '@remix-run/react';
import MainHeader from '~/components/navigation/MainHeader';
import { getUserFromSession } from '~/data/auth.server';

export function meta() {
  return [
    { title: 'Home' },
    { description: 'Welcome to the Home Page.' },
    {
      content: 'Remix Typescript Prisma Mongodb Tailwind',
    },
  ];
}

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops</h1>
        <p>Status: {error.status}</p>
        <p>{error.data.message}</p>
      </div>
    );
  }
}

export default function Index() {
  return (
    <>
      <MainHeader />
      <div className=' flex flex-row justify-center my-48'>
        <h1 className='text-3xl text-pink-500 font-bold'>Hello world!</h1>
      </div>
    </>
  );
}

export function loader({ request }: LoaderArgs) {
  return getUserFromSession(request);
}
