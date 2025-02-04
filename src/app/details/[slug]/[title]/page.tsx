import { Container } from "@/components/container";
import { getDetails } from "@/utils/actions/get-data";
import { DetailProps } from "@/utils/details-type";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { CategoryProps } from "@/utils/category-type";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const { objects }: DetailProps = await getDetails(slug).catch(() => {
      return {
        title: "Blog | Porquê das coisas",
        description:
          "Por quê? Porque a curiosidade é a verdadeira essência do conhecimento.",
      };
    });
    return {
      title: `Blog | ${objects[0].metadata.content.title}`,
      description: `${objects[0].metadata.content.summary}`,
      keywords: [
        "tecnologia, finanças, programação, curiosidades, inovação, aprendizado, desenvolvimento, transformação digital, exploração de ideias",
      ],
      openGraph: {
        title: `Blog | ${objects[0].metadata.content.title}`,
        images: [`${objects[0].metadata.banner.url}`],
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
  params: Promise<{ slug: string; title: string }>;
}) {
  const resolvedParams = await params;
  const { slug, title } = resolvedParams;
  const { objects }: CategoryProps = await getDetails(slug);
  const findTitle = decodeURIComponent(title);

  const findDetails = objects[0].metadata.category.find(
    (item) => decodeURI(item.title) === findTitle
  );
  console.log(findDetails?.title);

  return (
    <main className="min-h-screen pb-14 md:pb-10 relative  ">
      <Container>
        <div className="relative max-w-5xl  h-[300px] md:h-[400px] my-8 mx-auto rounded-md">
          <Image
            src={findDetails?.banner.url as string}
            alt={findDetails?.title as string}
            priority={true}
            fill={true}
            quality={100}
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 w-full max-w-5xl mx-auto">
          <h1 className="text-center text-red-600 font-bold text-xl md:text-2xl">
            {findDetails?.title}
          </h1>
          <p className=" leading-relaxed text-lg md:text-xl ">
            {findDetails?.description}
          </p>
          <p className=" leading-relaxed md:text-lg">
            Data de publicação: <span>{findDetails?.datenow}</span>
          </p>
        </div>
        <div className="flex max-w-5xl justify-end mx-auto mt-4">
          <div className="w-10 h-10 flex justify-center items-center  rounded-full bg-green-700 font-bold ">
            <Link href={"/post"}>
              <ArrowLeft color="#fff" />
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
