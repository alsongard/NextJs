import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import {lusitana}  from './ui/fonts';
import HeroDesktop from "../public/hero-desktop.png";
import HeroMobile from "../public/hero-mobile.png";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className={`${lusitana.className} flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52`}>
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <div
            className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
          />
          <p className={` ${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center  p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
			<Image
				src={HeroDesktop}
				alt="Screenshots of the dashboard project showing desktop version"
				className='hidden md:block ' // applies the style equal and above 768px:does not work
				width={1000}
				height={760}
			/>
			<Image
				src={HeroMobile}
				width={560}
				height={620}
				className='md:hidden max-[400px]:block ' // applies the style equal and above 768px: which works
				alt="Screenshots of the dashboard project showing mobile version"
				/>
        </div>
      </div>
    </main>
  );
}

// when using max-[pixelSize]:styles this will apply the styles when the screen width is equal to or less than this
// when using min-[pixelSize]:styles this will apply the styles when th escreeen width is equal or larger than this

