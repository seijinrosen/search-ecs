import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

interface Props {
  readonly name: string;
  readonly url: string;
  readonly showUrl: boolean;
  readonly icon: React.ReactNode;
}

function ResultItem({ name, url, showUrl, icon }: Props) {
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
}

export default ResultItem;
