import { ThemeProvider } from "@mui/material";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Pagination from ".";

import theme from "@/config/theme";

describe("Pagination Test", () => {
  it("renders Pagination", () => {
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
  it("should change page when clicking the inactive pagination", () => {
    render(
      <ThemeProvider theme={theme}>
        <Pagination page={1} count={15} />
      </ThemeProvider>
    );

    const lastPagination = screen.getByRole("button", {
      name: "Go to page 15",
    });
    expect(lastPagination).toBeInTheDocument();
    fireEvent.click(lastPagination);
    waitFor(() => {
      expect(lastPagination).toHaveStyle("color: rgb(0, 124, 239)");
      expect(lastPagination).toHaveStyle(
        "border: 1px solid rgba(0, 124, 239, 0.5)"
      );
    });
  });
  it("should change to next page when clicking next page pagination", () => {
    render(
      <ThemeProvider theme={theme}>
        <Pagination page={1} count={15} />
      </ThemeProvider>
    );

    const nextPagination = screen.getByRole("button", {
      name: "Go to next page",
    });
    expect(nextPagination).toBeInTheDocument();
    fireEvent.click(nextPagination);
    waitFor(() => {
      const secondPagination = screen.getByRole("button", {
        name: "page 2",
      });
      const input = screen.getByRole("combobox", {
        name: "Pagination Select",
      });
      expect(input.getAttribute("value")).toBe("2");
      expect(secondPagination).toBeInTheDocument();
      expect(secondPagination).toHaveStyle("color: rgb(0, 124, 239)");
      expect(secondPagination).toHaveStyle(
        "border: 1px solid rgba(0, 124, 239, 0.5)"
      );
    });
  });
  it("should render a selectable list when input has a value", () => {
    render(
      <ThemeProvider theme={theme}>
        <Pagination page={1} count={15} />
      </ThemeProvider>
    );

    const input = screen.getByRole("combobox", {
      name: "Pagination Select",
    });
    expect(input).toBeInTheDocument();
    fireEvent.change(input, {
      target: {
        value: "3",
      },
    });
    waitFor(() => {
      expect(input.getAttribute("value")).toBe("3");
      [...Array(15)].forEach((_, idx) => {
        const text = screen.getByText(`${idx + 1}`);
        expect(text).toBeInTheDocument();
        fireEvent.click(text);
        waitFor(() => {
          expect(input.getAttribute("value")).toBe(`${idx + 1}`);
          const btnPagination = screen.getByRole("button", {
            name: `page ${idx + 1}`,
          });
          expect(btnPagination).toHaveStyle("color: rgb(0, 124, 239)");
          expect(btnPagination).toHaveStyle(
            "border: 1px solid rgba(0, 124, 239, 0.5)"
          );
        });
      });
      expect(input);
    });
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
  });
});
