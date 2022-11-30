import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.

const COLORS = {
  blue: "#007cef",
};

const theme = createTheme({
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
      fontWeight: 700,
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
