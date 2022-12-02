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
          height: isMobile ? "200px" : "480px",
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
      <Container maxWidth="lg">{children}</Container>
    </>
  );
};

export default PageLayout;
