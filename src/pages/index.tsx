import type { NextPage } from 'next';
import { MainLayout } from '@/layouts';

const Home: NextPage = () => {
  return (
    <MainLayout
    // meta={
    //   <Meta
    //     title="Next.js Tailwind Enterprise Starter"
    //     description="Starter template to make a great Next Js Project"
    //   />
    // }
    >
      <div className="h-[100vh] bg-gradient-to-br from-green-300/50 to-sky-800/50 flex items-center justify-center px-5">
        <div className="flex flex-col justify-center bg-white rounded-lg shadow-2xl p-md sm:p-lg max-w-md">
          <h1 className="font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 to-violet-800">
            Im your new Tailwind Project!
          </h1>
          <p className="text-[#504e63] text-center">
            Delete this and make something great!
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
