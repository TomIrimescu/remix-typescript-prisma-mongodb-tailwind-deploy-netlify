import { Form, Link, NavLink, useLoaderData } from '@remix-run/react';
import Logo from '../util/Logo';

function MainHeader() {
  const userId = useLoaderData<String>();

  return (
    <header className='flex flex-row flex-wrap justify-evenly justify-items-center items-center mt-3'>
      <Logo />
      <nav className='mt-3'>
        <ul className='flex gap-8 flex-1'>
          <li className='mb-3 ml-3'>
            <NavLink className='hover:text-[#af82fc]' to='/'>
              Home
            </NavLink>
          </li>
          <li className='mb-3'>
            <NavLink className='hover:text-[#af82fc]' to='/'>
              tbd
            </NavLink>
          </li>
          <li className='mb-3'>
            <NavLink className='hover:text-[#af82fc]' to='/'>
              tbd
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className='justify-self-end' id='cta-nav'>
        <ul className='gap-0'>
          <li>
            {userId && (
              <Form method='post' action='/logout' id='logout-form'>
                <button className='bg-transparent border-0 cursor-pointer hover:text-[#af82fc] text-[#ede3fd]'>
                  Logout
                </button>
              </Form>
            )}
            {!userId && (
              <Link
                to='/auth'
                className='py-2 px-8 border-0 rounded-[30px] inline-flex gap-2 text-[#ede3fd] hover:bg-[#8400ff] bg-[#9900ff] items-center cursor-pointer shadow-sm'
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
