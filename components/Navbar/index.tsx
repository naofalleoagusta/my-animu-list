import { Box, Container, styled } from "@mui/material";

import Link from "../ui_pallette/Link";

import LINKS from "./constant";

const SLink = styled(Link)(() => ({
  color: "white",
  fontWeight: 700,
  fontSize: 14,
  letterSpacing: "1px",
}));

const Navbar = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
      }}
    >
      <header>
        <nav>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "36px",
              paddingBottom: "36px",
              alignItems: "center",
              bgcolor: "primary.main",
            }}
            maxWidth="lg"
          >
            <SLink
              href="/"
              sx={{
                fontSize: "20px",
                color: "white",
                letterSpacing: "normal",
              }}
            >
              MyAnimuList
            </SLink>
            <Box sx={{ display: "flex", columnGap: 4 }}>
              {LINKS.map((dtLink, idx) => (
                <SLink href={dtLink.href} key={idx}>
                  {dtLink.content}
                </SLink>
              ))}
            </Box>
          </Container>
        </nav>
      </header>
    </Box>
  );
};

export default Navbar;
