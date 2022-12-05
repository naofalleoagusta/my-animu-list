import { render, screen } from "@testing-library/react";

import Link from ".";

describe("Link Test", () => {
  it("renders a Link", () => {
    render(<Link href="/test">Test</Link>);
    const img = screen.getByRole("link", { name: "Test" });
    expect(img).toBeInTheDocument();
    expect(img.getAttribute("href")).toBe("/test");
  });
});
