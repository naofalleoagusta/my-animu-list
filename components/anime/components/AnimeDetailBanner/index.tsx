import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Image from "@/ui_pallette/Image";
import Label from "./components/Label";
import Button from "@/ui_pallette/Button";
import ScoreCard from "@/ui_pallette/ScoreCard";

import formatDate from "@/helpers/formatDate";

import { AnimeType } from "@/types/anime";
import { StyleType } from "@/types/index";
import { LABEL_FIRST_ROW, LABEL_SECOND_ROW, LABEL_STATS } from "./constant";
import UpperBanner from "@/ui_pallette/UpperBanner";

type AnimeDetailBanner = {
  anime: AnimeType;
};

const FavoriteButton = dynamic(
  () => import("@/ui_pallette/FavoriteButton"),
  {
    ssr: false,
  }
);

const style: StyleType = {
  lowerBanner: {
    bgcolor: "primary.main",
    height: { xs: "auto", md: "370px" },
  },
  lowerBannerContainer: {
    transform: { xs: "translateY(-120px)", sm: "translateY(-150px)" },
  },
  gridContainer: {
    alignItems: "flex-end",
    flexWrap: { xs: "wrap", md: "noWrap" },
  },
  imageContainer: () => ({
    flexBasis: { xs: "180px", md: "225px" },
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
      md: "24px 0 0 24px",
    },
    gap: "4px",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "nowrap",
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
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <>
      <UpperBanner image={anime.images.webp.large_image_url} />
      <Box sx={style.lowerBanner}>
        <Container maxWidth="lg" sx={style.lowerBannerContainer}>
          <Grid container flexDirection="row" sx={style.gridContainer}>
            <Grid item sx={style.imageContainer}>
              <Image
                src={anime.images.webp.image_url}
                alt={`${anime.title} alt`}
                height={318}
                width={225}
                keyValue={anime.images.webp.image_url}
              />
            </Grid>
            <Grid item sx={style.contentContainer}>
              <Button
                onClick={handleGoBack}
                sx={(theme) => ({
                  mb: "8px",
                  mt: { xs: "8px", sm: "0" },
                  bgcolor: "secondary.main",
                  borderColor: theme.palette.secondary.main,
                })}
                key={`detail-${anime.mal_id}`}
                ariaLabel="Back Button"
              >
                <ArrowBackIcon fontSize="small" /> Go Back ?
              </Button>
              <Box sx={style.titleContainer}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h1" sx={style.title}>
                    {anime.title}
                  </Typography>
                  <Typography variant="h2" sx={style.synopsisTitle}>
                    {anime.aired.prop.from.year}
                  </Typography>
                </Box>
                <Box sx={{ flexShrink: 0 }}>
                  <FavoriteButton
                    anime={{
                      mal_id: anime.mal_id,
                      score: anime.score,
                      title: anime.title,
                      images: anime.images,
                    }}
                  />
                </Box>
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
                  {LABEL_STATS.map((dtLabel, idx) => (
                    <Label
                      label={dtLabel.label}
                      value={
                        Array.isArray(anime?.[dtLabel.key])
                          ? anime[dtLabel.key]
                          : `${anime?.[dtLabel.key] || "Unknown"}`
                      }
                      key={idx}
                    />
                  ))}
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
              sx={{
                borderRadius: "10px",
                border: `2px solid white`,
                flexGrow: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: { xs: "4px 12px", md: "14px" },
                  borderBottom: `2px solid white`,
                  padding: "6px 16px",
                  alignItems: "center",
                }}
              >
                {LABEL_FIRST_ROW.map((dtLabel, idx) => (
                  <Label
                    label={dtLabel.label}
                    value={
                      Array.isArray(anime?.[dtLabel.key])
                        ? anime[dtLabel.key]
                        : `${anime?.[dtLabel.key] || "Unknown"}`
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
                  padding: "6px 16px",
                })}
              >
                <Label
                  label="Aired"
                  value={`${
                    anime.aired.from ? formatDate(anime.aired.from, true) : "?"
                  } to ${
                    anime.aired.to ? formatDate(anime.aired.to, true) : "?"
                  }`}
                />

                {LABEL_SECOND_ROW.map((dtLabel, idx) => (
                  <Label
                    label={dtLabel.label}
                    value={
                      Array.isArray(anime?.[dtLabel.key])
                        ? anime[dtLabel.key]
                        : `${anime?.[dtLabel.key] || "Unknown"}`
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
