import axios from "@/config/axios";

interface GetPeopleParams {
    page: number;
    searchQuery?: string;
}

export const getPeople = async ({
    page = 1,
    searchQuery = "",
}: GetPeopleParams) => {
    const params = {
        page,
        search: searchQuery || "",
    };

    try {
        const { data } = await axios.get("/people/", { params });
        return data;
    } catch (error: any) {
        console.error("Error fetching people:", error);
        throw new Error("Error al obtener los datos de las personas.");
    }
};
