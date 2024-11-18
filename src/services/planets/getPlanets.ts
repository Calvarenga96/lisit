import axios from "@/config/axios";
import { ApiResponse } from "@/types/api";
import { Planets } from "@/types/planets";

interface GetPlanetsParams {
    page: number;
    searchQuery?: string;
}

export const getPlanets = async ({
    page = 1,
    searchQuery = "",
}: GetPlanetsParams): Promise<ApiResponse<Planets>> => {
    const params = {
        page,
        search: searchQuery || "",
    };

    try {
        const response = await axios.get("/planets/", { params });

        if (!response || !response.data) {
            throw new Error("No data received");
        }

        return response.data;
    } catch (error: any) {
        console.error("Error fetching planets:", error);
        throw new Error("Error al obtener los datos de los planetas.");
    }
};
