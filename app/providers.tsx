import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
    children?: ReactNode;
}

export const NextLayout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            <div className={twMerge("mt-20", "p-10", "min-h-[80vh]")}>{children}</div>
            <Footer />
        </>
    );
};
