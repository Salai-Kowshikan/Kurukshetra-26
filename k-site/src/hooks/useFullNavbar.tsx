import { useEffect } from "react";
import { useNavbarStore } from "@/store/navbarStore";

export default function useFullNavbar() {
  const setFullNavbar = useNavbarStore((s) => s.setFullNavbar);

  useEffect(() => {
    setFullNavbar();
  }, []);
}
