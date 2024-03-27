"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

// Function Startes from here
export default function Navbar() {
  // State
  const [isOpen, setIsOpen] = useState(false);
  // Return
  return (
    <>
      {/* header */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <header className="bg-white shadow-lg">
          {/* Nav */}
          <nav className="flex items-center justify-between py-6 Customcontainer">
            {/* Logo Container */}
            <div>
              <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={150}
                height={150}
              />{" "}
            </div>
            {/* Nav Links */}

            <ul className="items-center hidden gap-5 text-md lg:flex">
              <li>
                <Link href={"/"} className="text-gray-500 ">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-500 ">
                  About
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-500 ">
                  Contact
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-500 ">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-500 ">
                  Careers
                </Link>
              </li>
            </ul>

            {/* Nav Button */}
            <div className="hidden px-4 py-1 text-white rounded-full shadow-lg lg:flex hover:shadow-2xl Custom-btn-bg">
              <button className="text-md">Request Invite</button>
            </div>

            {/* Mobile Menu */}
            {isOpen ? (
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="z-10 lg:hidden"
              >
                <Image
                  src="/assets/images/icon-close.svg"
                  alt="menu"
                  width={30}
                  height={30}
                />{" "}
              </div>
            ) : (
              <div onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
                <Image
                  src="/assets/images/icon-hamburger.svg"
                  alt="menu"
                  width={30}
                  height={30}
                />{" "}
              </div>
            )}
          </nav>
        </header>
        {/* Mobile Navbar */}
        {isOpen ? (
          <aside className="block p-4 mx-10 mt-5 bg-white shadow-2xl lg:hidden rounded-xl">
            <nav className="flex flex-col items-center gap-6 mt-3">
              <ul className="flex flex-col items-center gap-5 text-md">
                <li>
                  <Link href={"/"} className="text-gray-500 ">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-gray-500 ">
                    About
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-gray-500 ">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-gray-500 ">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-gray-500 ">
                    Careers
                  </Link>
                </li>
              </ul>
              {/* Button */}
              <div className="px-4 py-1 text-white rounded-full shadow-lg hover:shadow-2xl Custom-btn-bg">
                <button className="text-md">Request Invite</button>
              </div>
            </nav>
          </aside>
        ) : null}
      </div>
    </>
  );
}
