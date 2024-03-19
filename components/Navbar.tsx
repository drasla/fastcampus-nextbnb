"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { MdModeOfTravel } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import {
    AiOutlineMenu,
    AiOutlineMinusCircle,
    AiOutlinePlusCircle,
    AiOutlineSearch,
    AiOutlineUser,
} from "react-icons/ai";
import dayjs from "dayjs";

const menus = [
    { id: 1, title: "로그인", url: "/users/login" },
    { id: 2, title: "회원가입", url: "/users/signup" },
    { id: 3, title: "FAQ", url: "/faqs" },
];

type DetailFilterType = "location" | "checkIn" | "checkOut" | "guest";

interface FilterProps {
    location: string;
    checkIn: string;
    checkOut: string;
    guest: number;
}

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [detailFilter, setDetailFilter] = useState<null | DetailFilterType>(null);
    const [filterValue, setFilterValue] = useState<FilterProps>({
        location: "",
        checkIn: "",
        checkOut: "",
        guest: 0,
    });
    const router = useRouter();

    return (
        <nav
            className={twMerge(
                "border",
                "border-b-gray-20",
                "w-full",
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
                <div className={twMerge("my-auto")}>Nextbnb</div>
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
                        onClick={() => setShowFilter(true)}>
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
                            {detailFilter === "location" && (
                                <LocationFilter
                                    filterValue={filterValue}
                                    setFilterValue={setFilterValue}
                                    setDetailFilter={setDetailFilter}
                                />
                            )}
                            {detailFilter === "checkIn" && (
                                <CheckInFilter
                                    filterValue={filterValue}
                                    setFilterValue={setFilterValue}
                                    setDetailFilter={setDetailFilter}
                                />
                            )}
                            {detailFilter === "checkOut" && (
                                <CheckOutFilter
                                    filterValue={filterValue}
                                    setFilterValue={setFilterValue}
                                    setDetailFilter={setDetailFilter}
                                />
                            )}
                            {detailFilter === "guest" && (
                                <GuestFilter
                                    filterValue={filterValue}
                                    setFilterValue={setFilterValue}
                                    setDetailFilter={setDetailFilter}
                                />
                            )}
                        </div>
                        <button
                            type="button"
                            className="bg-rose-600 text-white rounded-full h-10 mx-4 sm:w-24 my-auto flex justify-center gap-1 px-3 py-2 hover:shadow hover:bg-rose-500"
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
                    "sm:flex",
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

interface FilterComponentProps {
    filterValue: FilterProps;
    setFilterValue: React.Dispatch<React.SetStateAction<FilterProps>>;
    setDetailFilter: React.Dispatch<React.SetStateAction<DetailFilterType | null>>;
}

const LocationFilter = ({ filterValue, setFilterValue, setDetailFilter }: FilterComponentProps) => {
    return (
        <div className="absolute top-80 sm:top-[70px] border border-gray-200 px-8 py-10 flex flex-col bg-white w-full mx-auto inset-x-0 sm:max-w-3xl sm:w-[780px] rounded-xl">
            <div className="text-sm font-semibold">지역으로 검색하기</div>
            <div className="flex flex-wrap gap-4 mt-4">
                {["서울", "부산", "대구", "인천", "광주", "대전", "울산"]?.map(value => (
                    <button
                        key={value}
                        type="button"
                        className={twMerge(
                            "border",
                            "rounded-lg",
                            "px-5",
                            "py-2.5",
                            "hover:bg-gray-200",
                            "focus:bg-rose-500",
                            filterValue.location === value
                                ? twMerge("bg-rose-600", "text-white")
                                : "",
                        )}
                        onClick={() => {
                            setFilterValue({
                                ...filterValue,
                                location: value,
                            });
                            setDetailFilter("checkIn");
                        }}>
                        {value}
                    </button>
                ))}
            </div>
        </div>
    );
};

const CheckInFilter = ({ filterValue, setFilterValue, setDetailFilter }: FilterComponentProps) => {
    return (
        <div className="absolute top-80 sm:top-[70px] border border-gray-200 px-8 py-10 flex flex-col bg-white w-full mx-auto inset-x-0 sm:max-w-3xl sm:w-[780px] rounded-xl">
            <div className="text-sm font-semibold">체크인 날짜 설정하기</div>
            <input
                type="date"
                className="mt-4 border border-gray-200 py-3 px-2.5 rounded-lg"
                defaultValue={filterValue.checkIn}
                min={dayjs().format("YYYY-MM-DD")}
                onChange={e => {
                    setFilterValue({ ...filterValue, checkIn: e.target.value });
                    setDetailFilter("checkOut");
                }}
            />
        </div>
    );
};

const CheckOutFilter = ({ filterValue, setFilterValue, setDetailFilter }: FilterComponentProps) => {
    return (
        <div className="absolute top-80 sm:top-[70px] border border-gray-200 px-8 py-10 flex flex-col bg-white w-full mx-auto inset-x-0 sm:max-w-3xl sm:w-[780px] rounded-xl">
            <div className="text-sm font-semibold">체크아웃 날짜 설정하기</div>
            <input
                type="date"
                className="mt-4 border border-gray-200 py-3 px-2.5 rounded-lg"
                defaultValue={filterValue.checkOut}
                min={dayjs(filterValue.checkIn).add(1, "day").format("YYYY-MM-DD")}
                onChange={e => {
                    setFilterValue({ ...filterValue, checkOut: e.target.value });
                    setDetailFilter("guest");
                }}
            />
        </div>
    );
};

const GuestFilter = ({ filterValue, setFilterValue, setDetailFilter: _ }: FilterComponentProps) => {
    const [counter, setCounter] = useState<number>(filterValue.guest || 0);

    return (
        <div className="absolute top-80 sm:top-[70px] border border-gray-200 px-8 py-10 flex flex-col bg-white w-full mx-auto inset-x-0 sm:max-w-3xl sm:w-[780px] rounded-xl">
            <div className="text-sm font-semibold">게스트 수 추가하기</div>
            <div className="mt-4 border border-gray-200 rounded-lg py-2 px-4 flex justify-between items-center">
                <div>
                    <div className="font-semibold text-sm">게스트 수 추가</div>
                    <div className="text-gray-500 text-xs">숙박 인원을 입력해주세요</div>
                </div>
                <div className="flex gap-4 items-center justify-center">
                    <button
                        type="button"
                        className="rounded-full w-8 h-8 disabled:border-gray-200 hover:border-black"
                        disabled={counter <= 0}
                        onClick={() => {
                            setCounter(val => val - 1);
                            setFilterValue({
                                ...filterValue,
                                guest: counter - 1,
                            });
                        }}>
                        <AiOutlineMinusCircle
                            className={twMerge("m-auto", counter <= 0 ? "text-gray-200" : "")}
                        />
                    </button>
                    <div className="w-3 text-center">{counter}</div>
                    <button
                        type="button"
                        className="rounded-full w-8 h-8 disabled:border-gray-200 hover:border-black"
                        disabled={counter >= 20}
                        onClick={() => {
                            setCounter(val => val + 1);
                            setFilterValue({
                                ...filterValue,
                                guest: counter + 1,
                            });
                        }}>
                        <AiOutlinePlusCircle
                            className={twMerge("m-auto", counter >= 20 ? "text-gray-200" : "")}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};
