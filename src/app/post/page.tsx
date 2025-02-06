import { CardPost } from "@/components/cardPost";
import { Container } from "@/components/container";
import { getCategoryPost } from "@/utils/actions/get-data";
import { CategoryProps } from "@/utils/category-type";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Post principais",
  description:
    "Por quê? Porque a curiosidade é a verdadeira essência do conhecimento.",
  keywords: [
    "tecnologia, finanças, programação, curiosidades, inovação, aprendizado, desenvolvimento, transformação digital, exploração de ideias",
  ],
  openGraph: {
    title: "Blog | Porquê das coisas",
    images: [`${process.env.NEXT_PUBLIC_URL}/mundo.jpg`],
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

export default async function Post() {
  const newData: CategoryProps = await getCategoryPost();

  return (
    <main className="w-full min-h-screen">
      <Container>
        <h1 className="mt-7 text-center text-red-500 font-bold text-3xl md:text-5xl">
          Porquê das coisas
        </h1>
        <div>
          {newData.objects.map((item) => (
            <CardPost
              key={item.metadata.category.at(-1)?.title}
              url={item.metadata.category.at(-1)?.banner.url as string}
              title={item.metadata.category.at(-1)?.title as string}
              summary={item.metadata.category.at(-1)?.subtitle as string}
              data={item.metadata.category.at(-1)?.datenow as string}
              slug={item.slug}
              urltitle={item.metadata.category.at(-1)?.urltitle as string}
              description={item.metadata.category.at(-1)?.description as string}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
