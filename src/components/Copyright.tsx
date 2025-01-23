import { Link, Typography } from "@mui/material";

function Copyright() {
  return (
    <Typography
      align="center"
      color="text.secondary"
      variant="body2"
    >
      <span>Copyright © </span>

      <Link
        color="inherit"
        href="https://github.com/seijinrosen"
        rel="noopener noreferrer"
        target="_blank"
      >
        seijinrosen
      </Link>

      <span> {new Date().getFullYear()}.</span>
    </Typography>
  );
}

export default Copyright;
