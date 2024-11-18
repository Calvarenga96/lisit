import { Link } from "react-router-dom";

interface MenuLinkProps {
    to: string;
    label: string;
}

function MenuLink({ to, label }: MenuLinkProps) {
    return (
        <Link to={to} aria-label={`Ir a ${label}`} className="w-full">
            <div className="text-lg text-white border-b border-b-[#121A21] hover:border-b-yellow-400 hover:text-yellow-400 duration-300 ease-in-out transition-all">
                <span className="text-lg">{label}</span>
            </div>
        </Link>
    );
}

export default MenuLink;
