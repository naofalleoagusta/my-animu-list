import { useMemo } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

import useFavorites from "../../helpers/hooks/useFavorites";

import { FavoriteAnimeType, StyleType } from "../../types";

type FavoriteButtonProps = { anime: FavoriteAnimeType };

const style: StyleType = {
  baseIcon: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    transition: "opacity 300ms ease-in-out",
  },
};

const FavoriteButton = ({ anime }: FavoriteButtonProps) => {
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

  const handleOnClick = () => {
    if (isFavorite) {
      removeAnime(anime.mal_id);
    } else {
      addAnime(anime);
    }
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
        },
        (theme) => ({
          border: `2px solid ${
            isFavorite ? theme.palette.error.main : "white"
          }`,
        }),
      ]}
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
