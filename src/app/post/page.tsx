import { CardPost } from "@/components/cardPost";
import { Container } from "@/components/container";
import { getPost } from "@/utils/actions/get-data";
import { PostProps } from "@/utils/post-type";
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
  const postData: PostProps = await getPost();
  return (
    <main className="w-full min-h-screen">
      <Container>
        <h1 className="mt-7 text-center text-red-500 font-bold text-3xl md:text-5xl">
          Porquê das coisas
        </h1>
        {postData.objects.length > 0 &&
          postData.objects.map((item) => (
            <CardPost
              key={item.slug}
              url={item.metadata.banner.url}
              title={item.metadata.content.title}
              summary={item.metadata.content.summary}
              data={item.metadata.content.data}
              slug={item.slug}
            />
          ))}
      </Container>
    </main>
  );
}
