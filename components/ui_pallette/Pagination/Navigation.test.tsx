import { ThemeProvider } from "@mui/material";
import {
  render,
  screen,
} from "@testing-library/react";

import Pagination from ".";

import theme from "@/config/theme";

describe("Pagination Test", () => {
  it("renders Pagination", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Pagination page={1} count={15} />
      </ThemeProvider>
    );

    const firstPagination = screen.getByRole("button", {
      name: "page 1",
    });
    expect(firstPagination).toBeInTheDocument();

    const lastPagination = screen.getByRole("button", {
      name: "Go to page 15",
    });
    expect(lastPagination).toBeInTheDocument();

    const input = screen.getByRole("combobox", {
      name: "Pagination Select",
    });
    expect(input).toBeInTheDocument();
  });
  
  it("renders 1 Pagination", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Pagination page={1} count={1} />
      </ThemeProvider>
    );

    const firstPagination = screen.getByRole("button", {
      name: "page 1",
    });
    expect(firstPagination).toBeInTheDocument();

    const input = screen.getByRole("combobox", {
      name: "Pagination Select",
    });
    expect(input).toBeInTheDocument();
  });
});
