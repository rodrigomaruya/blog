export async function getBannerVideo() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/677f09e414e916955b7f86c3?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`,
      { next: { revalidate: 50000 } }
    );

    if (!res.ok) {
      throw new Error("Failed get banner video");
    }

    return res.json();
  } catch (error) {
    throw new Error("Failed get banner video");
  }
}

export async function getPost() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`,
      { next: { revalidate: 50000 } }
    );
    if (!res.ok) {
      throw new Error("Failed get post");
    }
    return res.json();
  } catch (error) {
    throw new Error("Failed get post");
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
    const res = await fetch(url, { next: { revalidate: 50000 } });
    if (!res.ok) {
      throw new Error("Failed get details");
    }
    return res.json();
  } catch (error) {
    throw new Error("Failed get details");
  }
}

//https://api.cosmicjs.com/v3/buckets/blog-dev-blog-dev/objects/677e8b8714e916955b7f85e5?pretty=true&read_key=WGy8GQvLDNkJE5pbJ4nYv56qB3soEPiHT2KTv1qLq1heY5DKrJ&depth=1&props=slug%2Ctitle%2Cmetadata&limit=10&skip=0&sort=-order
