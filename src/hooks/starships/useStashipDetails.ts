import { useQuery } from "@tanstack/react-query";
import { getStarships } from "@/services/starships/getStarships";

interface Starship {
    results: {
        name: string;
        model: string;
        manufacturer: string;
        cost_in_credits: string;
        length: string;
        max_atmosphering_speed: string;
        crew: string;
        passengers: string;
        cargo_capacity: string;
        consumables: string;
        hyperdrive_rating: string;
        MGLT: string;
        starship_class: string;
    }[];
}

export function useStarshipDetails(id: string | undefined) {
    const queryKey = ["starship", id];

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey,
        queryFn: () => getStarships({ page: 1, searchQuery: id }),
        enabled: !!id,
    }) as {
        data: Starship;
        isLoading: boolean;
        isError: boolean;
        error: unknown;
        refetch: () => void;
    };

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
