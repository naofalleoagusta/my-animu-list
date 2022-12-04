import { Box, Grid, styled, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import Chip from "../../../../ui_pallette/Chip";
import Image from "../../../../ui_pallette/Image";

import formatDate from "../../../../../helpers/formatDate";

import { AnimeType } from "../../../../../types/anime";
import style from "../style";
import Link from "../../../../ui_pallette/Link";
import Button from "../../../../ui_pallette/Button";

type BannerCardProps = {
  anime: AnimeType;
};

const SImage = styled(Image)(() => ({
  height: "auto",
  width: "100%",
  objectFit: "cover",
}));

const BannerCard = ({ anime }: BannerCardProps) => {
  return (
    <Grid
      sx={style.bannerContainer}
      container
      flexWrap="nowrap"
      flexDirection="row"
    >
      <Grid item sx={style.imageBannerContainer}>
        <SImage
          src={anime.images.webp.large_image_url}
          alt={anime.title}
          blurDataURL={anime.images.webp.small_image_url}
          width={300}
          height={446}
          keyValue={`${anime.mal_id}`}
        />
      </Grid>
      <Grid item sx={style.contentBannerContainer}>
        <Box sx={style.contentBannerWrapper}>
          <Box
            sx={{
              backgroundColor: "rgba(0,0,0,0.3)",
              p: { xs: "12px", sm: "18px", md: "24px" },
              height: "100%",
              borderRadius: "8px",
            }}
          >
            <Box sx={style.chipWrapper}>
              <Chip label={anime.type} />
              <Chip label={anime.status} />
              <Chip label={`Source : ${anime.source}`} sx={style.lastChip} />
            </Box>
            <Typography variant="h1" sx={style.title}>
              {anime.title}
            </Typography>
            <Typography sx={style.synopsis}>{anime.synopsis}</Typography>
            <Link href={`/anime/${anime.mal_id}`} sx={{ width: "fit-content" }}>
              <Button
                id={`${anime.mal_id}-banner-btn`}
                ariaLabel={`${anime.title} Detail Button`}
                sx={{
                  width: { xs: "100px", sm: "130px", md: "200px" },
                }}
              >
                View Detail
              </Button>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BannerCard;
