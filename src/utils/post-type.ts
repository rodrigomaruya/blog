export interface PostProps {
  objects: ObjectsProps[];
}

interface ObjectsProps {
  slug: string;
  title: string;
  metadata: {
    banner: {
      url: string;
    };
    content: {
      title: string;
      summary: string;
      content_total: string;
      data: string;
    };
  };
}
