import { AppNavigationMenu } from "@/components/NavigationMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full bg-[#121A21]">
            <AppNavigationMenu />
            {children}
        </main>
    );
}
