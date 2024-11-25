import { Link } from "react-router-dom";
import MenuLink from "./MenuLink";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "./ui/navigation-menu";
import { links } from "@/constants/links";

export function AppNavigationMenu() {
    return (
        <NavigationMenu className="flex flex-col gap-2 justify-between w-full p-4 md:p-8 md:flex-row border-b-2 border-b-white">
            <div>
                <span className="text-white text-4xl font-bold hover:text-yellow-400 hover:cursor-pointer duration-300">
                    <Link to="/">Star Wars</Link>
                </span>
            </div>

            <NavigationMenuList className="flex gap-5">
                {links.map((link, index) => (
                    <NavigationMenuItem key={index}>
                        <MenuLink to={link.to} label={link.label} />
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
