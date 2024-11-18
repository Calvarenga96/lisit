import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

const SearchBar = ({ onSearch, placeholder = "Buscar" }: SearchBarProps) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="flex items-center justify-start mb-6 w-full bg-[#243647] rounded-md px-2">
            <FaSearch className="text-white" />

            <Input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="text-white w-full border-none focus:ring-0 focus:border-0 outline-none"
            />
        </div>
    );
};

export default SearchBar;
