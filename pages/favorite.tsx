import { Typography } from "@mui/material";
import FavoriteList from "../components/favorite/components/FavoriteList";
import UpperBanner from "../components/ui_pallette/UpperBanner";
import PageLayout from "../layouts/PageLayout";

const BANNER = "https://cdn.myanimelist.net/images/anime/1764/126627.jpg";

export default function AnimeDetail() {
  return (
    <PageLayout
      banner={<UpperBanner image={BANNER} />}
      wrapBannerWithContainer={false}
      title="Favorite | My Animu List"
    >
      <Typography
        variant="h1"
        sx={{ p: "24px 0", fontSize: { xs: "32px", md: "48px" } }}
      >
        Your Favorite Anime
      </Typography>
      <FavoriteList />
    </PageLayout>
  );
}
