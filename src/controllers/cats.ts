import axios from "axios";
import { API_MESSAGES } from "~/store/apiMessages";
import { myAxios } from "~/store/constants";
import { CreateCatT } from "~/types/catsT";
import { handleAxiosError } from "~/utils";

export async function createCat(_params: CreateCatT) {
    try {
        const _response = await myAxios.post("/cats", _params);
        if (_response.data)
            return _response.data;

        return Promise.reject(API_MESSAGES.ERROR.DEFAULT);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            handleAxiosError(error.response?.data);
        }
        throw error;
    }
}

export async function getCats(_query?: string) {
    try {
        const _response = await myAxios.get("/cats" + (_query ? `?${_query}` : ""));

        if (_response.data)
            return _response.data;

        return Promise.reject(API_MESSAGES.ERROR.DEFAULT);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            handleAxiosError(error.response?.data);
        }
        throw error;
    }
}