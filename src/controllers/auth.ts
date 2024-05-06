// import { AxiosError } from "axios";
import axios from "axios";
// import { toast } from "react-hot-toast";
import { API_MESSAGES } from "~/store/apiMessages";
import { unAuthrizedAxios } from "~/store/constants";
import { ForgotPwReqT, ResetPasswordReqT, SigninReqT, SignupReqT, VerifyEmailReqT } from "~/types/auth";
import { handleAxiosError } from "~/utils";



export const signup = async (signupReq: SignupReqT) => {
  try {
    const response = await unAuthrizedAxios.post("/auth/signup", signupReq);

    if (response.data)
      return response.data as { token: string };

    return Promise.reject(API_MESSAGES.ERROR.DEFAULT);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error.response?.data);
    }
    throw error;
  }
};

export const signin = async (signinReq: SigninReqT) => {
  try {
    const response = await unAuthrizedAxios.post("/auth/signin", signinReq);

    if (response.data)
      return response.data as { token: string };

    return Promise.reject(API_MESSAGES.ERROR.DEFAULT);
  } catch (error) {
    // if (axios.isAxiosError(error)) {
    //   handleAxiosError(error.response?.data);
    // }
    throw error;
  }
};


export const sendEmailVerificationCode = async (_token: string) => {
  try {
    const response = await unAuthrizedAxios.get(`/auth/verify-email?token=${_token}`);

    if (response.data)
      return response.data;

    return Promise.reject(API_MESSAGES.ERROR.DEFAULT);
  } catch (error) {
    throw error;
  }
};

export const verifyEmail = async (verifyEmailReq: VerifyEmailReqT) => {
  try {
    const response = await unAuthrizedAxios.post(`/auth/verify-email`, { ...verifyEmailReq });

    if (response.data)
      return response.data as { token: string, message: string };

    return Promise.reject(API_MESSAGES.ERROR.DEFAULT);
  } catch (error) {
    throw error;
  }
}

export const forgotPassword = async (forogotPwReq: ForgotPwReqT) => {
  try {
    const response = await unAuthrizedAxios.post(`/auth/forgot-password`, forogotPwReq);

    if (response.data)
      return response.data as { message: string };

    return Promise.reject(API_MESSAGES.ERROR.DEFAULT);
  } catch (error: any) {
    throw {
      message: error?.response?.data?.message || API_MESSAGES.ERROR.DEFAULT
    } as { message: string };
  }
}

export const resetPassword = async (resetPwReq: ResetPasswordReqT) => {
  try {
    const response = await unAuthrizedAxios.post(`/auth/reset-password`, resetPwReq);

    if (response.data)
      return response.data as { message: string };

    return Promise.reject(API_MESSAGES.ERROR.DEFAULT);
  } catch (error: any) {
    throw {
      message: error?.response?.data?.message || API_MESSAGES.ERROR.DEFAULT
    } as { message: string };
  }
}




