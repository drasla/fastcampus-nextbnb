"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { MdModeOfTravel } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { useRecoilState, useRecoilValue } from "recoil";
import { detailFilterState, filterState } from "@/atom";
import Link from "next/link";
import { SearchFilter } from "@/components/Filter";

const menus = [
    { id: 1, title: "로그인", url: "/users/login" },
    { id: 2, title: "회원가입", url: "/users/signup" },
    { id: 3, title: "FAQ", url: "/faqs" },
];

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [detailFilter, setDetailFilter] = useRecoilState(detailFilterState);
    const filterValue = useRecoilValue(filterState);

    const router = useRouter();

    return (
        <nav
            className={twMerge(
                "z-20",
                "border",
                "border-b-gray-20",
                "w-full",
                "h-20",
                "shadow-sm",
                "p-4",
                "sm:px-10",
                "flex",
                "justify-between",
                "align-center",
                "fixed",
                "top-0",
                "bg-white",
                showFilter ? "!h-44" : "",
                showFilter ? "!items-start" : "",
            )}>
            <div
                className={twMerge(
                    "grow",
                    "basis-0",
                    "hidden",
                    "my-auto",
                    "font-semibold",
                    "text-lg",
                    "sm:text-xl",
                    "text-rose-500",
                    "cursor-pointer",
                    "sm:flex",
                    "sm:gap-2",
                )}>
                <MdModeOfTravel className={twMerge("text-4xl", "my-auto")} />
                <Link href={"/"} className={twMerge("my-auto")}>
                    Nextbnb
                </Link>
            </div>
            {!showFilter ? (
                <div
                    className={twMerge(
                        "w-full",
                        "sm:w-[280px]",
                        "border",
                        "border-gray-200",
                        "rounded-full",
                        "shadow",
                        "hover:shadow-lg",
                        "cursor-pointer",
                        "flex",
                        "justify-between",
                        "pl-6",
                        "pr-2",
                    )}>
                    <div
                        role={"presentation"}
                        className={twMerge("flex", "justify-center", "gap-1", "cursor-pointer")}
                        onClick={() => {
                            setDetailFilter("location");
                            setShowFilter(true);
                        }}>
                        <div className={twMerge("my-auto", "font-semibold", "text-sm")}>
                            어디든지
                        </div>
                        <RxDividerVertical
                            className={twMerge("text-gray-200", "my-auto", "text-2xl")}
                        />
                        <div className={twMerge("my-auto", "font-semibold", "text-sm")}>어디든</div>
                        <RxDividerVertical
                            className={twMerge("text-gray-200", "my-auto", "text-2xml")}
                        />
                        <div className={twMerge("my-auto", "font-semibold", "text-sm")}>게스트</div>
                    </div>
                    <button
                        type={"button"}
                        className={twMerge(
                            "bg-rose-500",
                            "text-white",
                            "rounded-full",
                            "w-8",
                            "h-8",
                            "my-auto",
                        )}
                        onClick={() => setShowFilter(true)}>
                        <AiOutlineSearch
                            className={twMerge("text-lg", "m-auto", "font-semibold")}
                        />
                    </button>
                </div>
            ) : (
                <div className="sm:w-[340px] cursor-pointer w-full relative">
                    <div className="flex justify-center gap-7 h-14 text-center items-center">
                        <button
                            type="button"
                            className="font-semibold underline underline-offset-8">
                            숙소
                        </button>
                        <button
                            type="button"
                            className="text-gray-700"
                            onClick={() => window.alert("서비스 준비중입니다.")}>
                            체험
                        </button>
                        <button
                            type="button"
                            className="text-gray-700"
                            onClick={() => window.alert("서비스 준비중입니다.")}>
                            온라인 체험
                        </button>
                        <button
                            type="button"
                            className="underline underline-offset-8 text-gray-500 hover:text-black"
                            onClick={() => setShowFilter(false)}>
                            필터 닫기
                        </button>
                    </div>
                    <div className="w-[90%] sm:max-w-3xl flex flex-col sm:flex-row border border-gray-200 rounded-lg py-4 sm:py-2 sm:rounded-full shadow-sm bg-white hover:shadow-lg cursor-pointer justify-between fixed top-20 inset-x-0 mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-4 w-full relative sm:pl-2">
                            <button
                                type="button"
                                onClick={() => setDetailFilter("location")}
                                className={twMerge(
                                    "font-semibold",
                                    "text-xs",
                                    "rounded-full",
                                    "hover:bg-gray-100",
                                    "py-3 px-6 text-left",
                                    detailFilter === "location"
                                        ? twMerge("shadow", "bg-white")
                                        : "",
                                )}>
                                여행지
                                <div className="text-gray-500 text-xs">
                                    {filterValue?.location || "여행지 검색"}
                                </div>
                            </button>
                            <button
                                type="button"
                                onClick={() => setDetailFilter("checkIn")}
                                className={twMerge(
                                    "font-semibold",
                                    "text-xs",
                                    "rounded-full",
                                    "hover:bg-gray-100",
                                    "py-3",
                                    "px-6 text-left",
                                    detailFilter === "checkIn" ? twMerge("shadow", "bg-white") : "",
                                )}>
                                체크인
                                <div className="text-gray-500 text-xs">
                                    {filterValue?.checkIn || "날짜 추가"}
                                </div>
                            </button>
                            <button
                                type="button"
                                onClick={() => setDetailFilter("checkOut")}
                                className={twMerge(
                                    "font-semibold",
                                    "text-xs",
                                    "rounded-full",
                                    "hover:bg-gray-100",
                                    "py-3",
                                    "px-6 text-left",
                                    detailFilter === "checkOut"
                                        ? twMerge("shadow", "bg-white")
                                        : "",
                                )}>
                                체크아웃
                                <div className="text-gray-500 text-xs">
                                    {filterValue?.checkOut || "날짜 추가"}
                                </div>
                            </button>
                            <button
                                type="button"
                                onClick={() => setDetailFilter("guest")}
                                className={twMerge(
                                    "font-semibold",
                                    "text-xs",
                                    "rounded-full",
                                    "hover:bg-gray-100",
                                    "py-3",
                                    "px-6",
                                    "text-left",
                                    detailFilter === "guest" ? twMerge("shadow", "bg-white") : "'",
                                )}>
                                여행자
                                <div className="text-gray-500 text-xs">
                                    {`${filterValue?.guest} 명` || "게스트 추가"}
                                </div>
                            </button>
                            <SearchFilter />
                        </div>
                        <button
                            type="button"
                            className={twMerge(
                                "bg-rose-600",
                                "text-white",
                                "rounded-full",
                                "h-10",
                                "mx-4",
                                "sm:w-24",
                                "mt-4",
                                "sm:mt-2",
                                "my-auto",
                                "flex",
                                "justify-center",
                                "gap-1",
                                "px-3",
                                "py-2",
                                "hover:shadow",
                                "hover:bg-rose-500",
                            )}
                            onClick={() => {
                                setShowFilter(false);
                                setDetailFilter(null);
                            }}>
                            <AiOutlineSearch className="font-semibold text-xl my-auto" />
                            <div className="my-auto">검색</div>
                        </button>
                    </div>
                </div>
            )}
            <div
                className={twMerge(
                    "grow",
                    "basis-0",
                    "hidden",
                    "md:flex",
                    "gap-4",
                    "align-middle",
                    "my-auto",
                    "justify-end",
                    "relative",
                )}>
                <button
                    type={"button"}
                    className={twMerge(
                        "font-semibold",
                        "text-sm",
                        "my-auto",
                        "px-4",
                        "py-3",
                        "rounded-full",
                        "hover:bg-gray-50",
                    )}>
                    당신의 공간을 등록해주세요
                </button>
                <button
                    type={"button"}
                    onClick={() => setShowMenu(val => !val)}
                    className={twMerge(
                        "flex",
                        "align-middle",
                        "gap-3",
                        "rounded-full",
                        "border",
                        "border-gray-20",
                        "shadow-sm",
                        "px-4",
                        "py-3",
                        "my-auto",
                        "hover:shadow-lg",
                    )}>
                    <AiOutlineMenu />
                    <AiOutlineUser />
                </button>
                {showMenu && (
                    <div
                        className={twMerge(
                            "border",
                            "border-gray-200",
                            "shadow-lg",
                            "py-2",
                            "flex",
                            "flex-col",
                            "absolute",
                            "top-12",
                            "bg-white",
                            "w-60",
                            "rounded-lg",
                        )}>
                        {menus.map(menu => (
                            <button
                                type={"button"}
                                key={menu.id}
                                className={twMerge(
                                    "h-10",
                                    "hover:bg-gray-50",
                                    "pl-3",
                                    "text-sm",
                                    "text-gray-700",
                                    "text-left",
                                )}
                                onClick={() => router.push(menu.url)}>
                                {menu.title}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
