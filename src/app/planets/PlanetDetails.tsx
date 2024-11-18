import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import LoaderLayout from "@/components/LoaderLayout";
import DetailsCard from "@/components/details-card/DetailsCard";
import ErrorMessage from "@/components/ErrorMessage";
import { usePlanetDetails } from "@/hooks/planets/usePlanetDetails";

export default function PlanetsDetails() {
    const { id } = useParams();
    const { planet, isLoading, isError, refetch, errorMessage } =
        usePlanetDetails(id, true);

    if (isLoading) {
        return (
            <Layout>
                <LoaderLayout />
            </Layout>
        );
    }

    if (isError) {
        return (
            <Layout>
                <ErrorMessage errorMessage={errorMessage} onRetry={refetch} />
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="flex justify-center items-center flex-col h-screen p-2 md:p-2 lg:p-0">
                {planet && (
                    <DetailsCard
                        data={planet}
                        type="planet"
                        backLink="/planets"
                        returnTo="planetas"
                        title="planeta"
                    />
                )}
            </div>
        </Layout>
    );
}
