import { create } from 'zustand';

interface State {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const useStore = create<State>((set) => ({
  darkMode: false,
  toggleDarkMode: () =>
    set((state) => {
      const newDarkMode = !state.darkMode;
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return { darkMode: newDarkMode };
    }),
}));

export default useStore;
