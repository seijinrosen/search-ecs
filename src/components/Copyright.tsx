import { Link, Typography } from "@mui/material";

const Copyright = () => (
  <Typography
    variant="body2"
    color="text.secondary"
    align="center"
  >
    <span>Copyright © </span>

    <Link
      color="inherit"
      href="https://github.com/seijinrosen"
      target="_blank"
      rel="noopener noreferrer"
    >
      seijinrosen
    </Link>

    <span> {new Date().getFullYear()}.</span>
  </Typography>
);

export default Copyright;
