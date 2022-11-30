import { Container, Theme } from "@mui/material";
import { ReactNode } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import Section from "../../components/Section";

type PageLayoutProps = {
  children: ReactNode;
  banner: ReactNode;
};

const PageLayout = ({ banner, children }: PageLayoutProps) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <>
      <Section
        sx={{
          bgcolor: "primary.main",
          height: isMobile ? "200px" : "500px",
          paddingBottom: "32px",
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
      <Container maxWidth="lg">{children}</Container>
    </>
  );
};

export default PageLayout;
