import { StyleType } from "@/types/index";

const style: StyleType = {
  bannerContainer: {
    height: "100%",
    borderRadius: "10px",
    overflow: "hidden",
    justifyContent: "center",
  },
  imageBannerContainer: [
    {
      flexBasis: { xs: "40%", md: "30%" },
      flexShrink: 0,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      height: "100%",
      position: "relative",
      borderRadius: "10px",
    },
    () => ({
      "& > img": {
        height: "100%",
        width: "100%",
        borderRadius: "10px",
      },
    }),
  ],
  contentBannerContainer: {
    flexBasis: { xs: "60%", md: "60%" },
    flexShrink: 0,
    p: {
      xs: "16px 0 16px 16px",
      sm: "32px 0 32px 32px",
    },
  },
  contentBannerWrapper: {
    width: "100%",
    height: "100%",
  },
  lastChip: {
    display: {
      xs: "none",
      md: "iniline-flex",
    },
  },
  chipWrapper: {
    display: { xs: "none", md: "flex" },
    columnGap: "6px",
    rowGap: "4px",
    flexWrap: "wrap",
  },
  title: {
    fontWeight: 800,
    fontSize: { xs: "14px", sm: "16px", md: "32px" },
    wordBreak: "break-all",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: { xs: "2", lg: "3" },
    WebkitBoxOrient: "vertical",
    color: "white",
    marginTop: { md: "12px" },
  },
  synopsis: {
    fontSize: { xs: "12px", sm: "14px", lg: "16px" },
    color: "white",
    wordBreak: "break-all",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: { xs: "4", sm: "5", lg: "10" },
    WebkitBoxOrient: "vertical",
    margin: { xs: "6px 0", md: "12px 0" },
  },
};

export default style;
