"use client";

import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className={twMerge("text-center", "h-[60vh]", "flex", "flex-col", "justify-center")}>
            <div>
                <h2 className={twMerge("text-3xl", "font-semibold", "text-rose-700")}>
                    Something went wrong!
                </h2>
                <p className={twMerge("text-gray-500", "mt-4", "font-semibold")}>
                    해당 페이지를 가져오던 중 문제가 생겼습니다.
                </p>
                <p className={twMerge("text-gray-400", "text-xs", "max-w-lg", "mx-auto", "mt-8")}>
                    Error Message : {error?.message || "없음"}
                </p>
                <div className={twMerge("mt-8")}>
                    <button
                        className={twMerge(
                            "bg-rose-700",
                            "hover:shadow-lg",
                            "text-white",
                            "rounded-xl",
                            "px-4",
                            "py-2.5",
                        )}
                        onClick={() => reset()}>
                        다시 시도하기
                    </button>
                </div>
            </div>
        </div>
    );
}
