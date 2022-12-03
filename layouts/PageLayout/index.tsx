import { Container, Theme } from "@mui/material";
import { ReactNode } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Head from "next/head";

import Section from "../../components/ui_pallette/Section";
import { MetaTagsType } from "../../types";

type PageLayoutProps = {
  children: ReactNode;
  banner: ReactNode;
  wrapBannerWithContainer?: boolean;
  metaTags?: MetaTagsType;
  title: string;
};

const PageLayout = ({
  banner,
  children,
  wrapBannerWithContainer = true,
  metaTags,
  title,
}: PageLayoutProps) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta property="og:type" content="website" />
        {metaTags &&
          Object.entries(metaTags).map((metaTag) => (
            <meta property={metaTag[0]} content={metaTag[1]} key={metaTag[0]} />
          ))}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:alt"
          content="My Animu List's Website Banner"
        />
        <meta name="twitter:creator" content="@myanimelist" />
      </Head>
      {wrapBannerWithContainer ? (
        <Section
          sx={{
            height: isMobile ? "280px" : "480px",
            padding: "80px 0 40px",
            bgcolor: "primary.main",
          }}
        >
          <Container
            maxWidth="lg"
            sx={{ height: "100%" }}
            className="banner-container"
          >
            {banner}
          </Container>
        </Section>
      ) : (
        banner
      )}
      <Container maxWidth="lg">{children}</Container>
    </>
  );
};

export default PageLayout;
