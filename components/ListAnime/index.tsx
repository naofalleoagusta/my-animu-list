import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

import Error from "../ui_pallette/Error";
import Skeleton from "../ui_pallette/Skeleton";
import AnimeCard from "../AnimeCard";

import useAnimes from "../../helpers/hooks/useAnimes";

import { AnimeInputType } from "../../schema";
import { StyleType } from "../../types/general";

type ListAnimeProps = {
  param: AnimeInputType;
  title: string;
};

const style: StyleType = {
  title: {
    marginBottom: "24px",
    fontSize: {
      xs: "20px",
      sm: "32px",
    },
  },
  animeList: {
    flexDirection: "row",
    overflow: {
      xs: "auto",
      lg: "hidden",
    },
    flexWrap: {
      xs: "nowrap",
      lg: "wrap",
    },
  },
};

const ListAnime = ({ param, title }: ListAnimeProps) => {
  const [queryParam, setQueryParam] = useState<AnimeInputType>(param);
  const { animes, error, loading } = useAnimes(queryParam);

  if (error) {
    return <Error />;
  }

  return (
    <Box>
      <Typography variant="h2" sx={style.title}>
        {title}
      </Typography>
      <Grid container sx={style.animeList}>
        {animes && !loading ? (
          animes?.data.map((dtAnime, idx) => (
            <AnimeCard {...dtAnime} key={idx} />
          ))
        ) : (
          <></>
        )}
      </Grid>
    </Box>
  );
};

export default ListAnime;
