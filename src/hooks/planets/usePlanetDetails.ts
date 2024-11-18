import { useQuery } from "@tanstack/react-query";
import { getPlanets } from "@/services/planets/getPlanets";
import { getPerson } from "@/services/people/getPerson";
import { ApiResponse } from "@/types/api";
import { Planets } from "@/types/planets";

const queryFnHandler = (useGetPlanet: boolean, id: string) => {
    if (useGetPlanet && typeof id === "string") {
        return getPlanetAndResidentsHandler({ id });
    }
    return getPlanets({ page: 1, searchQuery: id });
};

const getPlanetAndResidentsHandler = async ({ id }: { id: string }) => {
    try {
        const planet = await getPlanets({ page: 1, searchQuery: id });
        const residentsURL = planet.results[0].residents as string[];
        const residents = await Promise.all(
            residentsURL.map(async (resident: string) => {
                const id = parseInt(resident.split("/")[5]);
                return await getPerson({ id });
            })
        );

        const updatedData: ApiResponse<Planets> = {
            ...planet,
            results: planet.results.map((item) => ({
                ...item,
                residents: residents.map((resident) => resident),
            })),
        };

        return updatedData;
    } catch (error) {
        console.error(error);
    }
};

export function usePlanetDetails(
    id: string | undefined,
    useGetPlanet: boolean = false
) {
    const queryKey = ["planet", id];

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey,
        queryFn: () =>
            typeof id === "string" ? queryFnHandler(useGetPlanet, id) : null,
        enabled: !!id,
    });

    const errorMessage = isError
        ? error instanceof Error
            ? error.message
            : "Error desconocido"
        : "";

    return {
        planet: data?.results?.[0],
        isLoading,
        isError,
        errorMessage,
        refetch,
    };
}
