import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import tailwindStylesheet from '~/styles/app.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStylesheet },
];

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='bg-gradient-to-br from-[#8845fc] to-[#3c02a1] m-0 min-h-screen text-[#ded8e8]'>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
