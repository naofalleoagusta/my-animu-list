import { ThemeProvider } from "@mui/material";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { SnackbarProvider } from "notistack";

import FavoriteAnimeList from "./FavoriteAnimeList";
import FavoriteButton from "../../FavoriteButton";

import theme from "@/config/theme";

global.console.log = jest.fn();

const toggleDrawer = () => {
  console.log("toggled");
};

const anime = {
  images: {
    jpg: {
      image_url: "https://cdn.myanimelist.net/images/anime/1764/126627.jpg",
      small_image_url:
        "https://cdn.myanimelist.net/images/anime/1764/126627t.jpg",
      large_image_url:
        "https://cdn.myanimelist.net/images/anime/1764/126627l.jpg",
    },
    webp: {
      image_url: "https://cdn.myanimelist.net/images/anime/1764/126627.webp",
      small_image_url:
        "https://cdn.myanimelist.net/images/anime/1764/126627t.webp",
      large_image_url:
        "https://cdn.myanimelist.net/images/anime/1764/126627l.webp",
    },
  },
  title: "Bleach: Sennen Kessen-hen",
  mal_id: 41467,
  score: 9.11,
};

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe("FavoriteAnimeList Test", () => {
  beforeEach(async () => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");

    useRouter.mockImplementation(() => ({
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    }));
  });
  it("renders EmptyFavoriteList", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <FavoriteAnimeList toggleDrawer={toggleDrawer} />
      </ThemeProvider>
    );
    const noFavoriteText = getByText(
      "You have not set any favorite animes, yet."
    );
    expect(noFavoriteText).toBeInTheDocument();
  });
  it("renders Drawer", () => {
    const { getByRole, getByText } = render(
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={3000}
          anchorOrigin={{
            horizontal: "right",
            vertical: "bottom",
          }}
        >
          <FavoriteAnimeList toggleDrawer={toggleDrawer} />
          <FavoriteButton anime={anime} />
        </SnackbarProvider>
      </ThemeProvider>
    );
    const noFavoriteText = getByText(
      "You have not set any favorite animes, yet."
    );
    expect(noFavoriteText).toBeInTheDocument();

    const favBtn = getByRole("button", {
      name: `Favorite Button ${anime.title}`,
    });
    fireEvent.click(favBtn);
    waitFor(() => {
      expect(noFavoriteText).not.toBeInTheDocument();
      const img = getByRole("img");
      expect(img).toBeInTheDocument();
      const animeTitle = getByText(anime.title);
      expect(animeTitle).toBeInTheDocument();
      const btnDetail = getByRole("button", {
        name: "View Detail Button",
      });
      expect(btnDetail).toBeInTheDocument();
    });
  });
});
