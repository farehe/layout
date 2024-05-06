import { API_MESSAGES } from "~/store/apiMessages";
import { myAxios } from "../store/constants";
import { UpdateProfileReqBodyT } from "~/types/user";

export const getUserProfile = async () => {
  try {
    const _token = localStorage.getItem("TOKEN");
    if (_token) {
      myAxios.defaults.headers.common["Authorization"] = `Bearer ${_token}`;
      const _response = await myAxios.get("/profile");
      // console.log({_response})
      if (_response.data)
        return _response.data;

      return Promise.reject("No data");
    }

    return Promise.reject("No token");


    // const response = await myAxios.get("/profile");

    // if (response.data)
    //   return response.data;

    return Promise.reject("Error fetching user profile");
  } catch (error) {
    throw error;
  }
}

export async function updateUserProfile(params: UpdateProfileReqBodyT) {
  try {
    const _response = await myAxios.put("/profile", params);

    if (_response.data)
      return _response.data as { token: string, message: string };

    return Promise.reject(API_MESSAGES.ERROR.DEFAULT);
  } catch (error) {
    throw error;
  }
}

export async function getUserReferrals() {
  try {
    const _response = await myAxios.get("/profile/referrals");

    if (_response.data)
      return _response.data as { profile: { fullName: string }, ca: Date }[];

    return Promise.reject(API_MESSAGES.ERROR.DEFAULT);
  } catch (error) {
    throw error;
  }
}

export async function changeUserPassword(params: { oldPassword: string, newPassword: string }) {
  try {
    const _response = await myAxios.put("/profile/password", params);

    if (_response.data)
      return _response.data;

    return Promise.reject(API_MESSAGES.ERROR.DEFAULT);
  } catch (error) {
    throw error;
  }
}
