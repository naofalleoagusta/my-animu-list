import { ThemeProvider } from "@mui/material";
import { render, screen } from "@testing-library/react";
import theme from "@/config/theme";

import Error from ".";

describe("Error Test", () => {
  it("renders an Error", () => {
    render(
      <ThemeProvider theme={theme}>
        <Error />
      </ThemeProvider>
    );
    const error = screen.getByText(`Something wrong, try again later 🙇🏽‍♂️`);
    expect(error).toBeInTheDocument();
  });
});
