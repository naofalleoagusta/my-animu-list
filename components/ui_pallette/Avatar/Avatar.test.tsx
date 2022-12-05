import { ThemeProvider } from "@mui/material";
import { fireEvent, render, screen } from "@testing-library/react";
import theme from "@/config/theme";

import Avatar from ".";

global.console.log = jest.fn();

const onClick = () => {
  console.log("clicked");
};

describe("Avatar Test", () => {
  it("renders an Avatar", () => {
    render(
      <ThemeProvider theme={theme}>
        <Avatar onClick={onClick} />
      </ThemeProvider>
    );
    const img = screen.getByAltText(`Avatar`);
    expect(img).toBeInTheDocument();
    expect(img.getAttribute("src")).toBe(
      "/_next/image?url=https%3A%2F%2Fcdn.myanimelist.net%2Fimg%2Fsp%2Ficon%2Fapple-touch-icon-256.png&w=640&q=100"
    );

    fireEvent.click(img);
    expect(console.log).toHaveBeenLastCalledWith("clicked");
  });
});
