import { create } from 'zustand';

export interface State {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
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

  // 로그인 여부
  isLoggedIn: !!localStorage.getItem('accessToken'),

  // 로그인
  logIn: () => set({ isLoggedIn: true }),

  // 로그아웃
  logOut: () => {
    localStorage.removeItem('accessToken');
    set({ isLoggedIn: false });
  },
}));

export default useStore;
