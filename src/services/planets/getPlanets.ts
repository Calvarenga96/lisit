import axios from "../../config/axios";

export const getPlanets = async ({ page = 1 }: { page: number }) => {
    try {
        const { data } = await axios.get(`/planets/?page=${page}`);
        return data;
    } catch (error) {
        return error;
    }
};
