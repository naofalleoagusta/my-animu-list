import { Box, Grid, Typography } from "@mui/material";

import Image from "../ui_pallette/Image";
import Link from "../ui_pallette/Link";
import ScoreCard from "../ScoreCard";

import { AnimeType } from "../../types/anime";
import { StyleType } from "../../types/general";

const style: StyleType = {
  root: {
    flexBasis: {
      xs: "247px",
      lg: "20%",
    },
    height: {
      lg: "318px",
      xs: "350px",
    },
    maxWidth: {
      xs: "247px",
      lg: "20%",
    },
    flexShrink: {
      xs: 0,
      lg: "unset",
    },
    padding: "8px",
    overflow: "hidden",
    display: "flex",
  },
  container: [
    {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      borderRadius: "10px",
      padding: "4px",
      transition: "all 300ms ease-in-out",
    },
    (theme) => ({
      "&:hover": {
        scale: "105%",
        backgroundColor: theme.palette.primary.main,
        zIndex: 10,
        "& .scoreContainer": {
          opacity: 1,
        },
        "& .titleContainer": {
          bottom: "0px",
        },
      },
      "& >img": {
        height: "100% !important",
        width: "100% !important",
        borderRadius: "6px",
      },
    }),
  ],
  scoreContainer: {
    position: "absolute",
    opacity: { xs: 1, lg: 0 },
    top: "14px",
    left: "14px",
    transition: "all 300ms ease-in-out",
  },
  titleContainer: {
    width: "calc(100% - 8px)",
    position: "absolute",
    minWidth: 0,
    height: "auto",

    bottom: { xs: "0px", lg: "-100px" },
    bgcolor: "primary.main",
    transition: "all 300ms ease-in-out",
    padding: "12px 18px",
  },
  title: {
    fontWeight: 700,
    fontSize: "16px",
    wordBreak: "break-all",
    letterSpacing: "0px",
    color: "white",
  },
};

type AnimeCardProps = Pick<
  AnimeType,
  "images" | "mal_id" | "score" | "scored_by" | "title"
>;

const AnimeCard = ({
  images,
  mal_id,
  score,
  scored_by,
  title,
}: AnimeCardProps) => {
  return (
    <Grid item sx={style.root}>
      <Link sx={style.container} href={`/anime/${mal_id}`}>
        <Image
          src={images.webp.image_url}
          alt={`${title} alt`}
          blurDataURL={images.webp.small_image_url}
          height={318}
          width={225}
        />
        {!!score && !!scored_by && (
          <Box sx={style.scoreContainer} className="scoreContainer">
            <ScoreCard score={score} scored_by={scored_by} />
          </Box>
        )}
        <Box sx={style.titleContainer} className="titleContainer">
          <Typography variant="h2" sx={style.title}>
            {title}
          </Typography>
        </Box>
      </Link>
    </Grid>
  );
};

export default AnimeCard;
