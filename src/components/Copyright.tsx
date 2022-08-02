import { Link, Typography } from "@mui/material";

const Copyright = () => (
  <Typography variant="body2" color="text.secondary" align="center">
    {"Copyright © "}
    <Link
      color="inherit"
      href="https://github.com/seijinrosen"
      target="_blank"
      rel="noopener noreferrer"
    >
      seijinrosen
    </Link>{" "}
    {new Date().getFullYear()}.
  </Typography>
);

export default Copyright;
