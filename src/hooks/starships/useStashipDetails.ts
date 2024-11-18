import { useQuery } from "@tanstack/react-query";
import { getStarships } from "@/services/starships/getStarships";

export function useStarshipDetails(id: string | undefined) {
    const queryKey = ["starship", id];

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey,
        queryFn: () => getStarships({ page: 1, searchQuery: id }),
        enabled: !!id,
    });

    const errorMessage = isError
        ? error instanceof Error
            ? error.message
            : "Error desconocido"
        : "";

    return {
        starship: data?.results?.[0] || null,
        isLoading,
        isError,
        errorMessage,
        refetch,
    };
}
