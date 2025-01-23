import { AppBar, Toolbar, Typography } from "@mui/material";
import ColorModeToggle from "./ColorModeToggle";

function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          component="a"
          href="/"
          noWrap
          sx={{
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".2rem",
            color: "inherit",
            textDecoration: "none",
          }}
          variant="h6"
        >
          Search ECs
        </Typography>

        <ColorModeToggle />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
