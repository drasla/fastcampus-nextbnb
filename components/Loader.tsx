import { twMerge } from "tailwind-merge";

export default function Loader({ className }: { className?: string }) {
    return (
        <div className={twMerge("flex", "gap-4", "justify-center", className)}>
            <div className={twMerge("w-2", "h-2", "rounded-full", "bg-gray-500", "animate-ping")} />
            <div className={twMerge("w-2", "h-2", "rounded-full", "bg-gray-500", "animate-ping")} />
            <div className={twMerge("w-2", "h-2", "rounded-full", "bg-gray-500", "animate-ping")} />
        </div>
    );
}
