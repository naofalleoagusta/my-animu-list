export type AnimesResType = {
  data: AnimeType[];
  pagination: PaginationType;
};

export type AnimeRecommendationResType = {
  data: Array<{ entry: AnimeRecommendationType }>;
};

export type AnimeRecommendationType = Pick<
  AnimeType,
  "mal_id" | "url" | "images" | "title"
>;

export type AnimeType = {
  mal_id: number;
  url: string;
  images: ImagesType;
  trailer: TrailerType;
  approved: boolean;
  titles: TitleType[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: AiredType;
  duration: string;
  rating: string;
  score: number | null;
  scored_by: number | null;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number | null;
  broadcast: BroadcastType;
  producers: DetailType[];
  licensors: DetailType[];
  studios: DetailType[];
  genres: DetailType[];
  explicit_genres: DetailType[];
  themes: DetailType[];
  demographics: DetailType[];
};

export type ImagesType = {
  jpg: DetailImage;
  webp: DetailImage;
};

export type DetailImage = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
};

export type TrailerType = {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: TrailerImageType;
};

export type TrailerImageType = {
  image_url: string;
  large_image_url: string;
  maximum_image_url: string;
  medium_image_url: string;
  small_image_url: string;
};

export type TitleType = {
  type: string;
  title: string;
};

export type AiredType = {
  from: string;
  to: string | null;
  prop: AiredPropType;
};

export type AiredPropType = {
  from: DetailAiredType;
  to: DetailAiredType;
  string: string;
};

export type DetailAiredType = {
  day: number | null;
  month: number | null;
  year: number | null;
};

export type DetailType = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type BroadcastType = {
  day: string;
  time: string;
  timezone: string;
  string: string;
};

export type PaginationType = {
  last_visible_page: number;
  has_next_page: boolean;
  items: ItemsType;
};

export type ItemsType = {
  count: number;
  total: number;
  per_page: number;
};
