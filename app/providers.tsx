"use client";

import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

interface Props {
    children?: ReactNode;
}

const queryClient = new QueryClient();

export const NextProvider = ({ children }: Props) => {
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools />
            </QueryClientProvider>
        </RecoilRoot>
    );
};

export const NextLayout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            <div className={twMerge("mt-20", "p-10", "min-h-[80vh]")}>{children}</div>
            <Footer />
        </>
    );
};
