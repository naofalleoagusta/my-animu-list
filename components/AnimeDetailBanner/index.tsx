import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";

import Image from "../ui_pallette/Image";
import Label from "./components/Label";

import { AnimeType } from "../../types/anime";
import { StyleType } from "../../types";
import ScoreCard from "../ScoreCard";
import { LABEL_FIRST_ROW, LABEL_SECOND_ROW } from "./constant";
import formatDate from "../../helpers/formatDate";

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
    filter:
      "blur(4px) sepia(100%) hue-rotate(185deg) saturate(300%)  brightness(70%)",
    transform: `scale(1.05)`,
  },
  lowerBanner: {
    bgcolor: "primary.main",
  },
  lowerBannerContainer: {
    transform: { xs: "translateY(-50px)", sm: "translateY(-150px)" },
  },
  gridContainer: {
    alignItems: "flex-end",
    flexWrap: { xs: "wrap", md: "noWrap" },
  },
  imageContainer: () => ({
    flexBasis: "225px",
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
      md: "24px 0 24px 24px",
    },
    gap: "4px",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: { xs: "wrap", sm: "noWrap" },
    gap: "8px",
  },
  title: {
    color: "white",
    fontSize: {
      xs: "24px",
      lg: "32px",
    },
  },
  synopsisTitle: {
    color: "white",
    fontWeight: 700,
    fontSize: {
      xs: "16px",
      lg: "20px",
    },
  },
  synopsisText: {
    color: "white",
    marginTop: "12px",
    wordBreak: "break-all",
    fontSize: {
      lg: "14px",
    },
  },
};

const AnimeDetailBanner = ({ anime }: AnimeDetailBanner) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            ...style.upperBanner,
            backgroundImage: `url('${anime.images.webp.large_image_url}')`,
          }}
        />
      </Box>
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
                <Box>
                  <Typography variant="h1" sx={style.title}>
                    {anime.title}
                  </Typography>
                  <Typography variant="h2" sx={style.synopsisTitle}>
                    {anime.aired.prop.from.year}
                  </Typography>
                </Box>
                <FavoriteButton
                  anime={{
                    mal_id: anime.mal_id,
                    score: anime.score,
                    title: anime.title,
                  }}
                />
              </Box>
              <Box
                sx={{
                  ...style.titleContainer,
                  marginTop: { xs: "10px", sm: "14px", lg: "24px" },
                }}
              >
                <Typography variant="h2" sx={style.synopsisTitle}>
                  Synopsis
                </Typography>
                <Box sx={style.titleContainer}>
                  <Label label="Ranked" value={`#${anime.rank || "-"}`} />
                  <Label
                    label="Popularity"
                    value={`#${anime.popularity || "-"}`}
                  />
                  <Label label="Members" value={`${anime.members}`} />
                </Box>
              </Box>
              <Typography variant="body2" sx={style.synopsisText}>
                {anime.synopsis}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            flexDirection="row"
            sx={{ marginTop: "16px", flexWrap: "nowrap", columnGap: "16px" }}
          >
            <Grid item sx={{ flexShrink: 0 }}>
              <ScoreCard
                score={anime.score}
                scored_by={anime.scored_by}
                size="large"
              />
            </Grid>
            <Grid
              item
              sx={(theme) => ({
                borderRadius: "10px",
                border: `2px solid ${theme.palette.primary.dark}`,
                flexGrow: 1,
              })}
            >
              <Box
                sx={(theme) => ({
                  display: "flex",
                  flexWrap: "wrap",
                  gap: { xs: "4px 12px", md: "14px" },
                  borderBottom: `2px solid${theme.palette.primary.dark}`,
                  padding: "8px 16px",
                })}
              >
                {LABEL_FIRST_ROW.map((dtLabel, idx) => (
                  <Label
                    label={dtLabel.label}
                    value={
                      Array.isArray(anime?.[dtLabel.key])
                        ? anime[dtLabel.key]
                        : `${anime?.[dtLabel.key]}` || "-"
                    }
                    key={idx}
                  />
                ))}
              </Box>
              <Box
                sx={() => ({
                  display: "flex",
                  flexWrap: "wrap",
                  gap: { xs: "4px 12px", md: "14px" },
                  padding: "8px 16px",
                })}
              >
                <Label
                  label="Aired"
                  value={`${formatDate(anime.aired.from, true)} to ${
                    anime.aired.to ? formatDate(anime.aired.to, true) : "?"
                  }`}
                />

                {LABEL_SECOND_ROW.map((dtLabel, idx) => (
                  <Label
                    label={dtLabel.label}
                    value={
                      Array.isArray(anime?.[dtLabel.key])
                        ? anime[dtLabel.key]
                        : `${anime?.[dtLabel.key]}` || "-"
                    }
                    key={idx}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AnimeDetailBanner;