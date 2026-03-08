import { Users, Search, FolderKanban, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Total Experts", value: "1,247", icon: Users, change: "+12%" },
  { label: "Searches Today", value: "89", icon: Search, change: "+24%" },
  { label: "Active Projects", value: "34", icon: FolderKanban, change: "+3" },
  { label: "Skills Tracked", value: "562", icon: TrendingUp, change: "+47" },
];

const recentExperts = [
  { name: "Sarah Chen", role: "Staff Engineer", skills: ["Kubernetes", "Go", "Distributed Systems"], score: 97 },
  { name: "Marcus Johnson", role: "ML Engineer", skills: ["PyTorch", "NLP", "Python"], score: 94 },
  { name: "Aisha Patel", role: "Security Lead", skills: ["Pen Testing", "Zero Trust", "IAM"], score: 92 },
  { name: "Tom Rivera", role: "Frontend Architect", skills: ["React", "TypeScript", "Design Systems"], score: 91 },
  { name: "Lena Kowalski", role: "Data Engineer", skills: ["Spark", "Airflow", "dbt"], score: 88 },
];

const trendingSkills = [
  { name: "Rust", growth: "+340%" },
  { name: "LLM Fine-tuning", growth: "+280%" },
  { name: "WebAssembly", growth: "+190%" },
  { name: "Edge Computing", growth: "+150%" },
  { name: "RAG Pipelines", growth: "+120%" },
];

export default function Dashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Overview of your organization's expertise landscape
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <stat.icon className="h-4 w-4 text-muted-foreground" />
                <span className="font-mono text-xs text-expert-green">{stat.change}</span>
              </div>
              <div className="mt-3">
                <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Experts */}
        <div className="lg:col-span-2">
          <Card className="border">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-medium">Top Experts</CardTitle>
                <Link to="/search" className="text-xs text-primary hover:underline flex items-center gap-1">
                  View all <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {recentExperts.map((expert) => (
                  <Link
                    key={expert.name}
                    to={`/profiles/${encodeURIComponent(expert.name)}`}
                    className="flex items-center justify-between px-5 py-3 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <span className="text-xs font-medium text-secondary-foreground">
                          {expert.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{expert.name}</p>
                        <p className="text-xs text-muted-foreground">{expert.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="hidden sm:flex gap-1">
                        {expert.skills.slice(0, 2).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-[10px] font-mono">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <span className="font-mono text-xs text-muted-foreground w-8 text-right">{expert.score}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trending Skills */}
        <Card className="border">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium">Trending Skills</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {trendingSkills.map((skill, i) => (
                <div key={skill.name} className="flex items-center justify-between px-5 py-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground w-4">{i + 1}</span>
                    <span className="text-sm">{skill.name}</span>
                  </div>
                  <span className="font-mono text-xs text-expert-green">{skill.growth}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
