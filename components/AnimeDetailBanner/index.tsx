import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";

import Image from "../ui_pallette/Image";

import { AnimeType } from "../../types/anime";
import { StyleType } from "../../types";
type AnimeDetailBanner = {
  anime: AnimeType;
};

const FavoriteButton = dynamic(() => import("../FavoriteButton"), {
  ssr: false,
});

const style: StyleType = {
  upperBanner: {
    width: "100%",
    height: { xs: "150px", sm: "300px" },
    backgroundRepeat: "no-repeat",
    bacgkroundPosition: "center center",
    backgroundSize: "cover",
    filter: "sepia(100%) hue-rotate(180deg) saturate(300%);",
  },
  lowerBanner: {
    bgcolor: "primary.main",
  },
  lowerBannerContainer: {
    transform: "translateY(-150px)",
  },
  gridContainer: {
    alignItems: "flex-end",
  },
  imageContainer: () => ({
    flexBasis: { lg: "225px" },
    flexShrink: 0,
    "& img": {
      width: "100% !important",
      height: "auto !important",
      borderRadius: "10px",
    },
  }),
  contentContainer: {
    flexGrow: 1,
    padding: {
      lg: "24px",
    },
    gap: "4px",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontSize: {
      lg: "32px",
    },
  },
};
const AnimeDetailBanner = ({ anime }: AnimeDetailBanner) => {
  return (
    <>
      <Box
        sx={{
          ...style.upperBanner,
          backgroundImage: `url('${anime.images.webp.large_image_url}')`,
        }}
      />
      <Box sx={style.lowerBanner}>
        <Container maxWidth="lg" sx={style.lowerBannerContainer}>
          <Grid container flexDirection="row" sx={style.gridContainer}>
            <Grid item sx={style.imageContainer}>
              <Image
                src={anime.images.webp.image_url}
                alt={`${anime.title} alt`}
                height={318}
                width={225}
              />
            </Grid>
            <Grid item sx={style.contentContainer}>
              <Box sx={style.titleContainer}>
                <Typography variant="h1" sx={style.title}>
                  {anime.title}
                </Typography>
                <FavoriteButton
                  anime={{
                    mal_id: anime.mal_id,
                    score: anime.score,
                    title: anime.title,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AnimeDetailBanner;
