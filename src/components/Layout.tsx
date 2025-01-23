import { Box, createTheme, CssBaseline, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { useLocalStorage } from "react-use";

import { ColorModeContext } from "../contexts/ColorModeContext";
import { Footer } from "./Footer";
import { Header } from "./Header";

export default function Layout({ children }: React.PropsWithChildren) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [paletteMode, savePaletteMode, removePaletteMode] = useLocalStorage<
    "dark" | "light"
  >("paletteMode");

  const [mode, setMode] = useState(
    normalizePaletteMode({
      paletteMode,
      prefersDarkMode,
    }),
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const nextMode = prevMode === "light" ? "dark" : "light";
          savePaletteMode(nextMode);
          return nextMode;
        });
      },

      resetColorMode: () => {
        setMode(prefersDarkMode ? "dark" : "light");
        removePaletteMode();
      },
    }),
    [prefersDarkMode, removePaletteMode, savePaletteMode],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />

          {children}

          <Footer />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

function normalizePaletteMode({
  paletteMode,
  prefersDarkMode,
}: {
  paletteMode?: string;
  prefersDarkMode: boolean;
}): "dark" | "light" {
  if (paletteMode === "light") {
    return "light";
  }

  if (paletteMode === "dark") {
    return "dark";
  }

  return prefersDarkMode ? "dark" : "light";
}
