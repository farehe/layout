import { StateCreator, create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import general, { THEME } from "./general";


const persistedValues = (state: any) => ({
  [THEME]: state[THEME],
});

const middlewares = (f: StateCreator<any, any>) =>
  devtools(
    persist(f, {
      name: "GENERAL_STORE_XBOT",
      storage: createJSONStorage(() => localStorage),
      partialize: persistedValues,
      version: 0.1,
    })
  );

type StoreType = {
};

export const useGeneralStore = create(
  middlewares((a, b, c): StoreType => {
    return {
      ...general(a, b, c),
    };
  })
);
