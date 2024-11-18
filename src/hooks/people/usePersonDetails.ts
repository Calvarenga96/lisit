import { useQuery } from "@tanstack/react-query";
import { getPerson } from "@/services/people/getPerson";
import { getPeople } from "@/services/people/getPeople";
import useError from "../useError";

const fetchPersonDetails = async (id: string) => {
    const peopleResponse = await getPeople({ page: 1, searchQuery: id });

    if (!peopleResponse.results?.[0]) {
        throw new Error("Person not found in search results.");
    }

    const personId = parseInt(peopleResponse.results[0].url.split("/")[5], 10);
    return await getPerson({ id: personId });
};

export function usePersonDetails(id: string, useGetPerson = false) {
    const queryKey = ["person", id, useGetPerson];

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey,
        queryFn: () => fetchPersonDetails(id),
        enabled: Boolean(id),
    });

    const errorMessage = useError(error);

    return {
        data,
        isLoading,
        isError,
        errorMessage,
        refetch,
    };
}
