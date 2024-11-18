import { useState } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import ErrorMessage from "@/components/ErrorMessage";
import Pagination from "@/components/Pagination";
import LoaderLayout from "@/components/LoaderLayout";
import TitleAndSearch from "@/components/TitleAndSearch";
import { Link } from "react-router-dom";
import useStarships from "@/hooks/starships/useStarships";

export default function People() {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const { data, isLoading, isError, errorMessage, refetch } = useStarships(
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
                <div className="p-4 md:p-8 w-full min-h-screen relative">
                    <TitleAndSearch
                        title="Naves de Star Wars"
                        onSearch={handleSearch}
                    />
                    {renderLoader()}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 min-h-[500px]">
                        {data?.results.map((starship: any) => (
                            <li key={starship.name}>
                                <Link to={`/starships/${starship.name}`}>
                                    <Card title={starship.name} />
                                </Link>
                            </li>
                        ))}
                    </ul>

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
