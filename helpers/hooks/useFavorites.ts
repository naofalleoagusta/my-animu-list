import { useEffect, useState } from "react";
import create from "zustand";
import { persist } from "zustand/middleware";

import { FavoriteAnimeType } from "../../types";

const KEY = "favoriteAnimes";

const EMPTY_STATE = {
  animes: [],
  addAnime: () => {
    return;
  },
  removeAnime: () => {
    return;
  },
};

type UseFavoritesType = {
  animes: FavoriteAnimeType[];
  addAnime: (anime: FavoriteAnimeType) => void;
  removeAnime: (id: number) => void;
};

const useFavorites = create<UseFavoritesType>()(
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
);

const useHydratedFavorites = ((selector) => {
  const store = useFavorites(selector);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  console.log(hydrated ? store : selector(EMPTY_STATE));
  return hydrated ? store : selector(EMPTY_STATE);
}) as typeof useFavorites;

export default useHydratedFavorites;
