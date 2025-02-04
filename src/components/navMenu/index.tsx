import Link from "next/link";
import { X } from "lucide-react";
import { DataProps } from "../header";

interface NavMenuPros {
  IsOpen: (isOpen: boolean) => void;
  open: boolean;
  data: DataProps;
}

export function NavMenu({ IsOpen, open, data }: NavMenuPros) {
  return (
    <div
      className={`z-10 absolute top-0 ${
        open ? "left-0" : "-left-full"
      } w-full min-h-full bg-[rgba(0,0,0,0.75)] transition-all duration-500`}
    >
      <div className="w-[60%] min-h-screen bg-white">
        <button
          className="w-full flex justify-end px-4 py-2"
          onClick={() => IsOpen(false)}
        >
          <X size={24} />
        </button>
        <nav className="flex flex-col gap-4 pt-4 pl-4 text-xl font-semibold">
          <Link href={"/"} onClick={() => IsOpen(false)}>
            Home
          </Link>
          <Link href={"/post"} onClick={() => IsOpen(false)}>
            Posts
          </Link>

          <Link href={"/about"} onClick={() => IsOpen(false)}>
            About
          </Link>
          <div className="flex flex-col border-t w-11/12 py-4">
            <h2 className="font-bold mb-4">Categorias</h2>

            <ul className="flex flex-col gap-1 text-base">
              {data.objects.map((item) => (
                <li key={item.slug}>
                  <a href={`/categoria/${item.slug}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
