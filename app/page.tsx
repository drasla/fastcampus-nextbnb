"use client";

import { RoomType } from "@/interface";
import CategoryList from "@/components/CategoryList";
import { GridLayout, RoomItem } from "@/components/RoomList";

export default async function Home() {
    const data: RoomType[] = await getRooms();

    return (
        <>
            <CategoryList />
            <GridLayout>
                {data.map(room => (
                    <RoomItem room={room} key={room.id} />
                ))}
            </GridLayout>
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
