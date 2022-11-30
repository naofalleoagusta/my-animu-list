import { ReactNode } from "react";

type LinkType = {
  href: string;
  content: ReactNode;
};

const LINKS: LinkType[] = [
  {
    href: "/favorite",
    content: "FAVORITE",
  },
];
export default LINKS;
