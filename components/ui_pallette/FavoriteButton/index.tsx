import { Suspense, useMemo, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { useSnackbar } from "notistack";
import dynamic from "next/dynamic";

import useFavorites from "../../../helpers/hooks/useFavorites";

import { FavoriteAnimeType, StyleType } from "../../../types";
import Button from "../Button";

const Dialog = dynamic(() => import("../Dialog"), { suspense: true });

type FavoriteButtonProps = {
  anime: FavoriteAnimeType;
  backgroundColor?: string;
};

const style: StyleType = {
  baseIcon: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    transition: "opacity 300ms ease-in-out",
  },
};

const FavoriteButton = ({ anime, backgroundColor }: FavoriteButtonProps) => {
  const {
    animes: favoriteAnimes,
    addAnime,
    removeAnime,
  } = useFavorites((state) => state);
  const [open, setOpen] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const isFavorite = useMemo(() => {
    return !!favoriteAnimes.find((dtAnime) => {
      return dtAnime.mal_id === anime.mal_id;
    });
  }, [favoriteAnimes, anime.mal_id]);

  const handleToggleAnime = () => {
    if (isFavorite) {
      removeAnime(anime.mal_id);
      handleToggleDialog();
    } else {
      addAnime(anime);
    }
    enqueueSnackbar(
      `Anime has been ${
        isFavorite ? "removed from" : "added to"
      } the favorite list!`,
      {
        variant: "success",
      }
    );
  };

  const handleToggleDialog = () => {
    setOpen((prev) => !prev);
  };

  const handleOnClick = () => {
    handleToggleAnime();
  };

  return (
    <>
      <IconButton
        onClick={isFavorite ? handleToggleDialog : handleOnClick}
        sx={[
          {
            position: "relative",
            width: "36px",
            height: "36px",
            transition: "all 300ms ease-in-out",
            backgroundColor: backgroundColor ?? "transparent",
          },
          (theme) => ({
            border: `2px solid ${
              isFavorite ? theme.palette.error.main : "white"
            }`,
            "&:hover": {
              backgroundColor: backgroundColor ?? "initial",
            },
          }),
        ]}
        id={`favorite-btn-${anime.mal_id}`}
      >
        <FavoriteBorderIcon
          color="error"
          sx={{
            ...style.baseIcon,
            opacity: isFavorite ? 0 : 1,
            color: "white",
          }}
        />
        <FavoriteIcon
          color="error"
          sx={{ ...style.baseIcon, opacity: isFavorite ? 1 : 0 }}
        />
      </IconButton>
      <Suspense fallback={<></>}>
        <Dialog
          title={`Remove ${anime.title}`}
          open={open}
          content={`Do you wish to remove ${anime.title} from favorite list?.`}
          handleClose={handleToggleDialog}
          closeText="No"
          actionBtn={
            <Button
              onClick={handleToggleAnime}
              sx={(theme) => ({
                bgcolor: "error.main",
                border: `1px solid ${theme.palette.error.main}`,
                "&:hover": {
                  bgcolor: "error.main",
                  border: `1px solid ${theme.palette.error.main}`,
                },
              })}
            >
              Yes
            </Button>
          }
          key={`dialog-${anime.mal_id}`}
          maxWidth="xs"
        />
      </Suspense>
    </>
  );
};

export default FavoriteButton;
