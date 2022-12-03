import { useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid";

import Error from "../../ui_pallette/Error";
import AnimeCard from "../../AnimeCard";
import ListAnimeSkeleton from "./ListAnimeSkeleton";
import Pagination from "../../Pagination";

import useAnimes from "../../../helpers/hooks/useAnimes";
import { camelize } from "../../../helpers/camelize";
import scrollToView from "../../../helpers/scrollToView";

import { AnimeInputType } from "../../../schema";
import { StyleType } from "../../../types";
import { PaginationType } from "../../../types/anime";
import { Typography } from "@mui/material";

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
  paginationContainer: {
    display: "flex",
    columnGap: "6px",
    justifyContent: "flex-end",
  },
  pagination: {
    marginTop: "8px",
  },
  title: {
    marginBottom: "4px",
    fontSize: {
      xs: "20px",
      sm: "32px",
    },
  },
};

type ControllableListProps = {
  param: AnimeInputType;
  title: string;
};

const ControllableList = ({ param, title }: ControllableListProps) => {
  const animeListRef = useRef<HTMLDivElement>(null);

  const [queryParam, setQueryParam] = useState<AnimeInputType>(param);
  const { animes, error, loading } = useAnimes(queryParam);
  const [pagination, setPagination] = useState<PaginationType>();

  useEffect(() => {
    if (!pagination && animes) {
      setPagination(animes.pagination);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animes]);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setQueryParam((prev) => ({ ...prev, page: `${value}` }));
    if (animeListRef?.current) {
      animeListRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
    scrollToView(`${camelize(title)}-list-anime`);
  };

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Typography variant="h2" sx={style.title}>
        {title}
      </Typography>
      <Grid ref={animeListRef} container sx={style.animeList}>
        {animes && !loading ? (
          animes?.data?.map((dtAnime, idx) => (
            <AnimeCard {...dtAnime} key={idx} />
          ))
        ) : (
          <ListAnimeSkeleton />
        )}
      </Grid>
      {pagination && (
        <Pagination
          count={Math.ceil(
            pagination.items.total / parseInt(queryParam.limit || "1")
          )}
          page={parseInt(queryParam.page || "1")}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default ControllableList;
