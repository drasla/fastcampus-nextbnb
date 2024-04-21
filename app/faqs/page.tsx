import { FaqType } from "@/interface";
import { twMerge } from "tailwind-merge";

export default async function FaqPage() {
    const data: FaqType[] = await getData();

    return (
        <div className={twMerge("max-w-5xl", "mx-auto")}>
            <h1 className={twMerge("text-lg", "md:text-3xl", "font-semibold")}>FAQ</h1>
            <p className={twMerge("mt-2", "text-gray-600")}>도움말 내용을 확인해주세요.</p>
            <div className={twMerge("mt-8", "flex", "flex-col", "mb-10")}>
                {data?.map(faq => (
                    <div
                        key={faq.id}
                        className={twMerge(
                            "py-5",
                            "border-b",
                            "border-b-gray-200",
                            "text-black",
                            "items-center",
                            "font-semibold",
                        )}>
                        <div>{faq.title}</div>
                        <div className={twMerge("text-gray-600", "font-normal", "mt-2")}>
                            {faq.desc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/faqs`, {
        cache: "force-cache",
    });

    if (!res.ok) {
        throw new Error("Failed to Fetch");
    }

    return res.json();
}
