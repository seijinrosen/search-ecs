import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { IconButton, Snackbar, Tooltip, useTheme } from "@mui/material";
import { useContext, useState } from "react";

import ColorModeContext from "../contexts/ColorModeContext";
import MaterialUISwitch from "./MaterialUISwitch";

function ColorModeToggle() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        arrow
        title={
          theme.palette.mode === "dark"
            ? "ライトモードに変更"
            : "ダークモードに変更"
        }
      >
        <MaterialUISwitch
          checked={theme.palette.mode === "dark"}
          onChange={colorMode.toggleColorMode}
        />
      </Tooltip>

      <Tooltip
        arrow
        title="デバイスのカラーモード設定に従います"
      >
        <IconButton
          color="inherit"
          onClick={() => {
            colorMode.resetColorMode();
            setOpen(true);
          }}
        >
          <SettingsBrightnessIcon />
        </IconButton>
      </Tooltip>

      <Snackbar
        autoHideDuration={3000}
        message="カラーモードをリセットしました"
        onClose={() => {
          setOpen(false);
        }}
        open={open}
      />
    </>
  );
}

export default ColorModeToggle;
