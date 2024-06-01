"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-50 flex flex-row py-2 rounded-t-lg">
      <div className="w-6/12 mx-[1%]">
        <Link href="#about">
          <Image
            src="/svg/nextjs.svg"
            alt="logo"
            width={150}
            height={150}
            className="mt-1"
          />
        </Link>
      </div>
      <ul className="flex flex-row gap-20 px-5 py-2">
        <Link href="#about">
          <li className="text-sm font-bold hover:text-green-600 px-5 hover:bg-white hover:bg-opacity-90 py-1 rounded-xl">
            About
          </li>
        </Link>
        <Link href="#services">
          <li className="text-sm font-bold hover:text-green-600 px-5 hover:bg-white hover:bg-opacity-90 py-1 rounded-xl">
            Services
          </li>
        </Link>
        <Link href="#community">
          <li className="text-sm font-bold hover:text-green-600 px-5 hover:bg-white hover:bg-opacity-90 py-1 rounded-xl">
            Community
          </li>
        </Link>
        <Link href="#contact">
          <li className="text-sm font-bold hover:text-green-600 px-5 hover:bg-white hover:bg-opacity-90 py-1 rounded-xl">
            Contact
          </li>
        </Link>
      </ul>
      <button className="mx-10 border-2 hover:bg-black px-9 font-extrabold text-lg rounded-lg">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
