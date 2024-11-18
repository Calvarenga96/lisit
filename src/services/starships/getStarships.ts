import axios from "@/config/axios";
import { ApiResponse } from "@/types/api";
import { Starships } from "@/types/starships";

interface GetStarshipsParams {
    page: number;
    searchQuery?: string;
}

export const getStarships = async ({
    page = 1,
    searchQuery = "",
}: GetStarshipsParams): Promise<ApiResponse<Starships>> => {
    const params = {
        page,
        search: searchQuery || "",
    };

    try {
        const response = await axios.get("/starships/", { params });

        if (!response || !response.data) {
            throw new Error("No data received");
        }

        return response.data;
    } catch (error: any) {
        console.error("Error fetching starships:", error);
        throw new Error("Error al obtener los datos de las naves.");
    }
};
