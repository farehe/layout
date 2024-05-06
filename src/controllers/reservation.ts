import axios from "axios";
import { API_MESSAGES } from "~/store/apiMessages";
import { myAxios } from "~/store/constants";
import { handleAxiosError } from "~/utils";




export async function getReservations(_query: string) {
    try {
        const _response = await myAxios.get("/reservations" + '?' + _query);

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