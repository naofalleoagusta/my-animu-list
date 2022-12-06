import { ThemeProvider } from "@mui/material";
import { render } from "@testing-library/react";

import Skeleton from ".";

import theme from "@/config/theme";

describe("Skeleton Test", () => {
  it("renders Skeleton ", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Skeleton width="100px" height="300px" />
      </ThemeProvider>
    );
    const skeletonDiv = getByTestId("skeleton");
    expect(skeletonDiv).toBeInTheDocument();
    expect(skeletonDiv).toHaveStyle("height: 300px");
    expect(skeletonDiv).toHaveStyle("width: 100px");
  });
});
