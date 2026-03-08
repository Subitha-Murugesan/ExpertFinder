import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail, MapPin, Calendar, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const expertData: Record<string, {
  name: string; role: string; department: string; location: string; email: string; joined: string;
  bio: string; score: number;
  skills: { name: string; level: number; source: string }[];
  projects: { name: string; role: string; date: string }[];
  contributions: { type: string; count: number }[];
}> = {
  "Sarah Chen": {
    name: "Sarah Chen", role: "Staff Engineer", department: "Platform", location: "San Francisco, CA",
    email: "sarah.chen@company.com", joined: "Mar 2020", bio: "Expert in distributed systems and cloud-native infrastructure. Led the migration of 200+ services to Kubernetes.",
    score: 97,
    skills: [
      { name: "Kubernetes", level: 98, source: "Projects + Docs" },
      { name: "Go", level: 95, source: "Code commits" },
      { name: "Distributed Systems", level: 93, source: "Docs + Talks" },
      { name: "Terraform", level: 88, source: "Code commits" },
      { name: "gRPC", level: 82, source: "Code commits" },
      { name: "Prometheus", level: 78, source: "Projects" },
    ],
    projects: [
      { name: "K8s Platform Migration", role: "Tech Lead", date: "2024" },
      { name: "Service Mesh Rollout", role: "Architect", date: "2023" },
      { name: "Observability Stack", role: "Contributor", date: "2023" },
    ],
    contributions: [
      { type: "Code commits", count: 1247 },
      { type: "Code reviews", count: 834 },
      { type: "Documents authored", count: 67 },
      { type: "Slack answers", count: 312 },
    ],
  },
};

const fallback = {
  name: "Employee", role: "Engineer", department: "Engineering", location: "Remote",
  email: "employee@company.com", joined: "Jan 2022", bio: "Skilled engineer contributing across multiple projects.",
  score: 85,
  skills: [
    { name: "TypeScript", level: 90, source: "Code commits" },
    { name: "React", level: 85, source: "Projects" },
    { name: "Node.js", level: 80, source: "Code commits" },
  ],
  projects: [{ name: "Internal Tool", role: "Developer", date: "2024" }],
  contributions: [
    { type: "Code commits", count: 450 },
    { type: "Code reviews", count: 200 },
  ],
};

export default function EmployeeProfile() {
  const { name } = useParams<{ name: string }>();
  const decodedName = decodeURIComponent(name || "");
  const profile = expertData[decodedName] || { ...fallback, name: decodedName || "Unknown" };

  return (
    <div className="p-8 max-w-[960px] mx-auto space-y-6">
      <Link to="/search" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-3 w-3" /> Back to search
      </Link>

      {/* Header */}
      <Card className="bg-card shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="text-lg font-semibold text-primary-foreground">
                {profile.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-xl font-semibold tracking-tight">{profile.name}</h1>
                <Badge className="font-mono text-[10px] h-5">Score {profile.score}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">{profile.role} · {profile.department}</p>
              <p className="text-sm text-muted-foreground/80 mt-2 leading-relaxed">{profile.bio}</p>
              <div className="flex items-center gap-4 mt-3 flex-wrap">
                <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><MapPin className="h-3 w-3" />{profile.location}</span>
                <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><Mail className="h-3 w-3" />{profile.email}</span>
                <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><Calendar className="h-3 w-3" />Joined {profile.joined}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Skills */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-card shadow-sm">
            <CardHeader className="pb-0 pt-5 px-5">
              <CardTitle className="text-sm font-medium">AI-Generated Skill Profile</CardTitle>
              <p className="text-xs text-muted-foreground mt-0.5">Derived from code, docs, and communications</p>
            </CardHeader>
            <CardContent className="p-5 space-y-4">
              {profile.skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-muted-foreground font-mono">{skill.source}</span>
                      <span className="font-mono text-xs font-semibold w-7 text-right">{skill.level}</span>
                    </div>
                  </div>
                  <Progress value={skill.level} className="h-1.5" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Projects */}
          <Card className="bg-card shadow-sm">
            <CardHeader className="pb-0 pt-5 px-5">
              <CardTitle className="text-sm font-medium">Project History</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-3">
              <div className="divide-y">
                {profile.projects.map((project) => (
                  <div key={project.name} className="px-5 py-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center">
                        <Briefcase className="h-3.5 w-3.5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{project.name}</p>
                        <p className="text-[11px] text-muted-foreground">{project.role}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{project.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activity */}
        <Card className="bg-card shadow-sm h-fit">
          <CardHeader className="pb-0 pt-5 px-5">
            <CardTitle className="text-sm font-medium">Activity Summary</CardTitle>
          </CardHeader>
          <CardContent className="p-5 space-y-4">
            {profile.contributions.map((c) => (
              <div key={c.type}>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground">{c.type}</span>
                  <span className="font-mono text-sm font-semibold">{c.count.toLocaleString()}</span>
                </div>
                <Separator className="mt-3" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
