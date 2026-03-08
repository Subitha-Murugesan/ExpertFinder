import { useState } from "react";
import { Search as SearchIcon, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const allExperts = [
  { name: "Sarah Chen", role: "Staff Engineer", department: "Platform", skills: ["Kubernetes", "Go", "Distributed Systems", "Terraform"], score: 97, projects: 14 },
  { name: "Marcus Johnson", role: "ML Engineer", department: "AI/ML", skills: ["PyTorch", "NLP", "Python", "MLOps"], score: 94, projects: 11 },
  { name: "Aisha Patel", role: "Security Lead", department: "Security", skills: ["Pen Testing", "Zero Trust", "IAM", "SOC2"], score: 92, projects: 9 },
  { name: "Tom Rivera", role: "Frontend Architect", department: "Product", skills: ["React", "TypeScript", "Design Systems", "Performance"], score: 91, projects: 18 },
  { name: "Lena Kowalski", role: "Data Engineer", department: "Data", skills: ["Spark", "Airflow", "dbt", "BigQuery"], score: 88, projects: 12 },
  { name: "James O'Brien", role: "DevOps Lead", department: "Platform", skills: ["AWS", "CI/CD", "Docker", "Monitoring"], score: 87, projects: 22 },
  { name: "Priya Sharma", role: "Backend Engineer", department: "Product", skills: ["Java", "PostgreSQL", "Microservices", "gRPC"], score: 85, projects: 15 },
  { name: "Carlos Mendez", role: "Mobile Lead", department: "Product", skills: ["React Native", "Swift", "Kotlin", "Flutter"], score: 83, projects: 8 },
];

const departments = ["All", "Platform", "AI/ML", "Security", "Product", "Data"];

const avatarColors = [
  "bg-primary", "bg-expert-purple", "bg-expert-amber", "bg-expert-green",
  "bg-expert-red", "bg-primary", "bg-expert-purple", "bg-expert-amber",
];

export default function ExpertSearch() {
  const [query, setQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");

  const filtered = allExperts.filter((e) => {
    const matchesQuery =
      !query ||
      e.name.toLowerCase().includes(query.toLowerCase()) ||
      e.skills.some((s) => s.toLowerCase().includes(query.toLowerCase())) ||
      e.role.toLowerCase().includes(query.toLowerCase());
    const matchesDept = selectedDept === "All" || e.department === selectedDept;
    return matchesQuery && matchesDept;
  });

  return (
    <div className="p-8 max-w-[900px] mx-auto space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Search Experts</h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Find the right person for any skill or domain
        </p>
      </div>

      {/* Search bar */}
      <Card className="bg-card shadow-sm">
        <CardContent className="p-4 space-y-3">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, skill, or role..."
              className="pl-10 h-10 border-0 bg-muted/50 focus-visible:ring-1"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <SlidersHorizontal className="h-3.5 w-3.5 text-muted-foreground" />
            {departments.map((dept) => (
              <Button
                key={dept}
                variant={selectedDept === dept ? "default" : "ghost"}
                size="sm"
                className="h-7 text-xs rounded-full px-3"
                onClick={() => setSelectedDept(dept)}
              >
                {dept}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="space-y-1.5">
        <p className="text-[11px] text-muted-foreground font-mono px-1">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""}
        </p>

        <Card className="bg-card shadow-sm overflow-hidden">
          <div className="divide-y">
            {filtered.map((expert, i) => (
              <Link
                key={expert.name}
                to={`/profiles/${encodeURIComponent(expert.name)}`}
                className="flex items-center justify-between px-5 py-4 hover:bg-muted/40 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`h-9 w-9 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center shrink-0`}>
                    <span className="text-[11px] font-medium text-primary-foreground">
                      {expert.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{expert.name}</p>
                    <p className="text-[11px] text-muted-foreground">
                      {expert.role} · {expert.department}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex gap-1.5 flex-wrap justify-end">
                    {expert.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-[10px] font-mono font-normal">
                        {skill}
                      </Badge>
                    ))}
                    {expert.skills.length > 3 && (
                      <Badge variant="secondary" className="text-[10px] font-mono font-normal">
                        +{expert.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="text-right shrink-0 w-14">
                    <p className="font-mono text-sm font-semibold">{expert.score}</p>
                    <p className="font-mono text-[10px] text-muted-foreground">{expert.projects} proj</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
