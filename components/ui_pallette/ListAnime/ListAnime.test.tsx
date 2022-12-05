import { ThemeProvider } from "@mui/material";
import { render, screen } from "@testing-library/react";

import ListAnime from ".";

import { QueryListAnimeType } from "@/types/index";
import theme from "@/config/theme";

const query: QueryListAnimeType = {
  title: "Top Airing Anime",
  param: {
    limit: "10",
    status: "airing",
    order_by: "score",
    sort: "desc",
    min_score: "5",
  },
};

const recommendations = [
  {
    mal_id: 34572,
    url: "https://myanimelist.net/anime/34572/Black_Clover",
    images: {
      jpg: {
        image_url:
          "https://cdn.myanimelist.net/images/anime/2/88336.jpg?s=91adfb36d2c14c84ca2bd10489cdaad8",
        small_image_url:
          "https://cdn.myanimelist.net/images/anime/2/88336t.jpg?s=91adfb36d2c14c84ca2bd10489cdaad8",
        large_image_url:
          "https://cdn.myanimelist.net/images/anime/2/88336l.jpg?s=91adfb36d2c14c84ca2bd10489cdaad8",
      },
      webp: {
        image_url:
          "https://cdn.myanimelist.net/images/anime/2/88336.webp?s=91adfb36d2c14c84ca2bd10489cdaad8",
        small_image_url:
          "https://cdn.myanimelist.net/images/anime/2/88336t.webp?s=91adfb36d2c14c84ca2bd10489cdaad8",
        large_image_url:
          "https://cdn.myanimelist.net/images/anime/2/88336l.webp?s=91adfb36d2c14c84ca2bd10489cdaad8",
      },
    },
    title: "Black Clover",
  },
  {
    mal_id: 40748,
    url: "https://myanimelist.net/anime/40748/Jujutsu_Kaisen",
    images: {
      jpg: {
        image_url:
          "https://cdn.myanimelist.net/images/anime/1171/109222.jpg?s=f5508bab9e7d610a28f12d1828a6ee79",
        small_image_url:
          "https://cdn.myanimelist.net/images/anime/1171/109222t.jpg?s=f5508bab9e7d610a28f12d1828a6ee79",
        large_image_url:
          "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg?s=f5508bab9e7d610a28f12d1828a6ee79",
      },
      webp: {
        image_url:
          "https://cdn.myanimelist.net/images/anime/1171/109222.webp?s=f5508bab9e7d610a28f12d1828a6ee79",
        small_image_url:
          "https://cdn.myanimelist.net/images/anime/1171/109222t.webp?s=f5508bab9e7d610a28f12d1828a6ee79",
        large_image_url:
          "https://cdn.myanimelist.net/images/anime/1171/109222l.webp?s=f5508bab9e7d610a28f12d1828a6ee79",
      },
    },
    title: "Jujutsu Kaisen",
  },
  {
    mal_id: 1536,
    url: "https://myanimelist.net/anime/1536/Busou_Renkin",
    images: {
      jpg: {
        image_url:
          "https://cdn.myanimelist.net/images/anime/6/75566.jpg?s=3df5df4f8b400dc2362768e022d0cacd",
        small_image_url:
          "https://cdn.myanimelist.net/images/anime/6/75566t.jpg?s=3df5df4f8b400dc2362768e022d0cacd",
        large_image_url:
          "https://cdn.myanimelist.net/images/anime/6/75566l.jpg?s=3df5df4f8b400dc2362768e022d0cacd",
      },
      webp: {
        image_url:
          "https://cdn.myanimelist.net/images/anime/6/75566.webp?s=3df5df4f8b400dc2362768e022d0cacd",
        small_image_url:
          "https://cdn.myanimelist.net/images/anime/6/75566t.webp?s=3df5df4f8b400dc2362768e022d0cacd",
        large_image_url:
          "https://cdn.myanimelist.net/images/anime/6/75566l.webp?s=3df5df4f8b400dc2362768e022d0cacd",
      },
    },
    title: "Busou Renkin",
  },
  {
    mal_id: 38000,
    url: "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba",
    images: {
      jpg: {
        image_url:
          "https://cdn.myanimelist.net/images/anime/1286/99889.jpg?s=e497d08bef31ae412e314b90a54acfda",
        small_image_url:
          "https://cdn.myanimelist.net/images/anime/1286/99889t.jpg?s=e497d08bef31ae412e314b90a54acfda",
        large_image_url:
          "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg?s=e497d08bef31ae412e314b90a54acfda",
      },
      webp: {
        image_url:
          "https://cdn.myanimelist.net/images/anime/1286/99889.webp?s=e497d08bef31ae412e314b90a54acfda",
        small_image_url:
          "https://cdn.myanimelist.net/images/anime/1286/99889t.webp?s=e497d08bef31ae412e314b90a54acfda",
        large_image_url:
          "https://cdn.myanimelist.net/images/anime/1286/99889l.webp?s=e497d08bef31ae412e314b90a54acfda",
      },
    },
    title: "Kimetsu no Yaiba",
  },
];

describe("ListAnime Test", () => {
  it("renders Recommendation of an Anime", () => {
    render(
      <ThemeProvider theme={theme}>
        <ListAnime title="" recommendations={recommendations} />
      </ThemeProvider>
    );
    const imgCard = screen.getAllByRole("img");
    expect(imgCard.length).toBe(4);
    recommendations.forEach((recommendation) => {
      const heading = screen.getByText(recommendation.title);
      const imgCard = screen.getByAltText(`${recommendation.title} alt`);
      expect(heading).toBeInTheDocument();
      expect(imgCard).toBeInTheDocument();
    });
  });
});
