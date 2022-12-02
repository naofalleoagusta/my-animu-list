import create from "zustand";
import { persist, devtools } from "zustand/middleware";

import { FavoriteAnimeType } from "../../types";

const KEY = "favoriteAnimes";

type UseFavoritesType = {
  animes: FavoriteAnimeType[];
  addAnime: (anime: FavoriteAnimeType) => void;
  removeAnime: (id: number) => void;
};

const useFavorites = create<UseFavoritesType>()(
  devtools(
    persist(
      (set) => ({
        animes: [],
        addAnime: (anime) =>
          set((state) => ({
            animes: [...state.animes, anime],
          })),
        removeAnime: (id) => {
          set((state) => ({
            animes: state.animes.filter((dtAnime) => dtAnime.mal_id !== id),
          }));
        },
      }),
      { name: KEY }
    )
  )
);

export default useFavorites;
