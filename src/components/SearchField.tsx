import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  InputAdornment,
  TextField,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { randomChoice } from "../util";

const placeholderCandidates = [
  "ウェットティッシュ",
  "トイレットペッパー",
  "ボディソープ",
  "外付けハードディスク",
  "紙コップ",
  "絆創膏",
  "鼻炎薬",
];
const randomPlaceholder = randomChoice(placeholderCandidates);

type Props = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchField = ({ searchQuery, setSearchQuery }: Props) => {
  const over600px = useMediaQuery("(min-width:600px)");
  const inputRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  const focusTextField = () => inputRef.current?.focus();

  useHotkeys("/", (e) => {
    e.preventDefault();
    focusTextField();
  });

  useEffect(() => setMounted(true), []);
  if (!mounted) return <></>;

  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <SearchIcon
        sx={{
          color: "action.active",
          mr: 1,
          my: 0.5,
          cursor: "pointer",
        }}
        onClick={focusTextField}
      />

      <TextField
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        variant="standard"
        fullWidth
        label="Search..."
        placeholder={`e.g., ${randomPlaceholder}`}
        inputRef={inputRef}
        autoFocus={over600px}
        InputProps={{
          endAdornment: searchQuery && (
            <InputAdornment position="end">
              <Tooltip
                arrow
                title="消去"
              >
                <ClearIcon
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setSearchQuery("");
                    focusTextField();
                  }}
                />
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />

      {over600px && (
        <Tooltip
          arrow
          title='スラッシュキー ( "/" ) を押して検索フィールドに移動できます'
        >
          <Box
            sx={{
              border: "solid 1px",
              borderRadius: "5px",
              px: 1,
              ml: 1,
              my: 0.5,
              userSelect: "none",
              cursor: "pointer",
            }}
            onClick={focusTextField}
          >
            /
          </Box>
        </Tooltip>
      )}
    </Box>
  );
};

export default SearchField;
