import Image from 'next/image';

import Navbar from './components/Navbar';
import WelcomePagePic from './assets/welcome_page_pic.png';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <Navbar />

      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-20 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center lg:text-left">
              QR Code <span className='text-blue-600'>Generator</span> and <span className='text-blue-600'>Scanner</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center lg:text-left">
              From generating QR Code of any URL or of any text to scanning QR Code, this application does it for you.
            </p>
            <Link href='/pages/optionsQrCode'>
             <Button className='bg-blue-600 text-xl py-8 px-8 rounded-lg hover:bg-blue-500 flex m-auto lg:ml-0 text-center'>Get Started</Button>
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src={WelcomePagePic}
              alt="welcome page pic"
              width=''
              className='w-5/6'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
