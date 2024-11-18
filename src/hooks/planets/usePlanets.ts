import { getPlanets } from "@/services/planets/getPlanets";
import { useQuery } from "@tanstack/react-query";

export default function usePlanets(page: number, searchQuery: string) {
    const queryKey = ["planets", page, searchQuery];

    const { data, isLoading, isFetching, isError, error, refetch } = useQuery({
        queryKey,
        queryFn: () => getPlanets({ page, searchQuery }),
    });

    const errorMessage = isError
        ? error instanceof Error
            ? error.message
            : "Error desconocido"
        : "";

    return { data, isLoading, isFetching, isError, errorMessage, refetch };
}
