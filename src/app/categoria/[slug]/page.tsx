import { CardPost } from "@/components/cardPost";
import { Container } from "@/components/container";
import { getCategoryList } from "@/utils/actions/get-data";
import { CategoryProps } from "@/utils/category-type";

export default async function Categoria({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const data: CategoryProps = await getCategoryList(slug);

  return (
    <Container>
      <section className="min-h-screen py-4">
        <h1 className="text-center text-2xl lg:text-3xl">
          {slug.toUpperCase()}
        </h1>
        <div>
          {data.objects.length > 0 &&
            data.objects[0].metadata.category.map((item) => (
              <CardPost
                key={item.title}
                url={item.banner.url}
                title={item.title}
                urltitle={item.urltitle}
                summary={item.subtitle}
                data={item.datenow}
                slug={data.objects[0].slug}
                description={item.description}
              />
            ))}
        </div>
      </section>
    </Container>
  );
}
