import type { V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Batman App' },
    {
      name: 'description',
      content: 'Remix Typescript Prisma Mongodb Tailwind',
    },
  ];
};

export default function Index() {
  return (
    <div className=' flex flex-row justify-center my-48'>
      <h1 className='text-3xl text-pink font-bold'>Hello world!</h1>
    </div>
  );
}
