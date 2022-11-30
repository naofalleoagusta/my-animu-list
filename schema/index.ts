import { z } from "zod";

export const AnimeStatusSchema = z.optional(
  z.enum(["airing", "complete", "upcoming"])
);
export const AnimeTypeScheme = z.optional(
  z.enum(["tv", "movie", "ova", "special", "ona", "music"])
);
export const AnimeRatingScheme = z.optional(z.enum(["g", "pg", "pg13", "r17"]));
export const AnimeOrderScheme = z.optional(
  z.enum([
    "mal_id",
    "title",
    "type",
    "rating",
    "start_date",
    "end_date",
    "episodes",
    "score",
    "scored_by",
    "rank",
    "popularity",
    "members",
    "favorites",
  ])
);
export const AnimeSortScheme = z.optional(z.enum(["desc", "asc"]));

const StringNumberSchema = z.string().transform((val, ctx) => {
  const parsed = parseInt(val);
  if (isNaN(parsed)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Not a number",
    });
    return z.NEVER;
  }
  return val;
});

const StringDateSchema = z.string().transform((val, ctx) => {
  const parsed = new Date(val);
  if (isNaN(parsed.getTime())) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Not a date!",
    });
    return z.NEVER;
  }
  return val;
});

export const AnimesInputSchema = z.object({
  page: z.optional(StringNumberSchema),
  limit: z.optional(StringNumberSchema),
  q: z.optional(z.string()),
  type: AnimeTypeScheme,
  score: z.optional(StringNumberSchema),
  min_score: z.optional(StringNumberSchema),
  max_score: z.optional(StringNumberSchema),
  status: AnimeStatusSchema,
  rating: AnimeRatingScheme,
  genres: z.optional(z.string()),
  genres_exclude: z.optional(z.string()),
  order: AnimeOrderScheme,
  sort: AnimeSortScheme,
  letter: z.optional(z.string()),
  producers: z.optional(z.string()),
  start_date: z.optional(StringDateSchema),
  end_date: z.optional(StringDateSchema),
});

export type AnimeInputType = z.infer<typeof AnimesInputSchema>;
