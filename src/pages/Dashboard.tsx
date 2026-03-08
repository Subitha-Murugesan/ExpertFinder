import { Users, Search, FolderKanban, TrendingUp, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Total Experts", value: "1,247", icon: Users, change: "+12%", changeLabel: "vs last month" },
  { label: "Searches Today", value: "89", icon: Search, change: "+24%", changeLabel: "vs yesterday" },
  { label: "Active Projects", value: "34", icon: FolderKanban, change: "+3", changeLabel: "this week" },
  { label: "Skills Tracked", value: "562", icon: TrendingUp, change: "+47", changeLabel: "new skills" },
];

const recentExperts = [
  { name: "Sarah Chen", role: "Staff Engineer", department: "Platform", skills: ["Kubernetes", "Go"], score: 97 },
  { name: "Marcus Johnson", role: "ML Engineer", department: "AI/ML", skills: ["PyTorch", "NLP"], score: 94 },
  { name: "Aisha Patel", role: "Security Lead", department: "Security", skills: ["Pen Testing", "Zero Trust"], score: 92 },
  { name: "Tom Rivera", role: "Frontend Architect", department: "Product", skills: ["React", "TypeScript"], score: 91 },
  { name: "Lena Kowalski", role: "Data Engineer", department: "Data", skills: ["Spark", "Airflow"], score: 88 },
];

const trendingSkills = [
  { name: "Rust", growth: "+340%", experts: 23 },
  { name: "LLM Fine-tuning", growth: "+280%", experts: 18 },
  { name: "WebAssembly", growth: "+190%", experts: 12 },
  { name: "Edge Computing", growth: "+150%", experts: 31 },
  { name: "RAG Pipelines", growth: "+120%", experts: 14 },
];

const avatarColors = [
  "bg-primary",
  "bg-expert-purple",
  "bg-expert-amber",
  "bg-expert-green",
  "bg-expert-red",
];

export default function Dashboard() {
  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-8">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Welcome back, John</h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Here's what's happening across your organization
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-card shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center">
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <Badge variant="secondary" className="font-mono text-[10px] text-expert-green border-0 bg-expert-green/10">
                  {stat.change}
                </Badge>
              </div>
              <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Top Experts */}
        <div className="lg:col-span-3">
          <Card className="bg-card shadow-sm">
            <CardHeader className="pb-0 pt-5 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-sm font-medium">Top Experts</CardTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">Highest expertise scores this month</p>
                </div>
                <Link to="/search" className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                  View all <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              <div className="divide-y">
                {recentExperts.map((expert, i) => (
                  <Link
                    key={expert.name}
                    to={`/profiles/${encodeURIComponent(expert.name)}`}
                    className="flex items-center justify-between px-5 py-3.5 hover:bg-muted/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`h-8 w-8 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center shrink-0`}>
                        <span className="text-[11px] font-medium text-primary-foreground">
                          {expert.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{expert.name}</p>
                        <p className="text-[11px] text-muted-foreground">{expert.role} · {expert.department}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="hidden sm:flex gap-1.5">
                        {expert.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-[10px] font-mono font-normal">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="w-10 text-right">
                        <span className="font-mono text-sm font-semibold">{expert.score}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trending Skills */}
        <div className="lg:col-span-2">
          <Card className="bg-card shadow-sm">
            <CardHeader className="pb-0 pt-5 px-5">
              <CardTitle className="text-sm font-medium">Trending Skills</CardTitle>
              <p className="text-xs text-muted-foreground mt-0.5">Fastest growing expertise areas</p>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              <div className="divide-y">
                {trendingSkills.map((skill, i) => (
                  <div key={skill.name} className="flex items-center justify-between px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] text-muted-foreground w-4 text-right">{i + 1}</span>
                      <div>
                        <span className="text-sm font-medium">{skill.name}</span>
                        <p className="text-[10px] text-muted-foreground">{skill.experts} experts</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="font-mono text-[10px] text-expert-green border-0 bg-expert-green/10">
                      {skill.growth}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
