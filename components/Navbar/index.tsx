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
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      <header>
        <nav>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "28px 0 ",
              alignItems: "center",
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
