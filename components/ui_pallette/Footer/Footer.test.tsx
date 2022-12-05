import { ThemeProvider } from "@mui/material";
import { render, screen } from "@testing-library/react";
import theme from "@/config/theme";

import Footer from ".";

describe("Footer Test", () => {
  it("renders a Footer", () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );
    const github = screen.getByTestId("github");
    expect(github).toBeInTheDocument();
    expect(github.getAttribute("href")).toBe('https://github.com/naofalleoagusta');
    const  tool= screen.getByTestId("tool");
    expect(tool).toBeInTheDocument();
    expect(tool.getAttribute("href")).toBe('https://nextjs.org/');
  });
});
