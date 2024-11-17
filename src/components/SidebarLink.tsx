import { Link } from "react-router-dom";

interface SidebarLinkProps {
    to: string;
    label: string;
    icon: JSX.Element;
}

function SidebarLink({ to, label, icon }: SidebarLinkProps) {
    return (
        <Link to={to} aria-label={`Ir a ${label}`} className="w-full">
            <div className="flex items-center gap-4 text-lg text-white hover:text-yellow-400 hover:bg-gray-700 duration-300 ease-in-out transition-all py-2 px-3 rounded-md">
                {icon}
                <span className="text-lg">{label}</span>
            </div>
        </Link>
    );
}

export default SidebarLink;
