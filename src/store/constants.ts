import axios, { AxiosError } from "axios";
// import { LuRefreshCw } from "react-icons/lu";
import { MdOutlineMessage, MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineCategory, MdOutlineEvent, MdOutlineGroups, MdOutlineNewspaper } from "react-icons/md";


// import { useAuthStore } from "./authStore";
export const CURRENT_DOMAIN = "http://exch.aibitsolutions.com"
export const PASSWORD_STR_COLOR = {
  poor: 'color-warning',
  good: 'color-warning',
  excellent: 'color-success',
  perfect: 'color-success'
}

// export const CDN_BASE_URL = "http://192.168.1.13:3000/cdn";
// export const API_BASE_URL = "http://192.168.1.13:3000";
export const CDN_BASE_URL = "https://sxt-api.chbk.run/cdn"
export const API_BASE_URL = "https://sxt-api.chbk.run";
export const NOBITEX_BASE_URL = "https://api.nobitex.ir";
export const TOKEN_KEY = "TOKEN_KEY";
export const PROFILE_KEY = "PROFILE_KEY";
export const IS_LOGGED_IN = "IS_LOGGED_IN";
export const nobitexAxios = axios.create({
  baseURL: NOBITEX_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export const unAuthrizedAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const myAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: useAuthStore.getState()[TOKEN_KEY],
  },
});
myAxios.interceptors.response.use(
  (e) => e,
  (e: AxiosError) => {
    if (e.response?.status === 401 || e.response?.status === 403) {
      // useAuthStore.getState().logout();
      // window.location.href = "/";
      //   toast.error("شما دسترسی لازم برای این عملیات را ندارید");
    } else if (e.response?.status === 500) {
      //   toast.error("خطایی در سرور رخ داده است");
    }
    return e;
  }
);


export const OrderTypeLabels:{
  [key: string]: {
    label: string,
    color: string
  }
} = {
  industrialUnit: {
    label: 'Industrial Unit',
    color: 'primary'
  },
  storage: {
    label: 'Storage',
    color: 'success'
  },
  processing: {
    label: 'Processing',
    color: 'error'
  },
}
export const UserStatus:{
  [key: string]: {
    label: string,
    color: string
  }
} = {
  act: {
    label: 'Active',
    color: 'success'
  },
  pnd: {
    label: 'Pending',
    color: 'error'
  },
}

// <Item icon={MdOutlineGroups} title="Users"/>
// <Item icon={MdOutlineNewspaper} title="Updates"/>
// <Item icon={MdOutlineEvent} title="Events"/>
// <Item icon={MdOutlineCategory} title="Categoreis"/>
// <Item icon={MdOutlineWeb} title="Website"/>
// <Item icon={MdOutlineSettings} title="Setting"/>
export const MAIN_NAVIGATIONS = [
  // {
  //   label: 'Home',
  //   icon: MdOutlineDashboard,
  //   path: 'home'
  // },
  {
    label: 'Users',
    icon: MdOutlineGroups,
    path: 'users'
  },
  {
    label: 'Updates',
    icon: MdOutlineNewspaper,
    path: 'updates'
  },
  {
    label: 'Events',
    icon: MdOutlineEvent,
    path: 'events'
  },
  {
    label: 'Categoreis',
    icon: MdOutlineCategory,
    path: 'categories'
  },
  {
    label: 'Orders',
    icon: MdOutlineShoppingCart,
    path: 'orders'
  },
  {
    label: 'Requests',
    icon: MdOutlineMessage,
    path: 'requests'
  },
  // {
  //   label: 'Website',
  //   icon: MdOutlineWeb,
  //   path: 'website'
  // },
  // {
  //   label: 'Setting',
  //   icon: MdOutlineSettings,
  //   path: 'setting'
  // }
  // {
  //   label: 'Trade',
  //   icon: LuRefreshCw,
  //   path: 'trade?symbol=BTC_USDT'
  // },
  // {
  //   label: 'Portfolio',
  //   icon: FiPieChart,
  //   path: 'portfolio'
  // },
  // {
  //   label: 'Market',
  //   icon: AiOutlineLineChart,
  //   path: 'market'
  // },
  // {
  //   label: 'History',
  //   icon: LuHistory,
  //   path: 'history'
  // },
  // {
  //   label: 'Referral',
  //   icon: MdOutlineDiscount,
  //   path: 'referral'
  // },
]


export const CATEGORIES_TYPE = [
  {
    label: 'Project Updates',
    value: 'projectUpdates'
  },
  {
    label: 'Case Studies',
    value: 'caseStudies'
  },
  {
    label: 'Articles',
    value: 'articles'
  },
  {
    label: 'News',
    value: 'news'
  },
  {
    label: 'Events',
    value: 'events'
  }
]

export const CATEGORIES_LABELS: {
  [key: string]: string
} = {
  projectUpdates: 'Project Updates',
  caseStudies: 'Case Studies',
  articles: 'Articles',
  news: 'News',
  events: 'Events'
}

export const DATE_FORMAT = 'LLL'

