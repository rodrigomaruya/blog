"use client";
import { useContext } from "react";
import { ModalContext } from "@/provider/modal";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Calendar1Icon,
  CalendarClock,
  CalendarDays,
} from "lucide-react";
import Link from "next/link";
interface CardProps {
  url: string;
  title: string;
  summary: string;
  data: string;
  slug: string;
  urltitle: string;
}

export function CardPost({
  url,
  title,
  summary,
  data,
  slug,
  urltitle,
}: CardProps) {
  return (
    <section className="max-w-7xl my-8 px-3 py-1 shadow-md ">
      <p className="mt-2 flex items-center gap-2">
        <span className="text-slate-400">
          <CalendarDays size={20} />{" "}
        </span>{" "}
        {data}
      </p>
      <div className="py-2">
        <Link
          href={`/categoria/${slug}`}
          className="text-base text-slate-800 font-semibold"
        >
          {slug.toUpperCase()}
        </Link>
      </div>
      <div className="relative h-[200px] w-full md:h-[300px] rounded-md">
        <Image
          src={url}
          fill={true}
          priority={true}
          quality={100}
          alt={title}
          className="object-cover rounded-md"
        />
      </div>
      <div className="w-full mt-8 mb-4 flex flex-col gap-2">
        <h1 className="text-center text-red-600 font-bold">{title}</h1>
        <p className="leading-relaxed mb-2">{summary}</p>
        <Link
          href={`/details/${slug}/${urltitle}`}
          className="flex gap-2 text-red-400"
        >
          <ArrowRight /> Clique aqui para saber mais...
        </Link>
      </div>
    </section>
  );
}
