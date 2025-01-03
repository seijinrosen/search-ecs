import {
  Checkbox,
  FormControlLabel,
  List,
  ListSubheader,
  Typography,
} from "@mui/material";
import { useLocalStorage } from "react-use";
import { ecSites } from "../ec-sites";
import { sjisEncode } from "../util";
import ResultItem from "./ResultItem";

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
              <Typography
                variant="caption"
                sx={{ userSelect: "none" }}
              >
                Show URL
              </Typography>
            }
          />
        </ListSubheader>
      }
    >
      {ecSites.map(({ id, name, baseUrl, icon, encode }) => (
        <ResultItem
          name={name}
          url={baseUrl.replace(
            "${searchQuery}",
            encode === "SJIS" ? sjisEncode(searchQuery) : searchQuery,
          )}
          showUrl={showUrl ?? true}
          icon={icon}
          key={id}
        />
      ))}
    </List>
  );
};

export default Results;
