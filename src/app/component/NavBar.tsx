"use client"
import Link from "next/link";
import React, { useState } from "react";

function NavBar() {
  const [isHamburger ,setIsHamburger] = useState(false)
  const hamburHandler = ()=>{
    setIsHamburger(!isHamburger)
  }
  return (
    <nav className="bg-blue-950 p-4 flex justify-between items-center text-white text-3xl">
      <div className="font-bold">SUBHAN</div>
      <div className={`lg:space-x-4 text-xl ${isHamburger? "flex flex-col fixed right-0 top-0 h-screen w-[50%] text-2xl px-10 py-32 space-y-5 bg-blue-950" : "md:flex hidden"}`}>
        <Link href="/">Home</Link>
        <Link href="about">About</Link>
        <Link href="/carrer">Career</Link>
        <Link href="/education">Education</Link>
      </div>

      <div className="md:hidden z-20">
        <button
          className="flex flex-col justify-between w-6 h-[18px] focus:outline-none"
          onClick={hamburHandler}
        >
          <span
            className={`block h-[3px] w-full bg-white transition-transform duration-300 ease-in-out ${
              isHamburger ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-full bg-white transition-opacity duration-300 ease-in-out ${
              isHamburger ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-full bg-white transition-transform duration-300 ease-in-out ${
              isHamburger ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
