import { useState } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import ErrorMessage from "@/components/ErrorMessage";
import Pagination from "@/components/Pagination";
import LoaderLayout from "@/components/LoaderLayout";
import TitleAndSearch from "@/components/TitleAndSearch";
import { Link } from "react-router-dom";

interface ResourceListProps {
    title: string;
    useResource: (page: number, searchQuery: string) => any;
    resourcePath: string;
}

export default function ResourceList({
    title,
    useResource,
    resourcePath,
}: ResourceListProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const { data, isLoading, isError, errorMessage, refetch } = useResource(
        currentPage,
        searchQuery
    );

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    const renderLoader = () => isLoading && <LoaderLayout />;

    return (
        <Layout>
            {isError ? (
                <ErrorMessage errorMessage={errorMessage} onRetry={refetch} />
            ) : (
                <div className="p-4 md:p-8 w-full min-h-screen">
                    <TitleAndSearch title={title} onSearch={handleSearch} />

                    {renderLoader()}

                    {!isLoading && (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 min-h-[500px]">
                            {data?.results.map((item: any) => (
                                <li key={item.name}>
                                    <Link to={`/${resourcePath}/${item.name}`}>
                                        <Card title={item.name} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}

                    <Pagination
                        currentPage={currentPage}
                        hasNextPage={!!data?.next}
                        onPageChange={setCurrentPage}
                    />
                </div>
            )}
        </Layout>
    );
}
