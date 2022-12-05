import generateQueryParam from "../generateQueryParam";

describe("Generate Query Param", () => {
  it("Should generate queryParam correctly", () => {
    expect(
      generateQueryParam({
        q: "Naruto",
        sort: "asc",
        sortBy: "rank",
      })
    ).toBe("?q=Naruto&sort=asc&sortBy=rank");
  });
  it("With no parameter provided", () => {
    expect(generateQueryParam()).toBe("");
  });
});
