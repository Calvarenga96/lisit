import axios from "../../config/axios";

export const getStarships = async ({ page = 1 }: { page: number }) => {
    try {
        const { data } = await axios.get(`/starships/?page=${page}`);
        return data;
    } catch (error) {
        return error;
    }
};
