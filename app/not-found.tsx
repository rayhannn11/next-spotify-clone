import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className='h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground'>
      <h1 className='text-4xl'>404</h1>
      <p>We couldn&apos;t find the page you were looking for.</p>
      <button>
        <Link href='/'>Go back home</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
