import GoogleIcon from "@mui/icons-material/Google";
import { Typography } from "@mui/material";
import { DiYahooSmall } from "react-icons/di";
import { FaAmazon } from "react-icons/fa";
import { SiRakuten } from "react-icons/si";

interface ECSiteType {
  baseUrl: string;
  encode?: "SJIS";
  icon: React.ReactNode;
  id: number;
  name: string;
}

// eslint-disable-next-line no-template-curly-in-string
export const SEARCH_QUERY = "${searchQuery}";

export const ecSites: ECSiteType[] = [
  {
    baseUrl: `https://www.amazon.co.jp/s?k=${SEARCH_QUERY}`,
    icon: <FaAmazon />,
    id: 0,
    name: "Amazon.co.jp",
  },
  {
    baseUrl: `https://search.rakuten.co.jp/search/mall/${SEARCH_QUERY}/`,
    icon: <SiRakuten />,
    id: 1,
    name: "楽天市場",
  },
  {
    baseUrl: `https://www.yodobashi.com/?word=${SEARCH_QUERY}`,
    icon: <Typography variant="h5">ヨ</Typography>,
    id: 2,
    name: "ヨドバシ.com",
  },
  {
    baseUrl: `https://www.google.com/search?q=${SEARCH_QUERY}`,
    icon: <GoogleIcon />,
    id: 3,
    name: "Google",
  },
  {
    baseUrl: `https://shopping.yahoo.co.jp/search?p=${SEARCH_QUERY}`,
    icon: <DiYahooSmall />,
    id: 4,
    name: "Yahoo!ショッピング",
  },
  {
    baseUrl: `https://kakaku.com/search_results/${SEARCH_QUERY}/`,
    encode: "SJIS",
    icon: <Typography variant="h5">価</Typography>,
    id: 5,
    name: "価格.com",
  },
  {
    baseUrl: `https://jp.mercari.com/search?keyword=${SEARCH_QUERY}`,
    icon: <Typography variant="h5">メ</Typography>,
    id: 6,
    name: "メルカリ",
  },
];
