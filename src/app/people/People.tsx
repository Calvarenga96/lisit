import { useState } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import ErrorMessage from "@/components/ErrorMessage";
import Pagination from "@/components/Pagination";
import usePeople from "@/hooks/people/usePeople";
import LoaderLayout from "@/components/LoaderLayout";
import TitleAndSearch from "@/components/TitleAndSearch";
import { Link } from "react-router-dom";

export default function People() {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const { data, isLoading, isError, errorMessage, refetch } = usePeople(
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
                        title="Personas de Star Wars"
                        onSearch={handleSearch}
                    />
                    {renderLoader()}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 min-h-[500px]">
                        {data?.results.map((person: any) => (
                            <li key={person.name}>
                                <Link to={`/people/${person.name}`}>
                                    <Card title={person.name} />
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
