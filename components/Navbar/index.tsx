import { Box, Container, styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import Drawer from "./components/Drawer";
import Link from "../ui_pallette/Link";

const SLink = styled(Link)(() => ({
  color: "white",
  fontWeight: 700,
  fontSize: 14,
  letterSpacing: "1px",
}));

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };

  const handleOnScroll = () => {
    const windowHeight = window.scrollY;

    setIsScrolled(windowHeight > 50);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleOnScroll);

      return () => window.removeEventListener("scroll", handleOnScroll);
    }
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 100,
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
              <IconButton
                id="navbar-menu-btn"
                onClick={toggleDrawer}
                aria-label="Navbar Button"
              >
                <MenuIcon sx={{ color: "white" }} />
              </IconButton>
            </Container>
          </nav>
        </header>
      </Box>
      <Drawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar;
