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
    <header
      className="w-full 
     bg-slate-900 z-10 top-0 left-0 sticky h-20"
    >
      <div className="max-w-7xl flex items-center h-full mx-auto">
        <NavComponents data={data} />
      </div>
    </header>
  );
}
