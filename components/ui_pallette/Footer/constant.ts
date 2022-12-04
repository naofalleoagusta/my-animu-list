type NavigationType = {
  name: string;
  href: string;
};

const NAVIGATIONS: NavigationType[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Favorite",
    href: "/favorite",
  },
];

export default NAVIGATIONS;
