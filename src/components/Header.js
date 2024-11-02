// components/Header.js
import Image from 'next/image';

export default function Header() {
  return (
    <header className="relative text-center mt-24 md:mt-48 pt-10 md:pt-20 mb-10 snap-start snap-always">
      <h1 className="text-4xl md:text-6xl pb-2 font-extrabold bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-transparent bg-clip-text dark:text-yellow-400 leading-tight">Hi, I&apos;m Fredrik Jurgell</h1>
      <p className="text-lg md:text-2xl mt-2 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-transparent bg-clip-text dark:text-yellow-400">
        I craft beautiful and functional web experiences.
      </p>
      <Image src="/images/profile-pic.jpeg" alt="Profile Picture" width={150} height={150} className="mx-auto rounded-full shadow-lg mt-8 hover:scale-105 transition-transform duration-500" loading="lazy" />
    </header>
  );
}