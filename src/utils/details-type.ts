export interface DetailProps {
  objects: ObjectProps[];
}

interface ObjectProps {
  slug: string;
  title: string;
  metadata: {
    banner: {
      url: string;
    };
    content: {
      title: string;
      content_total: string;
      data: string;
      summary: string;
    };
  };
}
