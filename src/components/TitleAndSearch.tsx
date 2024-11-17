import SearchBar from "./SearchBar";

interface TitleAndSearchProps {
    title: string;
    onSearch: (query: string) => void;
}

const TitleAndSearch: React.FC<TitleAndSearchProps> = ({ title, onSearch }) => (
    <div className="flex md:justify-between flex-col md:flex-row gap-2">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center md:text-left">
            {title}
        </h1>
        <SearchBar onSearch={onSearch} />
    </div>
);

export default TitleAndSearch;
