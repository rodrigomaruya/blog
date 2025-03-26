export async function getBannerVideo() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/677f09e414e916955b7f86c3?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`,
      { next: { revalidate: 120 } }
    );

    if (!res.ok) {
      throw new Error("Failed get banner video");
    }

    return res.json();
  } catch (error) {
    throw new Error("Failed get banner video");
  }
}

export async function getDetails(slug: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`;

  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug: slug,
    }),
    props: "slug,title,metadata",
    read_key: process.env.READ_KEY as string,
  });
  const url = `${baseUrl}?${queryParams.toString()}`;

  try {
    const res = await fetch(url, { next: { revalidate: 120 } });
    if (!res.ok) {
      throw new Error("Failed get details");
    }

    return res.json();
  } catch (error) {
    throw new Error("Failed get details");
  }
}

export async function getAllPosts() {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`;

  const queryParams = new URLSearchParams({
    query: JSON.stringify({}), // Busca todos os posts
    props: "slug,metadata",
    read_key: process.env.READ_KEY as string,
  });

  const url = `${baseUrl}?${queryParams.toString()}`;

  try {
    const res = await fetch(url, { next: { revalidate: 300 } }); // Atualiza a cada 5 min
    if (!res.ok) {
      throw new Error("Failed to get all posts");
    }

    const data = await res.json();

    // Retornar apenas os dados necessários
    return data.objects.map(
      (post: { slug: any; metadata: { urltitle: any } }) => ({
        slug: post.slug,
        urltitle: post.metadata?.urltitle || "", // Evita erro se não existir
      })
    );
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
}

export async function getCategoryList(slug: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`;
  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug: slug,
    }),
    props: "slug,title,metadata",
    read_key: process.env.READ_KEY as string,
  });
  const url = `${baseUrl}?${queryParams.toString()}`;

  try {
    const response = await fetch(url, { next: { revalidate: 120 } });
    if (!response.ok) {
      throw new Error("Filed get category list");
    }
    return response.json();
  } catch (error) {
    throw new Error("Filed get category list");
  }
}

export async function getOnlyCategory() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22categorias%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug%2Ctitle&sort=-order`,
      { next: { revalidate: 120 } }
    );

    if (!response.ok) {
      throw new Error("Failed get Only Category");
    }
    return response.json();
  } catch (error) {
    throw new Error("Failed get Only Category");
  }
}

export async function getCategoryPost() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22categorias%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type,`,
      { next: { revalidate: 120 } }
    );

    if (!response.ok) {
      throw new Error("Failed get category post");
    }
    return response.json();
  } catch (error) {
    throw new Error("Failed get category post");
  }
}
