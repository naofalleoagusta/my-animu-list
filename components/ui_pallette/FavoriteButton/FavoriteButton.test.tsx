import { ThemeProvider } from "@mui/material";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { SnackbarProvider } from "notistack";

import theme from "@/config/theme";

import FavoriteButton from ".";

import { FavoriteAnimeType } from "@/types/index";

const anime: FavoriteAnimeType = {
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

describe("FavoriteButton Test", () => {
  it("renders a FavoriteButton", async () => {
    render(
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={3000}
          anchorOrigin={{
            horizontal: "right",
            vertical: "bottom",
          }}
        >
          <FavoriteButton anime={anime} />
        </SnackbarProvider>
      </ThemeProvider>
    );
    await act(() => {
      const btn = screen.getByRole("button");
      expect(btn).toBeInTheDocument();
      expect(btn.getAttribute("id")).toBe(`favorite-btn-${anime.mal_id}`);
      expect(btn).toHaveStyle("border: 2px solid white");

      const favoriteBorderIcon = screen.getByTestId("FavoriteBorderIcon");
      expect(favoriteBorderIcon).toBeInTheDocument();
      expect(favoriteBorderIcon).toHaveStyle("opacity: 1");

      const favoriteIcon = screen.getByTestId("FavoriteIcon");
      expect(favoriteIcon).toBeInTheDocument();
      expect(favoriteIcon).toHaveStyle("opacity: 0");
    });
  });
  it("should render a render a red FavoriteIcon, when clicking white FavoriteButton", async () => {
    render(
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={3000}
          anchorOrigin={{
            horizontal: "right",
            vertical: "bottom",
          }}
        >
          <FavoriteButton anime={anime} />
        </SnackbarProvider>
      </ThemeProvider>
    );
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    expect(btn.getAttribute("id")).toBe(`favorite-btn-${anime.mal_id}`);
    expect(btn).toHaveStyle("border: 2px solid white");

    const favoriteBorderIcon = screen.getByTestId("FavoriteBorderIcon");
    expect(favoriteBorderIcon).toBeInTheDocument();
    expect(favoriteBorderIcon).toHaveStyle("opacity: 1");

    const favoriteIcon = screen.getByTestId("FavoriteIcon");
    expect(favoriteIcon).toBeInTheDocument();
    expect(favoriteIcon).toHaveStyle("opacity: 0");

    fireEvent.click(btn);
    expect(btn).toHaveStyle("border: 2px solid #ff1744");
    expect(favoriteBorderIcon).toHaveStyle("opacity: 0");
    expect(favoriteIcon).toHaveStyle("opacity: 1");
  });

  it("should render a Dialog, when clicking red FavoriteButton", async () => {
    render(
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={3000}
          anchorOrigin={{
            horizontal: "right",
            vertical: "bottom",
          }}
        >
          <FavoriteButton anime={anime} />
        </SnackbarProvider>
      </ThemeProvider>
    );
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    expect(btn.getAttribute("id")).toBe(`favorite-btn-${anime.mal_id}`);
    expect(btn).toHaveStyle("border: 2px solid #ff1744;");

    const favoriteBorderIcon = screen.getByTestId("FavoriteBorderIcon");

    const favoriteIcon = screen.getByTestId("FavoriteIcon");

    expect(favoriteBorderIcon).toHaveStyle("opacity: 0");
    expect(favoriteIcon).toHaveStyle("opacity: 1");
    act(() => {
      fireEvent.click(btn);
    });

    const heading = screen.getByRole("heading", {
      name: `Remove ${anime.title}`,
    });
    const desc = screen.getByText(
      `Do you wish to remove ${anime.title} from favorite list?.`
    );

    const btnNo = screen.getByRole("button", {
      name: "Dialog Close Button",
    });

    const btnYes = screen.getByRole("button", {
      name: "Yes Button",
    });

    expect(heading).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
    expect(btnYes).toBeInTheDocument();
    expect(btnNo).toBeInTheDocument();
  });
});
