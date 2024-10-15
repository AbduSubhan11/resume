import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className="bg-blue-950 p-4 flex justify-between items-center text-white text-3xl">
      <div className="font-bold">SUBHAN</div>
      <div className="space-x-4 text-xl ">
        <Link href="/">Home</Link>
        <Link href="about">About</Link>
        <Link href="/carrer">Career</Link>
        <Link href="/education">Education</Link>
      </div>
    </nav>
  );
}

export default NavBar;
