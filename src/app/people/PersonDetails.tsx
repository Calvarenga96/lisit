import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import LoaderLayout from "@/components/LoaderLayout";
import { usePersonDetails } from "@/hooks/people/usePersonDetails";
import DetailsCard from "@/components/details-card/DetailsCard";
import ErrorMessage from "@/components/ErrorMessage";

export default function PersonDetails() {
    const { id } = useParams() as { id: string };
    const { person, isLoading, isError, refetch, errorMessage } =
        usePersonDetails(id);

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
                {person && (
                    <DetailsCard
                        data={person}
                        type="person"
                        backLink="/people"
                        returnTo="personas"
                        title="personaje"
                    />
                )}
            </div>
        </Layout>
    );
}
