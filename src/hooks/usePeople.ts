import { getPeople } from "@/services/people/getPeople";
import { useQuery } from "@tanstack/react-query";

export default function usePeople(page: number, searchQuery: string) {
    const queryKey = ["people", page, searchQuery];

    const { data, isLoading, isFetching, isError, error, refetch } = useQuery({
        queryKey,
        queryFn: () => getPeople({ page, searchQuery }),
        placeholderData: (previousQuery) => previousQuery?.data,
    });

    const errorMessage = isError
        ? error instanceof Error
            ? error.message
            : "Error desconocido"
        : "";

    return { data, isLoading, isFetching, isError, errorMessage, refetch };
}
