import { Box, Typography } from "@mui/material";
import FavoriteList from "../components/favorite/components/FavoriteList";
import UpperBanner from "../components/ui_pallette/UpperBanner";
import PageLayout from "../layouts/PageLayout";

const BANNER = "https://cdn.myanimelist.net/images/anime/1764/126627.jpg";

export default function Favorite() {
  return (
    <PageLayout
      banner={<UpperBanner image={BANNER} />}
      title="Favorite | My Animu List"
      description="Favorite Page"
    >
      <Box
        sx={{
          transform: { xs: "translateY(-150px)", lg: "translateY(-130px)" },
          paddingRight: {
            xs: "16px",
            sm: "24px",
            md: "0",
          },
          minHeight: { xs: "calc(70vh - 250px)", sm: "calc(72.125vh - 300px)" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            p: "24px 0",
            fontSize: { xs: "32px", md: "48px" },
            color: "white",
          }}
        >
          Your Favorite Anime
        </Typography>
        <FavoriteList />
      </Box>
    </PageLayout>
  );
}
