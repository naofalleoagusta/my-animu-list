import { useMemo } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

import useFavorites from "../../../helpers/hooks/useFavorites";

import { FavoriteAnimeType, StyleType } from "../../../types";

type FavoriteButtonProps = {
  anime: FavoriteAnimeType;
  backgroundColor?: string;
  callback?: () => void;
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

const FavoriteButton = ({
  anime,
  backgroundColor,
  callback,
}: FavoriteButtonProps) => {
  const {
    animes: favoriteAnimes,
    addAnime,
    removeAnime,
  } = useFavorites((state) => state);

  const isFavorite = useMemo(() => {
    return !!favoriteAnimes.find((dtAnime) => {
      return dtAnime.mal_id === anime.mal_id;
    });
  }, [favoriteAnimes, anime.mal_id]);

  const toggle = () => {
    if (isFavorite) {
      removeAnime(anime.mal_id);
    } else {
      addAnime(anime);
    }
  };

  const handleOnClick = () => {
    if (callback) {
      return;
    }
    toggle();
  };

  return (
    <IconButton
      onClick={handleOnClick}
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
  );
};

export default FavoriteButton;
