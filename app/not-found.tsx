"use client";

import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className={twMerge("text-center", "h-[60vh]", "flex", "flex-col", "justify-center")}>
            <h2 className={twMerge("text-rose-600", "text-3xl", "font-semibold")}>404 Not Found</h2>
            <p className={twMerge("text-gray-500", "mt-4")}>
                해당 경로에 맞는 페이지를 찾을 수 없습니다.
            </p>
            <div className={twMerge("mt-8")}>
                <button
                    type={"button"}
                    onClick={() => router.replace("/")}
                    className={twMerge(
                        "bg-rose-500",
                        "text-white",
                        "rounded-xl",
                        "px-4",
                        "py-2.5",
                        "hover:shadow-lg",
                    )}>
                    메인으로 돌아가기
                </button>
            </div>
        </div>
    );
}
