import Grid from "@mui/material/Grid";

import Skeleton from "../../Skeleton";

import { style } from "../../AnimeCard/AnimeCardStyle";

const ListAnimeSkeleton = () => {
  return (
    <>
      {[...Array(10)].map((_, idx) => (
        <Grid sx={style.root} key={idx}>
          <Skeleton height="100%" width="100%" />
        </Grid>
      ))}
    </>
  );
};

export default ListAnimeSkeleton;
