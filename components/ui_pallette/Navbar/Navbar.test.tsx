import { ThemeProvider } from "@mui/material";
import { act, fireEvent, render, waitFor } from "@testing-library/react";

import Navbar from ".";

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

describe("Navbar Test", () => {
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
  it("renders navbar", async () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    );
    await act(() => {
      const title = getByRole("link", { name: "MyAnimuList" });
      expect(title).toBeInTheDocument();
      expect(title.getAttribute("href")).toEqual("/");

      const hamburgerBtn = getByRole("button", {
        name: "Navbar Button",
      });
      expect(hamburgerBtn).toBeInTheDocument();
      fireEvent.click(hamburgerBtn);
      waitFor(() => {
        const presentation = getByRole("presentation");
        expect(presentation).toBeInTheDocument();
      });
    });
  });
});
