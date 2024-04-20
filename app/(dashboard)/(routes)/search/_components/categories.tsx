"use client";

import { Category } from "@prisma/client";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiCrenulatedShield, GiFruitTree } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Medical": FaHandHoldingMedical,
  "Engineering": MdEngineering,
  "Defense": GiCrenulatedShield,
  "Commerce": FaMoneyBillTrendUp,
  "Foundation": GiFruitTree,
};

export const Categories = ({
  items,
}: CategoriesProps) => {
  return (
    <div className="flex items-center gap-2 md:gap-4 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  )
}