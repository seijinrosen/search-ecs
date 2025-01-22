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

interface Props {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchField = ({ searchQuery, setSearchQuery }: Props) => {
  const over600px = useMediaQuery("(min-width:600px)");
  const inputRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  const focusTextField = () => inputRef.current?.focus();

  useHotkeys("/", (e) => {
    e.preventDefault();
    focusTextField();
  });

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <></>;

  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <SearchIcon
        onClick={focusTextField}
        sx={{
          color: "action.active",
          mr: 1,
          my: 0.5,
          cursor: "pointer",
        }}
      />

      <TextField
        InputProps={{
          endAdornment: searchQuery && (
            <InputAdornment position="end">
              <Tooltip
                arrow
                title="消去"
              >
                <ClearIcon
                  onClick={() => {
                    setSearchQuery("");
                    focusTextField();
                  }}
                  sx={{
                    cursor: "pointer",
                  }}
                />
              </Tooltip>
            </InputAdornment>
          ),
        }}
        autoFocus={over600px}
        fullWidth
        inputRef={inputRef}
        label="Search..."
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        placeholder={`e.g., ${randomPlaceholder}`}
        value={searchQuery}
        variant="standard"
      />

      {over600px && (
        <Tooltip
          arrow
          title='スラッシュキー ( "/" ) を押して検索フィールドに移動できます'
        >
          <Box
            onClick={focusTextField}
            sx={{
              border: "solid 1px",
              borderRadius: "5px",
              px: 1,
              ml: 1,
              my: 0.5,
              userSelect: "none",
              cursor: "pointer",
            }}
          >
            /
          </Box>
        </Tooltip>
      )}
    </Box>
  );
};

export default SearchField;
