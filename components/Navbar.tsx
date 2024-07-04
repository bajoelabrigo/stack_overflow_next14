import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="">
      <nav className="w-full h-full">
        <p>Next js</p>
        <ul className="flex justify-end items-center gap-4 px-4 my">
          <Link href="/">
            <li>home</li>
          </Link>
          <Link href="/about">
            <li>about</li>
          </Link>
          <Link href="/contact">
            <li>contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
