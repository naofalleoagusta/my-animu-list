import { ThemeProvider } from "@mui/material";
import {  fireEvent, render } from "@testing-library/react";

import Drawer from "./Drawer";

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

describe("Drawer Test", () => {
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
  it("renders Drawer", () => {
    const { getByRole, getByText } = render(
      <ThemeProvider theme={theme}>
        <Drawer openDrawer toggleDrawer={toggleDrawer} />
      </ThemeProvider>
    );
    const presentation = getByRole("presentation");
    expect(presentation).toBeInTheDocument();

    const greetText = getByText("Hello, User!");
    expect(greetText).toBeInTheDocument();
    const heading = getByText("Favorite Anime List");
    expect(heading).toBeInTheDocument();
    const noFavoriteText = getByText(
      "You have not set any favorite animes, yet."
    );
    expect(noFavoriteText).toBeInTheDocument();
  });
  it("should trigger console.log when button close clicked", () => {
    const { getByRole, getByText } = render(
      <ThemeProvider theme={theme}>
        <Drawer openDrawer toggleDrawer={toggleDrawer} />
      </ThemeProvider>
    );
    
    const closeBtn = getByRole("button",{name:"Close Button"});
    expect(closeBtn).toBeInTheDocument();
    fireEvent.click(closeBtn)
    expect(console.log).toHaveBeenLastCalledWith("toggled");
  });
});
