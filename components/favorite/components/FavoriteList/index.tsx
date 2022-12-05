import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid from "@mui/material/Grid";

import useFavorites, { UseFavoritesType } from "@/helpers/hooks/useFavorites";
import Button from "@/ui_pallette/Button";
import Link from "@/ui_pallette/Link";
import FavoriteCard from "../FavoriteCard";

const selector = (state: UseFavoritesType) => state.getAnimes();

const FavoriteList = () => {
  const animes = useFavorites(selector);
  if (!animes.length) {
    return (
      <>
        <Typography variant="h2" sx={{ mt: { xs: "86px", md: "58px" } }}>
          You have not set any favorite anime, yet.
        </Typography>
        <Link href="/">
          <Button variant="outlined" id="go-back-home-btn" sx={{ mt: "12px" }}>
            Browse Anime{" "}
            <ArrowForwardIcon fontSize="small" sx={{ ml: "4px" }} />
          </Button>
        </Link>
      </>
    );
  }
  return (
    <Grid container spacing={2}>
      {animes.map((dtAnime) => (
        <FavoriteCard anime={dtAnime} key={dtAnime.mal_id} />
      ))}
    </Grid>
  );
};

export default FavoriteList;
