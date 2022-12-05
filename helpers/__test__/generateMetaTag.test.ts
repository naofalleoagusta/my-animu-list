import { APP_BASE_URL } from "@/config/index";

import generateMetaTag from "../generateMetaTag";

describe("Generate meta tag object", () => {
  it("generateMetaTag correctly", () => {
    expect(
      generateMetaTag({
        url: APP_BASE_URL,
        title: "MyAnimuList",
        description: "hello",
        image: "test",
      })
    ).toStrictEqual({
      "og:title": "MyAnimuList",
      "og:description": "hello",
      "og:image": "test",
      "og:url": APP_BASE_URL,
      "twitter:title": "MyAnimuList",
      "twitter:description": "hello",
      "twitter:image": "test",
      "twitter:url": APP_BASE_URL,
    });
  });
});
