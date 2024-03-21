import { IoPartlySunnyOutline } from "react-icons/io5";
import {
    GiBarn,
    GiCampingTent,
    GiCaveEntrance,
    GiHolyOak,
    GiSkier,
    GiStarKey,
} from "react-icons/gi";
import { MdOutlineBedroomChild, MdOutlineSurfing } from "react-icons/md";
import { FaHouseUser, FaUmbrellaBeach } from "react-icons/fa";
import { BiSolidTree, BiWater } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { TbMoodKid, TbSwimming } from "react-icons/tb";

export const CATEGORY = [
    "전망좋은",
    "자연",
    "동굴",
    "캠핑장",
    "방",
    "한옥",
    "해변",
    "국립공원",
    "인기",
    "수영장",
    "농장",
    "통나무집",
    "디자인",
    "스키",
    "호수",
    "키즈",
    "저택",
    "신규",
    "섬",
    "주택",
    "서핑",
    "골프장",
];

export const CATEGORY_DATA = [
    { title: "전망좋은", Icon: IoPartlySunnyOutline },
    { title: "자연", Icon: GiHolyOak },
    { title: "동굴", Icon: GiCaveEntrance },
    { title: "캠핑장", Icon: GiCampingTent },
    { title: "방", Icon: MdOutlineBedroomChild },
    { title: "한옥", Icon: FaHouseUser },
    { title: "해변", Icon: FaUmbrellaBeach },
    { title: "국립공원", Icon: BiSolidTree },
    { title: "인기", Icon: AiOutlineStar },
    { title: "수영장", Icon: TbSwimming },
    { title: "농장", Icon: GiBarn },
    { title: "스키", Icon: GiSkier },
    { title: "호수", Icon: BiWater },
    { title: "키즈", Icon: TbMoodKid },
    { title: "신규", Icon: GiStarKey },
    { title: "서핑", Icon: MdOutlineSurfing },
];
