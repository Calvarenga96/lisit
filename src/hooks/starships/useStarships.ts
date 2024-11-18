import { getStarships } from "@/services/starships/getStarships";
import { useQuery } from "@tanstack/react-query";
import useError from "../useError";

export default function useStarships(page: number, searchQuery: string) {
    const queryKey = ["starships", page, searchQuery];

    const { data, isLoading, isFetching, isError, error, refetch } = useQuery({
        queryKey,
        queryFn: () => getStarships({ page, searchQuery }),
    });

    const errorMessage = useError(error);

    return { data, isLoading, isFetching, isError, errorMessage, refetch };
}
