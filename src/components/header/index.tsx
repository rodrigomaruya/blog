import { NavComponents } from "../navComponents";
import { getOnlyCategory } from "@/utils/actions/get-data";

export interface DataProps {
  objects: CategoryProps[];
}

interface CategoryProps {
  slug: string;
  title: string;
}

export async function Header() {
  const data: DataProps = await getOnlyCategory();

  return (
    <div
      className="w-full h-20
     bg-slate-900 z-50 relative "
    >
      <header
        className="w-full h-full 
     bg-slate-900  absolute z-10 top-0 left-0 "
      >
        <NavComponents data={data} />
      </header>
    </div>
  );
}
