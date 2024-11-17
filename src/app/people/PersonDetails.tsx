import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import LoaderLayout from "@/components/LoaderLayout";
import { usePersonDetails } from "@/hooks/usePersonDetails";
import DetailsCard from "@/components/DetailsCard";
import ErrorMessage from "@/components/ErrorMessage";

export default function PersonDetails() {
    const { id } = useParams();
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
                {person && <DetailsCard person={person} />}
            </div>
        </Layout>
    );
}
