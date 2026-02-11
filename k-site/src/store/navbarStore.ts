import { create } from "zustand";

export interface NavItem {
  label: string;
  url: string;
  isExternal?: boolean;
}

type NavbarMode = "home" | "full";

export interface NavbarStore {
  mode: NavbarMode;
  navItems: NavItem[];
  setHomeNavbar: () => void;
  setFullNavbar: () => void;
}

const baseNavItems: NavItem[] = [
  { label: "Home", url: "/" },
  { label: "Sponsors", url: "/sponsors" },
  { label: "Projects", url: "https://www.projects.cegtechforum.in/", isExternal: true },
  { label: "Accommodation", url: "/accommodation" },
  { label: "Contacts", url: "/contact" },
  // { label: "Login", url: "/login" },
];

const featureNavItems: NavItem[] = [
  { label: "Events", url: "/events" },
  { label: "Workshops", url: "/workshops" },
  { label: "Guest Lectures", url: "/guest-lectures" },
  { label: "Technovation", url: "/technovation" },
];

export const useNavbarStore = create<NavbarStore>((set) => ({
  mode: "home",
  navItems: baseNavItems,

  setHomeNavbar: () =>
    set({
      mode: "home",
      navItems: baseNavItems,
    }),

  setFullNavbar: () =>
    set({
      mode: "full",
      navItems: [
        baseNavItems[0],
        ...featureNavItems,
        ...baseNavItems.slice(1),
      ],
    }),
}));
