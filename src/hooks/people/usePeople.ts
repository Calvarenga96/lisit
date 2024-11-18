import { getPeople } from "@/services/people/getPeople";
import { useQuery } from "@tanstack/react-query";
import useError from "../useError";

export default function usePeople(page: number, searchQuery: string) {
    const queryKey = ["people", page, searchQuery];

    const { data, isLoading, isFetching, isError, error, refetch } = useQuery({
        queryKey,
        queryFn: () => getPeople({ page, searchQuery }),
    });

    const errorMessage = useError(error);

    return { data, isLoading, isFetching, isError, errorMessage, refetch };
}
