import { ThemeProvider } from "@mui/material";
import { fireEvent, render, screen } from "@testing-library/react";
import theme from "@/config/theme";
import AnimeCard, { AnimeCardProps } from ".";

const anime: AnimeCardProps = {
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
  imageKey: "https://cdn.myanimelist.net/images/anime/1764/126627.webp",
  mal_id: 41467,
  score: 9.11,
  scored_by: 81822,
};

const splittedScore = [9, 11];

describe("AnimeCard", () => {
  it("renders an AnimeCard", () => {
    render(
      <ThemeProvider theme={theme}>
        <AnimeCard {...anime} />
      </ThemeProvider>
    );

    const title = screen.getByRole("heading", {
      name: anime.title,
    });
    expect(title).toBeInTheDocument();

    const img = screen.getByAltText(`${anime.title} alt`);
    expect(img).toBeInTheDocument();
    expect(img.getAttribute("src")).toBe(
      "/_next/image?url=https%3A%2F%2Fcdn.myanimelist.net%2Fimages%2Fanime%2F1764%2F126627.webp&w=640&q=100"
    );

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link.getAttribute("href")).toBe(`/anime/${anime.mal_id}`);

    const score = screen.getByText(`${splittedScore[0]}`);
    expect(score).toBeInTheDocument();

    const smallScore = screen.getByText(`.${splittedScore[1]}`);
    expect(smallScore).toBeInTheDocument();
  });
});
