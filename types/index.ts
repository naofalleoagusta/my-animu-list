import { SxProps, Theme } from "@mui/material";
import { AnimeInputType } from "../schema";

export type StyleType = Record<string, SxProps<Theme>>;

export type QueryListAnimeType = {
  title: string;
  param: AnimeInputType;
};
