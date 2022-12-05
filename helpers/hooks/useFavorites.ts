import { useEffect, useState } from "react";
import create from "zustand";
import { persist } from "zustand/middleware";

import { FavoriteAnimeType } from "../../types";

const KEY = "favoriteAnimes";

const EMPTY_STATE = {
  animes: {},
  addAnime: () => {
    return;
  },
  removeAnime: () => {
    return;
  },
  getAnimes: () => {
    return [];
  },
};

export type UseFavoritesType = {
  animes: Record<string, FavoriteAnimeType>;
  addAnime: (anime: FavoriteAnimeType) => void;
  removeAnime: (id: number) => void;
  getAnimes: () => FavoriteAnimeType[];
};

const useFavorites = create<UseFavoritesType>()(
  persist(
    (set, get) => ({
      animes: {},
      addAnime: (anime) =>
        set((state) => ({
          animes: { ...state.animes, [anime.mal_id]: anime },
        })),
      removeAnime: (id) => {
        set((state) => {
          if (state.animes[id]) {
            delete state.animes[id];
          }
          return {
            animes: state.animes,
          };
        });
      },
      getAnimes: () => {
        return Object.entries(get().animes).map((dtAnime) => dtAnime[1]);
      },
    }),
    { name: KEY }
  )
);

const useHydratedFavorites = ((selector) => {
  const store = useFavorites(selector);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated ? store : selector(EMPTY_STATE);
}) as typeof useFavorites;

export default useHydratedFavorites;
