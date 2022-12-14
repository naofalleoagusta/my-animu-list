import { Roboto } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});
// Create a theme instance.

const COLORS = {
  blue: "#007cef",
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: COLORS.blue,
      dark: "#405998",
    },
    secondary: {
      main: "#ff9700",
      dark: "#A7AAAB",
      light: "#eff5f1",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: "34px",
      fontWeight: 800,
      letterSpacing: "-1px",
    },
    h2: {
      fontSize: "28px",
      fontWeight: 800,
      letterSpacing: "-1px",
    },
    h3: {
      fontSize: "24px",
      fontWeight: 500,
      letterSpacing: "-0.5px",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: "28px",
          backgroundColor: COLORS.blue,
          color: "white",
        },
        label: {
          fontWeight: 700,
        },
      },
    },
  },
});

export default theme;
