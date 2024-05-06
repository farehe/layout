import axios from "axios";
import { API_MESSAGES } from "~/store/apiMessages";
import { myAxios } from "~/store/constants";
import { CreateUpdateT } from "~/types/updatesT";
import { handleAxiosError } from "~/utils";

export async function createUpdate(_params: CreateUpdateT) {
    try {
        const _response = await myAxios.post("/posts", _params);
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

export async function editUpdate({ id, params }: {
    id: number,
    params: CreateUpdateT
}) {
    console.log(id, params);
    try {
        const _response = await myAxios.put(`/posts/${id}`, params);
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


export async function getUpdates(_query: string) {
    try {
        const _response = await myAxios.get("/posts" + '?' + _query);

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

export async function getUpdate(_id: number) {
    try {
        const _response = await myAxios.get(`/posts/${_id}`);

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

export async function deleteUpdate(_id: number) {
    try {
        const _response = await myAxios.delete(`/posts/${_id}`);
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
