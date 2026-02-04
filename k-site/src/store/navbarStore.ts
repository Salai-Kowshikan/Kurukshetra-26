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
  { label: "Projects", url: "https://www.projects.cegtechforum.in/", isExternal: true },
  { label: "Accommodation", url: "/accommodation" },
  { label: "Contacts", url: "/contact" },
  // { label: "Login", url: "/login" },
];

const featureNavItems: NavItem[] = [
  { label: "Events", url: "https://unstop.com/college-fests/kurukshetra-2026-anna-university-ceg-tech-forum-436664", isExternal: true },
  { label: "Workshops", url: "/workshops" },
  { label: "Guest Lectures", url: "/guest-lectures" },
  { label: "Technovation", url: "https://unstop.com/p/technovation-kurukshetra-2026-anna-university-ceg-tech-forum-1628748?utm_medium=Share&utm_source=vhcnzgkj55361&utm_campaign=Competitions", isExternal: true },
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
