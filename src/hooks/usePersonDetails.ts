import { useQuery } from "@tanstack/react-query";
import { getPeople } from "@/services/people/getPeople";

interface Person {
    name: string;
    height: string;
    mass: string;
    birth_year: string;
    gender: string;
    hair_color: string;
    eye_color: string;
}

export function usePersonDetails(id: string | undefined) {
    const queryKey = ["person", id];

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey,
        queryFn: () => getPeople({ page: 1, searchQuery: id }),
        enabled: !!id,
    });

    const errorMessage = isError
        ? error instanceof Error
            ? error.message
            : "Error desconocido"
        : "";

    return {
        person: data?.results?.[0] || null,
        isLoading,
        isError,
        errorMessage,
        refetch,
    };
}
