import { twMerge } from "tailwind-merge";

export function Loader({ className }: { className?: string }) {
    return (
        <div className={twMerge("flex", "gap-4", "justify-center", className)}>
            <div className={twMerge("w-2", "h-2", "rounded-full", "bg-gray-500", "animate-ping")} />
            <div className={twMerge("w-2", "h-2", "rounded-full", "bg-gray-500", "animate-ping")} />
            <div className={twMerge("w-2", "h-2", "rounded-full", "bg-gray-500", "animate-ping")} />
        </div>
    );
}

export function LoaderGrid({ className }: { className?: string }) {
    return (
        <>
            {[
                ...Array(12).map((e, i) => (
                    <div
                        key={i}
                        className={twMerge(
                            "rounded-md",
                            "w-full",
                            "h-72",
                            "md:h-64",
                            "bg-gray-100",
                            "animate-pulse",
                            "object-fit",
                            "z-[0]",
                            className,
                        )}
                    />
                )),
            ]}
        </>
    );
}
