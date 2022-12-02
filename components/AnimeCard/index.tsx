import { Box, Grid, Typography } from "@mui/material";

import Image from "../ui_pallette/Image";
import Link from "../ui_pallette/Link";
import ScoreCard from "../ScoreCard";

import { AnimeType } from "../../types/anime";
import { style } from "./AnimeCardStyle";


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
        {!!score && (
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
