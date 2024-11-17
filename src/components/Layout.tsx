import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />

            <main className="w-full">
                <div className="md:hidden flex items-center justify-center p-4">
                    <SidebarTrigger className="text-white text-2xl bg-gray-900 border-2 border-gray-900 hover:bg-yellow-400 hover:border-yellow-400 rounded-full p-4 transition-all duration-300" />
                </div>

                {children}
            </main>
        </SidebarProvider>
    );
}
