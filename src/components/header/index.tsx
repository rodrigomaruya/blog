"use client";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { NavMenu } from "../navMenu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function resize() {
      window.innerWidth > 640 ? setIsOpen(false) : "";
    }
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <header
      className="w-full h-20
     bg-slate-900 "
    >
      <div className="flex items-center justify-between  px-4 mx-auto  h-full w-full md:px-14">
        <div className="text-xl md:text-2xl font-bold text-white ">
          <Link href={"/"}>
            <h1>Blog Porquê das coisas</h1>
          </Link>
        </div>
        <button className="flex sm:hidden" onClick={handleOpen}>
          <Menu size={30} color="#fff" />
        </button>
        <nav className="hidden sm:flex gap-4 font-semibold text-white">
          <Link href={"/"}>Home</Link>
          <Link href={"/post"}>Posts</Link>

          <Link href={"/about"}>About</Link>
        </nav>
      </div>
      <NavMenu IsOpen={() => setIsOpen(false)} open={isOpen} />
    </header>
  );
}
