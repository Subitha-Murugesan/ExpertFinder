import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useLocation } from "react-router-dom";
import { Bell, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const routeTitles: Record<string, string> = {
  "/": "Dashboard",
  "/search": "Search Experts",
  "/profiles": "Profiles",
  "/projects": "Projects",
  "/admin": "Integrations",
};

export function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const pathBase = "/" + (location.pathname.split("/")[1] || "");
  const title = routeTitles[pathBase] || "ExpertFinder";

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted/30">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center justify-between border-b bg-card px-4 shrink-0">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <Separator orientation="vertical" className="h-5" />
              <span className="text-sm font-medium text-muted-foreground">{title}</span>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                <HelpCircle className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground relative">
                <Bell className="h-4 w-4" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary" />
              </Button>
              <Separator orientation="vertical" className="h-5 mx-1" />
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center cursor-pointer">
                <span className="text-xs font-medium text-primary-foreground">JD</span>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
