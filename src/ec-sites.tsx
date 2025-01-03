import GoogleIcon from "@mui/icons-material/Google";
import { Typography } from "@mui/material";
import type { JSX } from "react";
import { DiYahooSmall } from "react-icons/di";
import { FaAmazon } from "react-icons/fa";
import { SiRakuten } from "react-icons/si";


type ECSiteType = {
  id: number;
  name: string;
  baseUrl: string;
  icon: JSX.Element;
  encode?: string;
};

export const ecSites: ECSiteType[] = [
  {
    id: 0,
    name: "Amazon.co.jp",
    baseUrl: "https://www.amazon.co.jp/s?k=${searchQuery}",
    icon: <FaAmazon />,
  },
  {
    id: 1,
    name: "楽天市場",
    baseUrl: "https://search.rakuten.co.jp/search/mall/${searchQuery}/",
    icon: <SiRakuten />,
  },
  {
    id: 2,
    name: "ヨドバシ.com",
    baseUrl: "https://www.yodobashi.com/?word=${searchQuery}",
    icon: <Typography variant="h5">ヨ</Typography>,
  },
  {
    id: 3,
    name: "Google",
    baseUrl: "https://www.google.com/search?q=${searchQuery}",
    icon: <GoogleIcon />,
  },
  {
    id: 4,
    name: "Yahoo!ショッピング",
    baseUrl: "https://shopping.yahoo.co.jp/search?p=${searchQuery}",
    icon: <DiYahooSmall />,
  },
  {
    id: 5,
    name: "価格.com",
    baseUrl: "https://kakaku.com/search_results/${searchQuery}/",
    icon: <Typography variant="h5">価</Typography>,
    encode: "SJIS",
  },
  {
    id: 6,
    name: "メルカリ",
    baseUrl: "https://jp.mercari.com/search?keyword=${searchQuery}",
    icon: <Typography variant="h5">メ</Typography>,
  },
];
