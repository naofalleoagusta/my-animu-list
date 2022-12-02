import { Box, Container, styled } from "@mui/material";
import { useEffect, useState } from "react";

import Link from "../ui_pallette/Link";

import LINKS from "./constant";

const SLink = styled(Link)(() => ({
  color: "white",
  fontWeight: 700,
  fontSize: 14,
  letterSpacing: "1px",
}));

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOnScroll = () => {
    const windowHeight = window.scrollY;

    setIsScrolled(windowHeight > 50);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleOnScroll);

      () => {
        return window.removeEventListener("scroll", handleOnScroll);
      };
    }
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 50,
        background: isScrolled ? "rgba(0, 61, 118,.4)" : "transparent",
        backdropFilter: isScrolled ? "blur(5px)" : "unset",
        transition: "all 250ms ease-in-out",
      }}
    >
      <header>
        <nav>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "28px 16px",
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
