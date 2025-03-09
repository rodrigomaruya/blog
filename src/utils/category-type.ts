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
  urltitle: string;
  subtitle: string;
  content: string;
  datenow: string;
}
