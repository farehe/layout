import { StateCreator } from 'zustand';

export const THEME = "THEME";

interface General {
  toggleTheme: () => void;
}
// (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
const initialStore = {
  [THEME]: 'light',
  tmpToken: ''
};

const general: StateCreator<General, []> = (set: (x: any) => any, state: any) => ({
  toggleTheme: () => (state()[THEME] === 'dark' ? set({ [THEME]: 'light' }) : set({ [THEME]: 'dark' })),
  setTmpToken: (token: string) => set({ tmpToken: token }),
  ...initialStore
});

export default general;
