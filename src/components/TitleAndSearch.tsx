import SearchBar from "./SearchBar";

interface TitleAndSearchProps {
    title: string;
    onSearch: (query: string) => void;
    placeholder?: string;
}

export default function TitleAndSearch({
    title,
    onSearch,
    placeholder = "Buscar",
}: TitleAndSearchProps) {
    return (
        <div className="">
            <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center md:text-left">
                {title}
            </h1>

            <SearchBar onSearch={onSearch} placeholder={placeholder} />
        </div>
    );
}
