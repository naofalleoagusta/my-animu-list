import { StyleType } from "../../../types";

const style: StyleType = {
  bannerContainer: {
    backgroundColor: "white",
    height: "100%",
    borderRadius: "15px",
    overflow: "hidden",
  },
  imageBannerContainer: [
    {
      flexBasis: "45%",
      overflow: "hidden",
      display: "flex",
      maxWidth: "45%",
      alignItems: "center",
      height: "100%",
      position: "relative",
    },
    () => ({
      "& > img": {
        height: "100%",
        width: "auto",
      },
    }),
  ],
  contentBannerContainer: {
    flexBasis: "55%",
    maxWidth: "55%",
    p: {
      xs: "12px",
      sm: "32px",
    },
  },
  contentBannerWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: "8px",
  },
  lastChip: {
    display: {
      xs: "none",
      sm: "iniline-flex",
    },
  },
  chipWrapper: {
    display: "flex",
    columnGap: "6px",
    rowGap: "4px",
    flexWrap: "wrap",
  },
  title: {
    fontWeight: 800,
    fontSize: { xs: "16px", sm: "24px", lg: "32px" },
    wordBreak: "break-all",
    overflow: {
      xs: "hidden",
      sm: "initial",
    },
    textOverflow: {
      xs: "ellipsis",
      sm: "initial",
    },
    display: {
      xs: "-webkit-box",
      sm: "block",
    },
    WebkitLineClamp: { xs: "2", sm: "initial" },
    WebkitBoxOrient: { xs: "vertical", sm: "initial" },
  },
  dateWrapper: {
    display: "flex",
    columnGap: { xs: "5px", sm: "10px" },
    alignItems: "center",
  },
  calendarIcon: { fontSize: { xs: "12px", sm: "20px" } },
  dateText: {
    paddingTop: { xs: "3px", sm: "2px" },
    fontSize: { xs: "9px", sm: "16px" },
    wordBreak: "break-all",
    fontWeight: 700,
  },
};

export default style;
