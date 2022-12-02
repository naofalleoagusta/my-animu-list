import { AnimeInputType } from "../../../schema";

export const ANIMES_QUERY_PARAM: AnimeInputType = {
  limit: "5",
  sort: "asc",
  start_date: `${new Date().getFullYear()}`,
  order_by: "rank",
  min_score: "8",
};
