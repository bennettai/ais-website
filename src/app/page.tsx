import Link from "next/link";
import Image from "next/image";
import React from "react";
const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Events", href: "/events" },
];

export default function Home() {

  const username = "AIS";

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-y-auto bg-gradient-to-tl from-black via-zinc-600/20 to-black">
     <nav className="my-16 flex flex-col items-center justify-center animate-fade-in">
  <ul className="flex flex-col md:flex-row items-center justify-center gap-4">
    {navigation.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className="text-lg duration-500 text-zinc-500 hover:text-zinc-300 md:mr-10"
      >
        {item.name}
      </Link>
    ))}
  </ul>
</nav>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <Image
        src="/logo.png"
        alt="AIS"
        width={300}
        height={300}
        className="ml-4"
      ></Image>

      <h1 className="flex items-center z-10 text-4xl hover:scale-110 text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-white p-5">
        {username} 
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-lg text-zinc-500">
          <UserText />
        </h2>
        <div className="flex items-center justify-center gap-4 mt-4">
          <a href="https://www.linkedin.com/company/ais-bu/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8 hover:invert active:invert transition-all duration-300 ease-in-out" />
          </a>
          <a href="https://discord.gg/MMJRVqkJ" target="_blank" rel="noopener noreferrer">
            <img src="/discord.png" alt="Discord" className="w-8 h-8 hover:invert active:invert transition-all duration-300 ease-in-out" />
          </a>
          <a href="https://github.com/bennettai" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" className="w-8 h-8 hover:invert active:invert transition-all duration-300 ease-in-out" />
          </a>
        </div>
      </div>
    </div>
  );
}

const UserText = () => {
  return (
    <p>Lose yourself in the world of Machine Learning</p>
  );
};
