import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { memo } from "react";
import { styled } from "@mui/material";

import Image from "../../../ui_pallette/Image";
import Link from "../../../ui_pallette/Link";
import ScoreCard from "../../../ui_pallette/ScoreCard";
import Button from "../../../ui_pallette/Button";
import FavoriteButton from "../../../ui_pallette/FavoriteButton";

import { FavoriteAnimeType } from "../../../../types";
import { style } from "../../../ui_pallette/AnimeCard/AnimeCardStyle";

type FavoriteCardProps = {
  anime: FavoriteAnimeType;
};

const SLink = styled(Link)(() => ({
  bottom: "16px",
  width: "calc(100% - 32px)",
  position: "absolute",
}));

const FavoriteCard = ({ anime }: FavoriteCardProps) => {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Box
        sx={() => ({
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          borderRadius: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          position: "relative",
          transition: "all 300ms ease-in-out",
        })}
      >
        <Box
          sx={() => ({
            overflow: "hidden",
            display: "flex",
            flexBasis: { xs: "120px", md: "165px" },
            flexShrink: 0,
            alignItems: "center",
            borderRadius: "10px 0 0 10px",
            height: "170px",
          })}
        >
          <Image
            src={anime.images.webp.image_url}
            alt={`${anime.title} alt`}
            height={318}
            width={225}
            keyValue={anime.images.webp.image_url}
          />
        </Box>
        <Box sx={{ p: "16px", flexGrow: 1, position: "relative" }}>
          <Typography
            variant="h2"
            sx={{
              ...style.title,
              color: "black",
              letterSpacing: "-0.5px",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            {anime.title}
          </Typography>
          <SLink href={`/anime/${anime.mal_id}`}>
            <Button fullWidth variant="outlined">
              Detail
            </Button>
          </SLink>
        </Box>
        <Box sx={{ position: "absolute", top: 8, left: 8 }}>
          <ScoreCard score={anime.score} scored_by={null} />
        </Box>
        <Box sx={{ position: "absolute", bottom: 8, left: 8 }}>
          <FavoriteButton anime={anime} backgroundColor="white" />
        </Box>
      </Box>
    </Grid>
  );
};

export default memo(FavoriteCard);
