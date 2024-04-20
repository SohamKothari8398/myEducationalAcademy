"use client";

import qs from "query-string";
import { IconType } from "react-icons";
import {
  usePathname,
  useRouter,
  useSearchParams
} from "next/navigation";

import { cn } from "@/lib/utils";

interface CategoryItemProps {
  label: string;
  value?: string;
  icon?: IconType;
};

export const CategoryItem = ({
  label,
  value,
  icon: Icon,
}: CategoryItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategoryId = searchParams.get("categoryId"); const currentTitle = searchParams.get("title");

  const isSelected = currentCategoryId === value;

  const onClick = () => {
    const url = qs.stringifyUrl({
      url: pathname,
      query: {
        title: currentTitle,
        categoryId: isSelected ? null : value,
      }
    }, { skipNull: true, skipEmptyString: true });

    router.push(url);
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        " px-2 py-1 md:px-4 md:py-2 font-bold text-sm border border-slate-300 rounded-full flex items-center text-sky-700 hover:border-sky-700 transition",
        isSelected && "border-sky-700 bg-sky-200/20 text-blue-600"
      )}
      type="button"
    >
      {Icon && <Icon className=" w-4 h-4 text-sky-700 md:w-6 md:h-6 mr-2 md:mr-4" />}
      <div className="truncate">
        {label}
      </div>
    </button>
  )
}