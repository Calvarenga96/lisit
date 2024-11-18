import { useQuery } from "@tanstack/react-query";
import { getPlanets } from "@/services/planets/getPlanets";
import { getPerson } from "@/services/people/getPerson";
import { ApiResponse } from "@/types/api";
import { Planets } from "@/types/planets";
import useError from "../useError";

const fetchPlanetDetails = async (
    id: string
): Promise<ApiResponse<Planets>> => {
    const planetResponse = await getPlanets({ page: 1, searchQuery: id });
    const planet = planetResponse.results[0];

    if (!planet) {
        throw new Error("Planet not found.");
    }

    const residents = await fetchResidents(planet.residents as string[]);
    return {
        ...planetResponse,
        results: [
            {
                ...planet,
                residents,
            },
        ],
    };
};

const fetchResidents = async (residentUrls: string[]) => {
    return Promise.all(
        residentUrls.map(async (url) => {
            const id = parseInt(url.split("/")[5]);
            return await getPerson({ id });
        })
    );
};

const queryFnHandler = (useGetPlanet: boolean, id: string) => {
    return useGetPlanet && id
        ? fetchPlanetDetails(id)
        : getPlanets({ page: 1, searchQuery: id });
};

export function usePlanetDetails(
    id: string | undefined,
    useGetPlanet: boolean = false
) {
    const queryKey = ["planet", id];

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey,
        queryFn: () => (id ? queryFnHandler(useGetPlanet, id) : null),
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
