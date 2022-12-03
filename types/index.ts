import { SxProps, Theme } from "@mui/material";
import { AnimeInputType } from "../schema";
import { AnimeType } from "./anime";

export type StyleType = Record<string, SxProps<Theme>>;

export type QueryListAnimeType = {
  title: string;
  param: AnimeInputType;
};

export type FavoriteAnimeType = Pick<
  AnimeType,
  "mal_id" | "title" | "score" | "images"
>;

export type MetaTagsType = Record<string, string>;
