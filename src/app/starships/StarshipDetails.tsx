import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import LoaderLayout from "@/components/LoaderLayout";
import DetailsCard from "@/components/details-card/DetailsCard";
import ErrorMessage from "@/components/ErrorMessage";
import { useStarshipDetails } from "@/hooks/starships/useStashipDetails";

export default function StarshipDetails() {
    const { id } = useParams();
    const { starship, isLoading, isError, refetch, errorMessage } =
        useStarshipDetails(id);

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
                {starship && (
                    <DetailsCard
                        data={starship}
                        type="starship"
                        backLink="/starships"
                        returnTo="naves"
                        title="nave"
                    />
                )}
            </div>
        </Layout>
    );
}
