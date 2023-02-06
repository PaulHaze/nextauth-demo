import type { NextPage } from 'next';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

import { Meta, MainLayout } from '@/layouts';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div className="">Loading</div>;
  }
  return (
    <MainLayout
      meta={
        <Meta
          title="Auth Example With Hamed"
          description="Follow along code with Hamed"
        />
      }
    >
      <div className="w-full h-screen p-8">
        <h1>Auth Demo</h1>

        <div className="flex gap-4 mt-5 max-w-xs">
          <Link
            className="bg-sky-600 px-5 py-3 rounded-sm text-white font-bold text-sm self-center flex-grow"
            href="/api/auth/signin"
          >
            Sign in Link
          </Link>
          <button
            onClick={() => signIn()}
            className="text-sm border rounded-sm px-5 py-3 shadow-sm flex-grow"
          >
            Sign In Button
          </button>
        </div>
        <div className="flex gap-4 mt-5 max-w-xs">
          <Link
            className="bg-sky-600 px-5 py-3 rounded-sm text-white font-bold text-sm self-center flex-grow"
            href="/api/auth/signout"
          >
            Sign Out Link
          </Link>
          <button
            onClick={() => signOut()}
            className="text-sm border rounded-sm px-5 py-3 shadow-sm flex-grow"
          >
            Sign Out Button
          </button>
        </div>

        <div className="font-semibold text-slate-700 mt-5">
          Status: {status}
        </div>
        <div className="font-semibold text-slate-700 mt-5">
          {session ? (
            <pre>{JSON.stringify(session, null, 2)}</pre>
          ) : (
            'No Active Sessions'
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
