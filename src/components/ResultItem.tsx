import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import type { JSX } from "react";

const ResultItem = ({
  name,
  url,
  showUrl,
  icon,
}: {
  name: string;
  url: string;
  showUrl: boolean;
  icon: JSX.Element;
}) => (
  <ListItem disablePadding>
    <ListItemButton
      divider
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ListItemAvatar>
        <Avatar>{icon}</Avatar>
      </ListItemAvatar>

      <ListItemText
        primary={name}
        secondary={showUrl ? url : null}
      />

      <OpenInNewIcon />
    </ListItemButton>
  </ListItem>
);

export default ResultItem;
