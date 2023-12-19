import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage';

let themeStore = (set) => ({
  theme: "desert",
  setTheme: (currentTheme) =>
    set((state) => ({ ...state, theme: currentTheme })),
});

themeStore = persist(themeStore, {
  name: "theme",
  storage: createJSONStorage(() => AsyncStorage),
});
export const useThemeStore = create(themeStore);
