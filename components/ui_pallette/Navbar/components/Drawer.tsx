import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CloseIcon from "@mui/icons-material/Close";

import Avatar from "../../Avatar";
import FavoriteAnimeList from "./FavoriteAnimeList";

type DrawerProps = {
  toggleDrawer: () => void;
  openDrawer: boolean;
};

const Drawer = ({ toggleDrawer, openDrawer }: DrawerProps) => {
  return (
    <SwipeableDrawer
      anchor="right"
      open={openDrawer}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      sx={() => ({
        "& .MuiDrawer-paper": {
          borderTopLeftRadius: "12px",
          borderBottomLeftRadius: "12px",
        },
      })}
    >
      <Box
        sx={() => ({
          width: 300,
          p: "32px",
          position: "relative",
        })}
      >
        <IconButton
          onClick={toggleDrawer}
          sx={{ top: "32px", right: "24px", position: "absolute" }}
          aria-label="Close Button"
        >
          <CloseIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Avatar />
          <Typography sx={{ flexGrow: 1, fontWeight: 700, fontSize: 18 }}>
            Hello, User!
          </Typography>
        </Box>
        <Typography sx={{ fontWeight: 700, fontSize: 20, marginTop: "20px" }}>
          Favorite Anime List
        </Typography>
        <FavoriteAnimeList toggleDrawer={toggleDrawer} />
      </Box>
    </SwipeableDrawer>
  );
};

export default Drawer;
