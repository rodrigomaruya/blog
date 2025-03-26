import { Container } from "@/components/container";
import { getDetails } from "@/utils/actions/get-data";
import Image from "next/image";
import { ArrowLeft, CalendarDays } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { CategoryProps } from "@/utils/category-type";
import ReactMarkdown from "react-markdown";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; urltitle: string }>;
}): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const { slug, urltitle } = resolvedParams;
    const findTitle = urltitle;
    const { objects }: CategoryProps = await getDetails(slug).catch(() => {
      return {
        title: "Blog | Porquê das coisas",
        description:
          "Por quê? Porque a curiosidade é a verdadeira essência do conhecimento.",
      };
    });
    const findDetails = objects[0].metadata.category.find(
      (item) => item.urltitle === findTitle
    );

    return {
      title: `Blog | ${findDetails?.title}`,
      description: `${findDetails?.subtitle}`,
      keywords: [
        "tecnologia, finanças, programação, curiosidades, inovação, aprendizado, desenvolvimento, transformação digital, exploração de ideias",
      ],
      openGraph: {
        title: `Blog | ${findDetails?.title}`,
        images: [`${findDetails?.banner.url}`],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (error) {
    return {
      title: "Blog | Porquê das coisas",
      description:
        "Por quê? Porque a curiosidade é a verdadeira essência do conhecimento.",
    };
  }
}

export default async function Details({
  params,
}: {
  params: Promise<{ slug: string; urltitle: string }>;
}) {
  const resolvedParams = await params;
  const { slug, urltitle } = resolvedParams;
  const { objects }: CategoryProps = await getDetails(slug);

  const findTitle = urltitle;

  const findDetails = objects[0].metadata.category.find(
    (item) => item.urltitle === findTitle
  );

  return (
    <main className="min-h-screen pb-14 md:pb-10 relative">
      <Container>
        <p className=" leading-relaxed mx-auto max-w-7xl py-4 flex items-center gap-2 text-slate-400">
          <CalendarDays size={20} />{" "}
          <span className="text-slate-800">{findDetails?.datenow}</span>
        </p>
        <div className="relative max-w-7xl h-[300px] md:h-[400px] mx-auto rounded-md">
          <Image
            src={findDetails?.banner.url as string}
            alt={findDetails?.title as string}
            priority={true}
            fill={true}
            quality={100}
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 w-full max-w-7xl mx-auto pt-2">
          <h1 className="text-center text-red-600 font-bold">
            {findDetails?.title}
          </h1>

          <ReactMarkdown>{findDetails?.content}</ReactMarkdown>
        </div>

        <div className="flex flex-col max-w-7xl w-full justify-end items-end mt-4">
          <Link
            href={"/post"}
            className="w-10 h-10 flex justify-center items-center  rounded-full bg-green-700 font-bold "
          >
            <ArrowLeft color="#fff" />
          </Link>
          Voltar
        </div>
      </Container>
    </main>
  );
}
