import { useQuery } from "@tanstack/react-query";
import { getStarships } from "@/services/starships/getStarships";
import useError from "../useError";

export function useStarshipDetails(id: string | undefined) {
    const queryKey = ["starship", id];

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey,
        queryFn: () => getStarships({ page: 1, searchQuery: id }),
        enabled: !!id,
    });

    const errorMessage = useError(error);

    return {
        data: data?.results?.[0],
        isLoading,
        isError,
        errorMessage,
        refetch,
    };
}
