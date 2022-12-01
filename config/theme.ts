import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

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
      dark: "#171717",
    },
    secondary: {
      main: "#ff9700",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: `Helvetica, Arial, sans-serif`,
    h1: {
      fontSize: "42px",
      fontWeight: 800,
      letterSpacing: "-1px",
    },
    h2: {
      fontSize: "32px",
      fontWeight: 800,
      letterSpacing: "-1px",
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
