import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
interface CardProps {
  url: string;
  title: string;
  summary: string;
  data: string;
  slug: string;
}

export function CardPost({ url, title, summary, data, slug }: CardProps) {
  return (
    <section className=" md:w-3/4 md:mx-auto my-8 px-3 py-1 shadow-md">
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
        <h2 className="text-center text-red-600 font-bold text-lg md:text-2xl">
          {title}
        </h2>
        <p className="leading-relaxed mb-2  text-lg md:text-2xl">{summary}</p>
        <Link href={`/details/${slug}`} className="flex gap-2">
          <ArrowRight /> Clique aqui para saber mais...
        </Link>
        <p className="mt-2">
          <span className="text-slate-400">Data da publicação: </span> {data}
        </p>
      </div>
    </section>
  );
}
