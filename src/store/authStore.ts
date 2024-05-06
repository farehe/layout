import { StateCreator, create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { IS_LOGGED_IN, PROFILE_KEY, TOKEN_KEY, myAxios } from "./constants";
// import jwtDecode from "jwt-decode";

interface UserProfileInterface {
  username: string
}
interface Auth {
  [IS_LOGGED_IN]: boolean;
  [TOKEN_KEY]: string | undefined;
  [PROFILE_KEY]: UserProfileInterface | undefined
}
const initialStore = {
  ["PROFILE_KEY"]: undefined,
  ["TOKEN_KEY"]: undefined,
  ["IS_LOGGED_IN"]: false,
};

const persistedValues = (state: any) => ({
  [TOKEN_KEY]: state[TOKEN_KEY],
});

const auth: StateCreator<Auth, []> = (set: (x: any) => any, _state: any) => ({
  login: (token: string) => {
    myAxios.defaults.headers.common["Authorization"] = `${token}`;
    // const _decodedToken: any = jwtDecode(token);
    const _decodedToken: any = '';
    // console.log({ _decodedToken })
    set({
      [TOKEN_KEY]: token,
      [PROFILE_KEY]: _decodedToken.username,
      [IS_LOGGED_IN]: true
    });

  },
  logout: () => {
    return set((state: any) => {
      state[IS_LOGGED_IN] = false;
      delete state[TOKEN_KEY];
      delete state[PROFILE_KEY];
      return state;
    });
  },

  ...initialStore,
});
const middlewares = (f: StateCreator<any, any>) =>
  devtools(
    persist(f, {
      name: "AUTH_STORE_PELAZOOM",
      storage: createJSONStorage(() => localStorage),
      partialize: persistedValues,
      version: 0.1,
    })
  );

type StoreType = {
  [IS_LOGGED_IN]: boolean;
  [TOKEN_KEY]: string | undefined;
};

export const useAuthStore = create(
  middlewares((a, b, c): StoreType => {
    return {
      ...auth(a, b, c),
    };
  })
);
