import { ThemeProvider } from "@mui/material";
import { render } from "@testing-library/react";

import TrailerCard from ".";

import theme from "@/config/theme";

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

const trailer = {
  title: "Bleach: Sennen Kessen-hen",
  trailer: {
    youtube_id: "e8YBesRKq_U",
    url: "https://www.youtube.com/watch?v=e8YBesRKq_U",
    embed_url:
      "https://www.youtube.com/embed/e8YBesRKq_U?enablejsapi=1&wmode=opaque&autoplay=1",
    images: {
      image_url: "https://img.youtube.com/vi/e8YBesRKq_U/default.jpg",
      small_image_url: "https://img.youtube.com/vi/e8YBesRKq_U/sddefault.jpg",
      medium_image_url: "https://img.youtube.com/vi/e8YBesRKq_U/mqdefault.jpg",
      large_image_url: "https://img.youtube.com/vi/e8YBesRKq_U/hqdefault.jpg",
      maximum_image_url:
        "https://img.youtube.com/vi/e8YBesRKq_U/maxresdefault.jpg",
    },
  },
};

describe("TrailerCard Test", () => {
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
  it("renders TrailerCard ", () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <TrailerCard {...trailer} />
      </ThemeProvider>
    );
    const img = getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img.getAttribute("width")).toBe("320");
    expect(img.getAttribute("height")).toBe("180");
    const btn = getByRole("button");
    expect(btn).toBeInTheDocument();
  });
  it("should remove image and show iframe, when TrailerCard clicked ", () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <TrailerCard {...trailer} />
      </ThemeProvider>
    );
    const img = getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img.getAttribute("width")).toBe("320");
    expect(img.getAttribute("height")).toBe("180");
    const btn = getByRole("button");
    expect(btn).toBeInTheDocument();
  });
});
