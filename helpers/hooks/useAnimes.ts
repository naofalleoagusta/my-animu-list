import useFetch from "./useFetch";
import generateQueryParam from "../generateQueryParam";

import { AnimeInputType } from "../../schema";
import { AnimesResType } from "../../types/anime";

const useAnimes = (param?: AnimeInputType) => {
  const { data, error, loading } = useFetch<AnimesResType>(
    `/api/animes${generateQueryParam(param)}`,
    "animes"
  );

  return { animes:data, error, loading };
};

export default useAnimes;
