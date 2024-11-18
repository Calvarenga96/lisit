import axios from "@/config/axios";
import { ApiResponse } from "@/types/api";
import { People } from "@/types/people";

interface GetPeopleParams {
    page: number;
    searchQuery?: string;
}

export const getPeople = async ({
    page = 1,
    searchQuery = "",
}: GetPeopleParams): Promise<ApiResponse<People>> => {
    const params = {
        page,
        search: searchQuery || "",
    };

    try {
        const response = await axios.get("/people/", { params });

        if (!response || !response.data) {
            throw new Error("No data received");
        }

        return response.data;
    } catch (error: any) {
        console.error("Error fetching people:", error);
        throw new Error("Error al obtener los datos de las personas.");
    }
};
