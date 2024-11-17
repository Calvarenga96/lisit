import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar";
import SidebarLink from "./SidebarLink";
import { FaJedi } from "react-icons/fa";
import { IoIosPlanet, IoMdRocket } from "react-icons/io";

export function AppSidebar() {
    const links = [
        {
            to: "/people",
            label: "Personas",
            icon: <FaJedi className="text-2xl" aria-label="Icono de Jedi" />,
        },
        {
            to: "/planets",
            label: "Planetas",
            icon: (
                <IoIosPlanet
                    className="text-2xl"
                    aria-label="Icono de Planeta"
                />
            ),
        },
        {
            to: "/starships",
            label: "Naves",
            icon: (
                <IoMdRocket className="text-2xl" aria-label="Icono de Nave" />
            ),
        },
    ];

    return (
        <Sidebar>
            <div className="bg-gray-800 min-h-screen">
                <SidebarHeader className="py-6 flex justify-center items-center bg-gray-900">
                    <p className="font-bold text-3xl text-white">Star Wars</p>
                </SidebarHeader>

                <SidebarContent className="py-6 overflow-y-auto">
                    <SidebarGroup className="space-y-4">
                        {links.map((link) => (
                            <SidebarLink
                                key={link.to}
                                to={link.to}
                                label={link.label}
                                icon={link.icon}
                            />
                        ))}
                    </SidebarGroup>
                </SidebarContent>
            </div>
        </Sidebar>
    );
}
