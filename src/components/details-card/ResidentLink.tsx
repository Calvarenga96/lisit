import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { TooltipContent, Tooltip, TooltipTrigger } from "../ui/tooltip";

interface ResidentLinkProps {
    name: string;
}

export default function ResidentLink({ name }: ResidentLinkProps) {
    return (
        <Tooltip>
            <TooltipTrigger>
                <Link to={`/people/${name}`} className="hover:underline">
                    <Badge className="bg-yellow-400 text-[#121A21] hover:text-yellow-400 duration-300">
                        {name}
                    </Badge>
                </Link>
            </TooltipTrigger>

            <TooltipContent>Haz clic para ver más</TooltipContent>
        </Tooltip>
    );
}
