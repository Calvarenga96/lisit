import { useState } from "react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="flex items-center justify-center mb-6">
            <Input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Buscar"
                className="px-4 py-2 w-64 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
        </div>
    );
};

export default SearchBar;
