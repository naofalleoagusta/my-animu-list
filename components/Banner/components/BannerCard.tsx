import {
  Box,
  Grid,
  styled,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import Chip from "../../Chip";
import Image from "../../Image";

import { AnimeType } from "../../../types/anime";
import formatDate from "../../../helpers/formatDate";

type BannerCardProps = {
  anime: AnimeType;
};

const SImage = styled(Image)(() => ({
  height: "auto",
  width: "100%",
  objectFit: "cover",
}));

const BannerCard = ({ anime }: BannerCardProps) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <Grid
      sx={{
        backgroundColor: "white",
        borderRadius: "15px",
        height: "100%",
      }}
      container
      flexWrap="nowrap"
      flexDirection="row"
    >
      <Grid
        item
        sx={{
          flexBasis: "60%",
          overflow: "hidden",
          borderRadius: "15px 0 0 15px",
          display: "flex",
          maxWidth: "60%",
          alignItems: "center",
          height: "100%",
        }}
      >
        <SImage
          src={anime.images.webp.large_image_url}
          alt={anime.title}
          blurDataURL={anime.images.webp.small_image_url}
          width={300}
          height={446}
        />
      </Grid>
      <Grid
        item
        sx={{
          flexBasis: "40%",
          maxWidth: "40%",
          padding: isMobile ? "12px" : "32px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            rowGap: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              columnGap: "6px",
              rowGap: "4px",
              flexWrap: "wrap",
            }}
          >
            <Chip label={anime.type} />
            <Chip label={anime.status} />
            {!isMobile && (
              <>
                <Chip label={`Source : ${anime.source}`} />
              </>
            )}
          </Box>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: "54px",
              ...(isMobile && {
                fontSize: "16px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                wordBreak: "break-all",
                display: "-webkit-box",
                "-webkit-line-clamp": "2",
                "-webkit-box-orient": "vertical",
              }),
            }}
          >
            {anime.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              columnGap: isMobile ? "5px" : "10px",
              alignItems: "center",
            }}
          >
            <CalendarMonthIcon
              fontSize="small"
              sx={{ fontSize: isMobile ? "12px" : "inherit" }}
              color="secondary"
            />
            <Typography
              variant="caption"
              sx={{
                paddingTop: "3px",
                fontSize: isMobile ? "9px" : "14px",
                fontWeight: 600,
              }}
            >
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
