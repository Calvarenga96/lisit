import axios from "axios";

const instance = axios.create({
    baseURL: "https://swapi.dev/api/",
});

const cancelTokenMap = new Map();

instance.interceptors.request.use((config) => {
    const key = config.url || "";
    if (cancelTokenMap.has(key)) {
        const cancel = cancelTokenMap.get(key);
        cancel();
        cancelTokenMap.delete(key);
    }

    const cancelTokenSource = axios.CancelToken.source();
    config.cancelToken = cancelTokenSource.token;
    cancelTokenMap.set(key, cancelTokenSource.cancel);

    return config;
});

instance.interceptors.response.use(
    (response) => {
        const key = response.config.url || "";
        cancelTokenMap.delete(key);
        return response;
    },
    (error) => {
        if (axios.isCancel(error)) {
            return;
        }

        return Promise.reject(error);
    }
);

export default instance;
