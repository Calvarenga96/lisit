import axios from "@/config/axios";
import { People } from "@/types/people";

interface GetPersonParams {
    id: number;
}

export const getPerson = async ({ id }: GetPersonParams): Promise<People> => {
    try {
        const { data } = await axios.get(`/people/${id}`);
        return data;
    } catch (error: any) {
        console.error("Error fetching person:", error);
        throw new Error("Error al obtener los datos de la persona.");
    }
};
