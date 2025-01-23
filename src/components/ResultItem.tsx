import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { memo } from "react";

interface Props {
  readonly icon: React.ReactNode;
  readonly name: string;
  readonly showUrl: boolean;
  readonly url: string;
}

export const ResultItem = memo(function ResultItem({
  icon,
  name,
  showUrl,
  url,
}: Props) {
  return (
    <ListItem disablePadding>
      <ListItemButton
        component="a"
        divider
        href={url}
        rel="noopener noreferrer"
        target="_blank"
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
});
