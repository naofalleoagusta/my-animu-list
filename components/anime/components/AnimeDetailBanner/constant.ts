import { AnimeType } from "../../../../types/anime";

type LabelInfoType = {
  label: string;
  key: keyof AnimeType;
  extendedKey?: string;
};

export const LABEL_STATS: LabelInfoType[] = [
  {
    label: "Ranked",
    key: "rank",
  },
  {
    label: "Popularity",
    key: "popularity",
  },
  {
    label: "Members",
    key: "members",
  },
];

export const LABEL_FIRST_ROW: LabelInfoType[] = [
  {
    label: "Type",
    key: "type",
  },
  {
    label: "Episodes",
    key: "episodes",
  },
  {
    label: "Genres",
    key: "genres",
  },
  {
    label: "Status",
    key: "status",
  },
];

export const LABEL_SECOND_ROW: LabelInfoType[] = [
  {
    label: "Rating",
    key: "rating",
  },
  {
    label: "Favorites",
    key: "favorites",
  },
  {
    label: "Season",
    key: "season",
  },
  {
    label: "Duration",
    key: "duration",
  },
];
