import GoogleIcon from "@mui/icons-material/Google";
import { Typography } from "@mui/material";
import { FaAmazon } from "react-icons/fa";
import { SiRakuten } from "react-icons/si";

export const ecSites = [
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
];
