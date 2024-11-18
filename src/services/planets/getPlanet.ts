import axios from "@/config/axios";
import { ApiResponse } from "@/types/api";
import { Planets } from "@/types/planets";

interface GetPlanetParams {
    id: number;
}

export const getPlanet = async ({
    id,
}: GetPlanetParams): Promise<ApiResponse<Planets>> => {
    try {
        const { data } = await axios.get(`/planets/${id}`);
        return data;
    } catch (error: any) {
        console.error("Error fetching planet:", error);
        throw new Error("Error al obtener los datos del planeta.");
    }
};
