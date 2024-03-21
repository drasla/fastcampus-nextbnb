import React from "react";
import { FilterLayoutProps } from "@/interface";
import { twMerge } from "tailwind-merge";

export default function FilterLayout({ children, title, isShow }: FilterLayoutProps) {
    return (
        <div
            className={twMerge(
                "absolute",
                "top-80",
                "sm:top-[70px]",
                "border",
                "border-gray-200",
                "px-8",
                "py-10",
                "flex",
                "flex-col",
                "bg-white",
                "w-full",
                "mx-auto",
                "inset-x-0",
                "sm:max-w-3xl",
                "md:w-[780px]",
                "sm:w-[640px]",
                "rounded-xl",
                isShow ? null : "hidden",
            )}>
            <div className={twMerge("text-sm", "font-semibold")}>{children}</div>
        </div>
    );
}
