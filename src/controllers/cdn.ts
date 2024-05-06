import axios from "axios";
import { API_MESSAGES } from "~/store/apiMessages";
import { myAxios } from "~/store/constants";
import { handleAxiosError } from "~/utils";

export async function uploadMedia(_params: {
    base64: string
}) {
    try {
        const _response = await myAxios.post("/cdn/media", _params);
        if (_response.data)
            return _response.data as { id: string };

        return Promise.reject(API_MESSAGES.ERROR.DEFAULT);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            handleAxiosError(error.response?.data);
        }
        throw error;
    }
}
