"use client";

import CategoryList from "@/components/CategoryList";
import { GridLayout, RoomItem } from "@/components/RoomList";
import { Fragment, useEffect, useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { Loader, LoaderGrid } from "@/components/Loader";
import { RoomType } from "@/interface";
import { twMerge } from "tailwind-merge";

export default async function Home() {
    const ref = useRef<HTMLDivElement | null>(null);
    const pageRef = useIntersectionObserver(ref, {});
    const isPageEnd = !!pageRef?.isIntersecting;

    const fetchRooms = async ({ pageParam = 1 }) => {
        const { data } = await axios(`/api/rooms?page=` + pageParam, {
            params: {
                limit: 12,
                page: pageParam,
            },
        });

        return data;
    };

    const {
        data: rooms,
        isFetching,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isError,
        isLoading,
    } = useInfiniteQuery("rooms", fetchRooms, {
        getNextPageParam: (lastPage, _) =>
            lastPage?.data?.length > 0 ? lastPage.page + 1 : undefined,
    });

    if (isError) {
        throw new Error("Room API Fetching Error");
    }

    useEffect(() => {
        let timerId: NodeJS.Timeout | undefined;

        if (isPageEnd && hasNextPage) {
            timerId = setTimeout(() => {
                fetchNextPage();
            }, 500);
        }
    }, [fetchNextPage, hasNextPage, isPageEnd]);

    return (
        <>
            <CategoryList />
            <GridLayout>
                {isLoading || isFetching ? (
                    <LoaderGrid />
                ) : (
                    rooms?.pages.map((page, index) => (
                        <Fragment key={index}>
                            {page?.data?.map((room: RoomType) => (
                                <RoomItem room={room} key={room.id} />
                            ))}
                        </Fragment>
                    ))
                )}
            </GridLayout>
            {(isFetching || hasNextPage || isFetchingNextPage) && <Loader />}
            <div className={twMerge("w-full", "touch-none", "h-10", "mb-10")} ref={ref} />
        </>
    );
}

async function getRooms() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rooms`, {
        cache: "force-cache",
    });

    if (!res.ok) {
        throw new Error("Failed to Fetch");
    }

    return res.json();
}
