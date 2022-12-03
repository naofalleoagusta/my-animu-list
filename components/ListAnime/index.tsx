import { Box, Grid, Typography } from "@mui/material";

import AnimeCard from "../AnimeCard";
import ControllableList from "./components/ControllableList";

import { camelize } from "../../helpers/camelize";

import { AnimeInputType } from "../../schema";
import { StyleType } from "../../types";
import { AnimeRecommendationType } from "../../types/anime";

type ListAnimeProps = {
  param?: AnimeInputType;
  title: string;
  recommendations?: AnimeRecommendationType[];
};

const style: StyleType = {
  animeList: {
    flexDirection: "row",
    overflow: {
      xs: "auto",
      md: "hidden",
    },
    flexWrap: {
      xs: "nowrap",
      md: "wrap",
    },
  },
};

const ListAnime = ({ param, title, recommendations }: ListAnimeProps) => {
  return (
    <Box id={`${camelize(title)}-list-anime`}>
      {!recommendations && !!param ? (
        <ControllableList title={title} param={param} />
      ) : (
        <Grid container sx={style.animeList}>
          {!!recommendations?.length ? (
            recommendations?.map((dtAnime) => (
              <AnimeCard
                {...dtAnime}
                score={null}
                scored_by={null}
                key={`${dtAnime.mal_id}`}
                imageKey={`${dtAnime.mal_id}`}
              />
            ))
          ) : (
            <Typography
              variant="h2"
              sx={{
                p: "12px",
              }}
            >
              No recommendations has been made for this title. 😢
            </Typography>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default ListAnime;
