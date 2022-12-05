import { ThemeProvider } from "@mui/material";
import { render, screen } from "@testing-library/react";

import ListAnimeSkeleton from "./ListAnimeSkeleton";

import theme from "@/config/theme";

describe("ListAnime Test", () => {
  it("renders Recommendation of an Anime", () => {
    render(
      <ThemeProvider theme={theme}>
        <ListAnimeSkeleton />
      </ThemeProvider>
    );
    const skeletons = screen.getAllByTestId("skeleton");
    expect(skeletons.length).toBe(10);
  });
});
