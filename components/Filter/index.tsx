import { useRecoilState, useRecoilValue } from "recoil";
import { detailFilterState, filterState } from "@/atom";
import FilterLayout from "@/components/Filter/layout";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import Calendar from "react-calendar";
import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

export const SearchFilter = () => {
    return (
        <>
            <LocationFilter />
            <CheckInFilter />
            <CheckOutFilter />
            <GuestFilter />
        </>
    );
};

const LocationFilter = () => {
    const [filterValue, setFilterValue] = useRecoilState(filterState);
    const [detailFilter, setDetailFilter] = useRecoilState(detailFilterState);

    console.log(filterValue);
    console.log(detailFilter);

    return (
        <FilterLayout title={"지역으로 검색하기"} isShow={detailFilter === "location"}>
            <div className={twMerge("flex", "flex-wrap", "gap-4", "mt-4")}>
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
                                : null,
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
        </FilterLayout>
    );
};

const CheckInFilter = () => {
    const [filterValue, setFilterValue] = useRecoilState(filterState);
    const [detailFilter, setDetailFilter] = useRecoilState(detailFilterState);

    const onChange = (e: any) => {
        setFilterValue({
            ...filterValue,
            checkIn: dayjs(e).format("YYYY-MM-DD"),
        });
        setDetailFilter("checkOut");
    };

    return (
        <FilterLayout title={"체크인 날짜 설정하기"} isShow={detailFilter === "checkIn"}>
            <Calendar
                className={twMerge("mt-8", "mx-auto")}
                onChange={onChange}
                minDate={new Date()}
                defaultValue={filterValue.checkIn ? new Date(filterValue.checkIn) : null}
                formatDay={(_, date) => dayjs(date).format("DD")}
            />
        </FilterLayout>
    );
};

const CheckOutFilter = () => {
    const [filterValue, setFilterValue] = useRecoilState(filterState);
    const [detailFilter, setDetailFilter] = useRecoilState(detailFilterState);

    const onChange = (e: any) => {
        setFilterValue({
            ...filterValue,
            checkOut: dayjs(e).format("YYYY-MM-DD"),
        });
        setDetailFilter("guest");
    };

    return (
        <FilterLayout title={"체크아웃 날짜 설정하기"} isShow={detailFilter === "checkOut"}>
            <Calendar
                className={twMerge("mt-8", "mx-auto")}
                onChange={onChange}
                minDate={filterValue.checkIn ? new Date(filterValue.checkIn) : new Date()}
                defaultValue={filterValue.checkOut ? new Date(filterValue.checkOut) : null}
                formatDay={(_, date) => dayjs(date).format("DD")}
            />
        </FilterLayout>
    );
};

const GuestFilter = () => {
    const [filterValue, setFilterValue] = useRecoilState(filterState);
    const detailFilter = useRecoilValue(detailFilterState);

    const [counter, setCounter] = useState<number>(filterValue.guest || 0);

    return (
        <FilterLayout title="게스트 수 추가하기" isShow={detailFilter === "guest"}>
            <div
                className={twMerge(
                    "mt-4",
                    "border",
                    "border-gray-200",
                    "rounded-lg",
                    "py-2",
                    "px-4",
                    "flex",
                    "justify-between",
                    "items-center",
                )}>
                <div>
                    <div className={twMerge("font-semibold", "text-sm")}>게스트 수 추가</div>
                    <div className={twMerge("text-gray-500", "text-xs")}>
                        숙박 인원을 입력해주세요
                    </div>
                </div>
                <div className={twMerge("flex", "gap-4", "items-center", "justify-center")}>
                    <button
                        type="button"
                        className={twMerge(
                            "rounded-full",
                            "w-8",
                            "h-8",
                            "disabled:border-gray-200",
                            "hover:border-black",
                        )}
                        disabled={counter <= 0}
                        onClick={() => {
                            setCounter(val => val - 1);
                            setFilterValue({
                                ...filterValue,
                                guest: counter - 1,
                            });
                        }}>
                        <AiOutlineMinusCircle
                            className={twMerge("m-auto", counter <= 0 ? "text-gray-200" : null)}
                        />
                    </button>
                    <div className={twMerge("w-3", "text-center")}>{counter}</div>
                    <button
                        type="button"
                        className={twMerge(
                            "rounded-full",
                            "w-8",
                            "h-8",
                            "disabled:border-gray-200",
                            "hover:border-black",
                        )}
                        disabled={counter >= 20}
                        onClick={() => {
                            setCounter(val => val + 1);
                            setFilterValue({
                                ...filterValue,
                                guest: counter + 1,
                            });
                        }}>
                        <AiOutlinePlusCircle
                            className={twMerge("m-auto", counter >= 20 ? "text-gray-200" : null)}
                        />
                    </button>
                </div>
            </div>
        </FilterLayout>
    );
};
