import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import Dashboard from "./pages/Dashboard";
import ExpertSearch from "./pages/ExpertSearch";
import EmployeeProfile from "./pages/EmployeeProfile";
import ProjectRecommendations from "./pages/ProjectRecommendations";
import AdminIntegrations from "./pages/AdminIntegrations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/search" element={<ExpertSearch />} />
            <Route path="/profiles/:name" element={<EmployeeProfile />} />
            <Route path="/profiles" element={<ExpertSearch />} />
            <Route path="/projects" element={<ProjectRecommendations />} />
            <Route path="/admin" element={<AdminIntegrations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
