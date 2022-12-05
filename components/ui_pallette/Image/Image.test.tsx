import { render, screen } from "@testing-library/react";

import Image from ".";

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
  imageKey: "https://cdn.myanimelist.net/images/anime/1764/126627.webp",
  mal_id: 41467,
};

describe("Image Test", () => {
  it("renders a Image", () => {
    render(
      <Image
        src={anime.images.webp.image_url}
        alt={`${anime.title} alt`}
        blurDataURL={anime.images.webp.small_image_url}
        height={318}
        width={225}
        keyValue={anime.imageKey}
        id={`anime-img-card-${anime.mal_id}`}
      />
    );
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img.getAttribute("width")).toBe("225");
    expect(img.getAttribute("height")).toBe("318");
    expect(img.getAttribute("src")).toBe(
      "/_next/image?url=https%3A%2F%2Fcdn.myanimelist.net%2Fimages%2Fanime%2F1764%2F126627.webp&w=640&q=100"
    );
  });
});
