import { create } from "zustand";

export interface AppStore {
  isMenuOpen: boolean;
  openMenu: ()=>void;
  closeMenu: ()=>void;
}
export const useAppStore = create<AppStore>((set) => ({
  isMenuOpen: false,
  openMenu: () => set({ isMenuOpen: true }),
  closeMenu: () => set({ isMenuOpen: false }),
}));