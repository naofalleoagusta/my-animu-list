import { Box, Grid, Typography } from "@mui/material";
import isEqual from "lodash.isequal";
import { memo, useEffect, useRef } from "react";

import AnimeCard from "../AnimeCard";
import ListFetchedAnime from "./components/ListFetchedAnime";

import camelize from "@/helpers/camelize";

import { AnimeInputType } from "@/schema/index";
import { StyleType } from "@/types/index";
import { AnimeRecommendationType } from "@/types/anime";

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
  const animeListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animeListRef?.current) {
      animeListRef.current.scrollLeft = 0;
    }
  }, [recommendations]);

  return (
    <Box id={`${camelize(title)}-list-anime`}>
      {!recommendations && !!param ? (
        <ListFetchedAnime title={title} param={param} />
      ) : (
        <Grid container sx={style.animeList} ref={animeListRef}>
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

export default memo(ListAnime, (prevProps, nextProps) =>
  isEqual(prevProps, nextProps)
);
