import axios from "@/config/axios";

interface GetPlanetsParams {
    page: number;
    searchQuery?: string;
}

export const getPlanets = async ({
    page = 1,
    searchQuery = "",
}: GetPlanetsParams) => {
    const params = {
        page,
        search: searchQuery || "",
    };

    try {
        const { data } = await axios.get("/planets/", { params });
        return data;
    } catch (error: any) {
        console.error("Error fetching planets:", error);
        throw new Error("Error al obtener los datos de las personas.");
    }
};
