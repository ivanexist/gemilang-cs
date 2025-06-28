import { create } from "zustand";

interface ScrollStore {
  scrollToTop: () => void;
  scrollToTopSmooth: () => void;
}

export const useScrollStore = create<ScrollStore>(() => ({
  scrollToTop: () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  },
  scrollToTopSmooth: () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
}));
