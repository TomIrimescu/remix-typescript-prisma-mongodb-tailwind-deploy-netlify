import { Link } from '@remix-run/react';

function Logo() {
  return (
    <Link to='/'>
      <img className='w-16' src='images/batman.png' alt='Home' />
    </Link>
  );
}

export default Logo;
