import { StyleType } from "@/types/index";

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
      bgcolor: "unset",
    },
    (theme) => ({
      [theme.breakpoints.up("lg")]: {
        "&:hover": {
          scale: "105%",
          zIndex: 10,
          "& .scoreContainer": {
            opacity: 1,
          },
          "& .titleContainer": {
            bottom: "0px",
          },
          "& >img": {
            filter: "blur(1px) brightness(50%)",
          },
        },
      },
      "& >img": {
        height: "100% !important",
        width: "100% !important",
        borderRadius: "6px",
        transition: "filter 300ms ease-in-out",
        filter: {
          xs: "blur(1px) brightness(50%)",
          lg: "unset",
        },
      },
    }),
  ],
  scoreContainer: {
    position: "absolute",
    opacity: { xs: 1, lg: 0 },
    top: "14px",
    left: "14px",
    transition: "all 300ms ease-in-out",
    zIndex: 40,
  },
  titleContainer: {
    width: "calc(100% - 8px)",
    position: "absolute",
    minWidth: 0,
    bottom: { xs: "0px", lg: "-300px" },
    transition: "all 300ms ease-in-out",
    padding: "16px 14px",
  },
  title: {
    fontWeight: 500,
    fontSize: "17px",
    wordBreak: "break-all",
    letterSpacing: "0.5px",
    color: "white",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
  },
};
