import { getStarships } from "@/services/starships/getStarships";
import { useQuery } from "@tanstack/react-query";

export default function useStarships(page: number, searchQuery: string) {
    const queryKey = ["starships", page, searchQuery];

    const { data, isLoading, isFetching, isError, error, refetch } = useQuery({
        queryKey,
        queryFn: () => getStarships({ page, searchQuery }),
        placeholderData: (previousQuery) => previousQuery?.data,
    });

    const errorMessage = isError
        ? error instanceof Error
            ? error.message
            : "Error desconocido"
        : "";

    return { data, isLoading, isFetching, isError, errorMessage, refetch };
}
