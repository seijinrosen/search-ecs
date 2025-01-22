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
                onChange={(e) => {
                  saveShowUrl(e.target.checked);
                }}
              />
            }
            label={
              <Typography
                sx={{ userSelect: "none" }}
                variant="caption"
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
          icon={icon}
          key={id}
          name={name}
          showUrl={showUrl ?? true}
          url={baseUrl.replace(
            "${searchQuery}",
            encode === "SJIS" ? sjisEncode(searchQuery) : searchQuery,
          )}
        />
      ))}
    </List>
  );
};

export default Results;
