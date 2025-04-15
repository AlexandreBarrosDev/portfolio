import type { Metadata } from 'next';
import { raleway, roboto } from '@/fonts';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css';
import Navbar from '@/components/Navbar';
import MobileNav from '@/components/MobileNav';

export const metadata: Metadata = {
  title: 'Portfolio | Alexandre Barros',
  description: 'Portfolio of Alexandre Barros',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className='bg-zinc-200'>
      <body className={`${roboto.className} antialiased bg-gradient-to-br from-zinc-200 text-zinc-800`}>
        <header
          className={`${raleway.className} fixed flex lg:flex-col lg:justify-between items-center top-0 left-0
          w-full h-14 lg:w-48 lg:h-full p-5 bg-zinc-800`}
        >
          <nav className='flex lg:flex-col lg:justify-between items-center gap-2 lg:gap-8 w-full'>
            <Link href="/">
              <Image src="/alx-logo-zinc-200.svg" alt="Logo Alexandre Barros" width={30} height={30}/>
            </Link>
            <MobileNav />
            <Navbar />
            <h1
              className={`${raleway.className} antialiased
              text-zinc-200 lg:mt-60 lg:block lg:-rotate-90 lg:text-5xl
              lg:text-nowrap`}
            >
              ALEXANDRE BARROS
            </h1>
          </nav>
        </header>
        <main className="flex flex-col w-full h-full">
          {children}
        </main>
        <footer className="flex justify-center items-center fixed bottom-0 w-full lg:ml-28 p-2 text-xs text-zinc-800
        backdrop-blur-md lg:backdrop-blur-0">
          &copy; {`${new Date().getFullYear()} `}Alexandre Barros
        </footer>
      </body>
    </html>
  );
}
