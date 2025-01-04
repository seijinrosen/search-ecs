import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Container, Grid, IconButton } from "@mui/material";
import Copyright from "./Copyright";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      pt: 3,
      pb: 6,
      px: 1,
      mt: "auto",
      backgroundColor: (theme) =>
        theme.palette.mode === "light"
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
    }}
  >
    <Container maxWidth="sm">
      <Grid
        container
        justifyContent="center"
        mb={2}
        pb={2}
        spacing={3}
      >
        <Grid item>
          <IconButton
            color="inherit"
            component="a"
            href="https://github.com/seijinrosen/search-ecs"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Grid>

        <Grid item>
          <IconButton
            color="info"
            component="a"
            href="https://twitter.com/seijinrosen"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>

      <Copyright />
    </Container>
  </Box>
);

export default Footer;
