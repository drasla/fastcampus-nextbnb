"use client";

import { useRecoilState } from "recoil";
import { filterState } from "@/atom";
import { twMerge } from "tailwind-merge";
import { CATEGORY_DATA } from "@/constants";

export default function CategoryList() {
    const [filterValue, setFilterValue] = useRecoilState(filterState);

    return (
        <div
            className={twMerge(
                "flex",
                "gap-6",
                "fixed",
                "top-20",
                "inset-x-0",
                "mx-auto",
                "overflow-x-scroll",
                "w-full",
                "flex-nowrap",
                "sm:pl-24",
                "sm:pr-16",
                "px-2",
                "bg-white",
                "z-1",
                "mb-6",
            )}>
            {CATEGORY_DATA.map(category => (
                <button
                    type={"button"}
                    key={category.title}
                    onClick={() =>
                        setFilterValue({
                            ...filterValue,
                            category: category.title,
                        })
                    }
                    className={twMerge(
                        "flex-none",
                        "text-gray-500",
                        "hover:text-gray-700",
                        "gap-3",
                        "justify-center",
                        "py-4",
                        "w-16",
                        "text-center",
                        filterValue.category === category.title
                            ? twMerge(
                                  "text-black",
                                  "font-semibold",
                                  "underline",
                                  "underline-offset-8",
                              )
                            : null,
                    )}>
                    <div className={twMerge("flex-col", "flex", "justify-center", "gap-3")}>
                        <div className={twMerge("text-2xl", "mx-auto")}>
                            <category.Icon />
                        </div>
                        <div className={twMerge("text-gray-700", "text-xs", "text-center")}>
                            {category.title}
                        </div>
                    </div>
                </button>
            ))}
        </div>
    );
}
