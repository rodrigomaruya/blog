import type { MetadataRoute } from "next";
import { getAllPosts } from "@/utils/actions/get-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const dynamicPages = posts.map((post: { slug: any; urltitle: any }) => ({
    url: `${process.env.NEXT_PUBLIC_URL}/detail/${post.slug}/${post.urltitle}`,
    lastModified: new Date().toISOString(),
  }));

  // Definir páginas estáticas
  const staticPages = [
    {
      url: `${process.env.NEXT_PUBLIC_URL}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/about`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/post`,
      lastModified: new Date().toISOString(),
    },
  ];

  return [...staticPages, ...dynamicPages];
}
