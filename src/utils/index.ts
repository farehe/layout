import { toast } from "react-hot-toast";
import { API_MESSAGES } from "~/store/apiMessages";

export const handleAxiosError = (_data: { message: string }) => {
    if (_data.message) {
        toast.error(_data.message);
    } else {
        toast.error(API_MESSAGES.ERROR.DEFAULT);
    }
}

export const emailRegex = /^(?:[a-zA-Z0-9._-]+@(?:gmail|yahoo|hotmail|outlook)\.(?:com|net|org|edu|gov|co|uk|io))$/i;

export const evaluatePasswordStrength = (password: string) => {
    if (password.length === 0)
        return null;
    if (password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[!@#$%^&*()_+]/.test(password)) {
        return "perfect";
    } else if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
        return "excellent";
    } else if (password.length >= 6 && /[A-Z]/.test(password) && /[a-z]/.test(password)) {
        return "good";
    } else {
        return "poor";
    }
};


export const convertObjectToQueryParams = (obj: { [x: string]: number | string }) => {
    const str = [];
    for (const p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
        }
    return str.join('&');
};