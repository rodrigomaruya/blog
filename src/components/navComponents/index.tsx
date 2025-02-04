"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { NavMenu } from "../navMenu";
import { useState, useEffect } from "react";
import { DataProps } from "../header";

interface NavProps {
  data: DataProps;
}

export function NavComponents({ data }: NavProps) {
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
    <>
      <div className="flex items-center justify-between  px-4 mx-auto  h-full w-full md:px-14">
        <div className="text-xl md:text-2xl font-bold text-white ">
          <Link href={"/"}>
            <h1>Blog Porquê das coisas</h1>
          </Link>
        </div>
        <button className="flex sm:hidden" onClick={handleOpen}>
          <Menu size={30} color="#fff" />
        </button>
        <nav className="hidden sm:flex gap-4 font-semibold text-white relative">
          <Link href={"/"}>Home</Link>
          <Link href={"/post"}>Posts</Link>
          <details className="">
            <summary>Categoria</summary>
            <ul className="absolute m-1 bg-slate-900 px-4 rounded-md py-2">
              {data.objects.map((item) => (
                <li key={item.slug}>
                  <a href={`/categoria/${item.slug}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </details>
          <Link href={"/about"}>About</Link>
        </nav>
      </div>
      <NavMenu IsOpen={() => setIsOpen(false)} open={isOpen} data={data} />
    </>
  );
}
