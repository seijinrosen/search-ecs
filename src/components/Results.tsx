import GoogleIcon from "@mui/icons-material/Google";
import {
  Checkbox,
  FormControlLabel,
  List,
  ListSubheader,
  Typography,
} from "@mui/material";
import { FaAmazon } from "react-icons/fa";
import { SiRakuten } from "react-icons/si";
import { useLocalStorage } from "react-use";
import ResultItem from "./ResultItem";

const sites = [
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

const Results = ({ searchQuery }: { searchQuery: string }) => {
  const [showUrl, saveShowUrl] = useLocalStorage("showUrl", true);

  return (
    <List
      subheader={
        <ListSubheader
          disableGutters
          sx={{ justifyContent: "right", display: "flex" }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={showUrl}
                onChange={(e) => saveShowUrl(e.target.checked)}
              />
            }
            label={
              <Typography variant="caption" sx={{ userSelect: "none" }}>
                Show URL
              </Typography>
            }
          />
        </ListSubheader>
      }
    >
      {sites.map(({ id, name, baseUrl, icon }) => (
        <ResultItem
          name={name}
          url={baseUrl.replace("${searchQuery}", searchQuery)}
          showUrl={showUrl ?? true}
          icon={icon}
          key={id}
        />
      ))}
    </List>
  );
};

export default Results;
