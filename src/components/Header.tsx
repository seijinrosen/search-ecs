import { AppBar, Toolbar, Typography } from "@mui/material";
import ColorModeToggle from "./ColorModeToggle";

const Header = () => (
  <AppBar position="sticky">
    <Toolbar>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".2rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Search ECs
      </Typography>
      <ColorModeToggle />
    </Toolbar>
  </AppBar>
);

export default Header;
