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

function Results({ searchQuery }: { readonly searchQuery: string }) {
  const [showUrl, saveShowUrl] = useLocalStorage("showUrl", true);

  return (
    <List
      subheader={
        <ListSubheader
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "right",
          }}
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
      {ecSites.map(({ baseUrl, encode, icon, id, name }) => (
        <ResultItem
          key={id}
          icon={icon}
          name={name}
          showUrl={showUrl ?? true}
          url={baseUrl.replace(
            // eslint-disable-next-line no-template-curly-in-string
            "${searchQuery}",
            encode === "SJIS" ? sjisEncode(searchQuery) : searchQuery,
          )}
        />
      ))}
    </List>
  );
}

export default Results;
