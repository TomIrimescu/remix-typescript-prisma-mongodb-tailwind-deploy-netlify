import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from '@remix-run/react';
import { LockClosedIcon, UserPlusIcon } from '@heroicons/react/24/solid';

function AuthForm() {
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();
  const validationErrors = useActionData<String>();

  const authMode = searchParams.get('mode') || 'login';

  const submitBtnCaption = authMode === 'login' ? 'Login' : 'Create User';
  const toggleBtnCaption =
    authMode === 'login' ? 'Create a new user' : 'Log in with existing user';

  const isSubmitting = navigation.state !== 'idle';

  return (
    <Form
      method='post'
      className='p-8 text-center rounded-[8px] bg-[#975bfd] text-[#f6f2fc] shadow my-8 m-auto max-w-[22.0rem]'
      id='auth-form'
    >
      <div className='icon-img text-2xl w-14 h-14 inline-flex justify-center items-center mb-4 border-2 border-[#ede3fd] rounded-[50%]'>
        {authMode === 'login' ? (
          <LockClosedIcon className='w-6 h-6' />
        ) : (
          <UserPlusIcon className='w-6 h-6' />
        )}
      </div>
      <p className='my-1 mx-0'>
        <label className='block mb-2' htmlFor='email'>
          Email Address
        </label>
        <input
          className='block mb-2 p-2 rounded border-0 w-full text-[#69666f] text-center'
          type='email'
          id='email'
          name='email'
          required
        />
      </p>
      <p className='my-1 mx-0'>
        <label className='block mb-2' htmlFor='password'>
          Password
        </label>
        <input
          className='block mb-2 p-2 rounded border-0 w-full text-[#69666f] text-center'
          type='password'
          id='password'
          name='password'
          minLength={7}
        />
      </p>
      {validationErrors && (
        <ul>
          {Object.values(validationErrors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <div className='mt-8 content-center flex flex-col gap-2'>
        <button
          className='disabled:bg-[#ded8e8] disabled:text-[#aba6b3] disabled:cursor-not-allowed hover:bg-[#8400ff] bg-[#9900ff] border-0 rounded-[30px] py-[0.65rem] p-8 text-[0.85rem] max-w-[9.0rem] m-auto'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Authenicating...' : submitBtnCaption}
        </button>
        <Link
          className='mt-2 text-[0.75rem] hover:text-[#c9aaff]'
          to={authMode === 'login' ? '?mode=signup' : '?mode=login'}
        >
          {toggleBtnCaption}
        </Link>
      </div>
    </Form>
  );
}

export default AuthForm;
