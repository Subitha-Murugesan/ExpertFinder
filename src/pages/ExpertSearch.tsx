import { useState } from "react";
import { Search as SearchIcon, Filter, SlidersHorizontal } from "lucide-react";
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
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Search Experts</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Find the right person for any skill or domain
        </p>
      </div>

      {/* Search bar */}
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by name, skill, or role..."
          className="pl-10 h-11"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 flex-wrap">
        <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
        {departments.map((dept) => (
          <Button
            key={dept}
            variant={selectedDept === dept ? "default" : "outline"}
            size="sm"
            className="h-7 text-xs"
            onClick={() => setSelectedDept(dept)}
          >
            {dept}
          </Button>
        ))}
      </div>

      {/* Results */}
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground font-mono">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""}
        </p>
        <div className="space-y-2">
          {filtered.map((expert) => (
            <Link key={expert.name} to={`/profiles/${encodeURIComponent(expert.name)}`}>
              <Card className="border hover:border-primary/30 transition-colors cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <span className="text-sm font-medium text-secondary-foreground">
                        {expert.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium">{expert.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {expert.role} · {expert.department}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="hidden md:flex gap-1 flex-wrap justify-end">
                      {expert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-[10px] font-mono">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-right shrink-0 ml-2">
                      <p className="font-mono text-sm font-medium">{expert.score}</p>
                      <p className="font-mono text-[10px] text-muted-foreground">{expert.projects} projects</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
