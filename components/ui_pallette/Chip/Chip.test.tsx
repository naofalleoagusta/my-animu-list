import { ThemeProvider } from "@mui/material";
import { render, screen } from "@testing-library/react";
import theme from "@/config/theme";

import Chip from ".";

describe("Chip Test", () => {
  it("renders an Chip", () => {
    render(
      <ThemeProvider theme={theme}>
        <Chip label="Yo" />
      </ThemeProvider>
    );
    const chip = screen.getByText("Yo");
    expect(chip).toBeInTheDocument();
  });
});
