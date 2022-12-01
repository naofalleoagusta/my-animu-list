import { StyleType } from "../../types";

export const style: StyleType = {
  root: {
    flexBasis: {
      xs: "247px",
      md: "20%",
    },
    height: {
      md: "318px",
      xs: "350px",
    },
    maxWidth: {
      xs: "247px",
      md: "20%",
    },
    flexShrink: {
      xs: 0,
      md: "unset",
    },
    padding: "8px",
    overflow: "hidden",
    display: "flex",
  },
  container: [
    {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      borderRadius: "10px",
      padding: "4px",
      transition: "all 300ms ease-in-out",
      bgcolor: {
        xs: "primary.main",
        lg: "unset",
      },
    },
    (theme) => ({
      "&:hover": {
        scale: "105%",
        backgroundColor: theme.palette.primary.main,
        zIndex: 10,
        "& .scoreContainer": {
          opacity: 1,
        },
        "& .titleContainer": {
          bottom: "0px",
        },
      },
      "& >img": {
        height: "100% !important",
        width: "100% !important",
        borderRadius: "6px",
      },
    }),
  ],
  scoreContainer: {
    position: "absolute",
    opacity: { xs: 1, lg: 0 },
    top: "14px",
    left: "14px",
    transition: "all 300ms ease-in-out",
  },
  titleContainer: {
    width: "calc(100% - 8px)",
    position: "absolute",
    minWidth: 0,
    height: "auto",

    bottom: { xs: "0px", lg: "-300px" },
    bgcolor: "primary.main",
    transition: "all 300ms ease-in-out",
    padding: "12px 18px",
  },
  title: {
    fontWeight: 700,
    fontSize: "16px",
    wordBreak: "break-all",
    letterSpacing: "0px",
    color: "white",
  },
};
