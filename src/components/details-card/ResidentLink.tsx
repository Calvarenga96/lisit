import { Link } from "react-router-dom";

interface ResidentLinkProps {
    name: string;
}

export default function ResidentLink({ name }: ResidentLinkProps) {
    return (
        <div className="text-blue-500">
            <Link to={`/people/${name}`} className="hover:underline">
                {name}
            </Link>
        </div>
    );
}
