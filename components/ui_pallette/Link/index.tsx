import NextLink from "next/link";
import MuiLink, { LinkProps } from "@mui/material/Link";

const Link = (props: LinkProps) => {
  return <MuiLink component={NextLink} {...props} />;
};

export default Link;
