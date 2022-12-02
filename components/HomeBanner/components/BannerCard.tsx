import { Box, Grid, styled, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import Chip from "../../ui_pallette/Chip";
import Image from "../../ui_pallette/Image";

import formatDate from "../../../helpers/formatDate";

import { AnimeType } from "../../../types/anime";
import style from "./style";

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
        />
      </Grid>
      <Grid item sx={style.contentBannerContainer}>
        <Box sx={style.contentBannerWrapper}>
          <Box sx={style.chipWrapper}>
            <Chip label={anime.type} />
            <Chip label={anime.status} />
            <Chip label={`Source : ${anime.source}`} sx={style.lastChip} />
          </Box>
          <Typography variant="h1" sx={style.title}>
            {anime.title}
          </Typography>
          <Box sx={style.dateWrapper}>
            <CalendarMonthIcon sx={style.calendarIcon} color="secondary" />
            <Typography variant="caption" sx={style.dateText}>
              {formatDate(anime.aired.from)}
              {!!anime.aired.to && ` - ${formatDate(anime.aired.to)}`}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BannerCard;
