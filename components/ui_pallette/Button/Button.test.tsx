import { ThemeProvider } from "@mui/material";
import { fireEvent, render, screen } from "@testing-library/react";
import theme from "@/config/theme";

import Button from ".";

global.console.log = jest.fn();

const onClick = () => {
  console.log("clicked");
};

describe("Button Test", () => {
  it("renders an Button", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClick} id="test-btn" ariaLabel="Testing">
          Test
        </Button>
      </ThemeProvider>
    );
    const btn = screen.getByRole("button", {
      name: /Test/i,
    });
    expect(btn).toBeInTheDocument();
    expect(btn.getAttribute("id")).toBe("test-btn");

    fireEvent.click(btn);
    expect(console.log).toHaveBeenLastCalledWith("clicked");

    expect(btn.getAttribute("aria-label")).toBe("Testing Button");
  });
});
