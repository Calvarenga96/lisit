import { useQuery } from "@tanstack/react-query";
import { getPerson } from "@/services/people/getPerson";
import { getPeople } from "@/services/people/getPeople";

const queryFnHandler = async (id: string) => {
    const data = await getPeople({ page: 1, searchQuery: id });
    const idPerson = data.results[0].url.split("/")[5];
    return await getPerson({ id: parseInt(idPerson) });
};

export function usePersonDetails(id: string, useGetPerson = false) {
    const queryKey = ["person", id, useGetPerson];

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey,
        queryFn: async () => await queryFnHandler(id),
        enabled: !!id,
    });

    const errorMessage = isError
        ? error instanceof Error
            ? error.message
            : "Error desconocido"
        : "";

    return {
        person: data,
        isLoading,
        isError,
        errorMessage,
        refetch,
    };
}
