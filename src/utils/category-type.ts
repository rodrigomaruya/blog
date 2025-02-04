export interface CategoryProps {
  objects: ObjectProps[];
}

interface ObjectProps {
  slug: string;
  title: string;
  type: string;
  metadata: {
    category: TitleProps[];
  };
}

interface TitleProps {
  banner: {
    url: string;
  };
  title: string;
  subtitle: string;
  description: string;
  datenow: string;
}
