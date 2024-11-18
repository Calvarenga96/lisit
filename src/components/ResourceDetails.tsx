import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import LoaderLayout from "@/components/LoaderLayout";
import DetailsCard from "@/components/details-card/DetailsCard";
import ErrorMessage from "@/components/ErrorMessage";

interface ResourceDetailsProps {
    useResourceDetails: (
        id: string,
        usePlanetDetails?: boolean
    ) => {
        data: any;
        isLoading: boolean;
        isError: boolean;
        errorMessage: string;
        refetch: () => void;
    };
    type: "person" | "starship" | "planet";
    backLink: string;
    returnTo: string;
    title: "personaje" | "nave" | "planeta";
    usePlanetDetails: boolean;
}

export default function ResourceDetails({
    useResourceDetails,
    type,
    backLink,
    returnTo,
    title,
    usePlanetDetails = false,
}: ResourceDetailsProps) {
    const { id } = useParams() as { id: string };
    const { data, isLoading, isError, refetch, errorMessage } =
        useResourceDetails(id, usePlanetDetails);

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
            <div className="flex justify-center items-center flex-col min-h-screen p-2 md:p-2 lg:p-0">
                {data && (
                    <DetailsCard
                        data={data}
                        type={type}
                        backLink={backLink}
                        returnTo={returnTo}
                        title={title}
                    />
                )}
            </div>
        </Layout>
    );
}
