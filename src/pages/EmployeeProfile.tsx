import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail, MapPin, Calendar, ExternalLink } from "lucide-react";
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

// Fallback profile
const fallback = {
  name: "Employee", role: "Engineer", department: "Engineering", location: "Remote",
  email: "employee@company.com", joined: "Jan 2022", bio: "Skilled engineer contributing across multiple projects.",
  score: 85,
  skills: [
    { name: "TypeScript", level: 90, source: "Code commits" },
    { name: "React", level: 85, source: "Projects" },
    { name: "Node.js", level: 80, source: "Code commits" },
  ],
  projects: [
    { name: "Internal Tool", role: "Developer", date: "2024" },
  ],
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
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <Link to="/search" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-3 w-3" /> Back to search
      </Link>

      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center shrink-0">
          <span className="text-xl font-semibold text-secondary-foreground">
            {profile.name.split(" ").map((n) => n[0]).join("")}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold tracking-tight">{profile.name}</h1>
            <Badge className="font-mono text-xs">Score: {profile.score}</Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-0.5">{profile.role} · {profile.department}</p>
          <p className="text-sm text-muted-foreground mt-2">{profile.bio}</p>
          <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{profile.location}</span>
            <span className="flex items-center gap-1"><Mail className="h-3 w-3" />{profile.email}</span>
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />Joined {profile.joined}</span>
          </div>
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Skills */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="border">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">AI-Generated Skill Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {profile.skills.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground">{skill.source}</span>
                      <span className="font-mono text-xs font-medium w-6 text-right">{skill.level}</span>
                    </div>
                  </div>
                  <Progress value={skill.level} className="h-1.5" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Projects */}
          <Card className="border">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">Project History</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {profile.projects.map((project) => (
                  <div key={project.name} className="px-5 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{project.name}</p>
                      <p className="text-xs text-muted-foreground">{project.role}</p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{project.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contributions */}
        <Card className="border h-fit">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium">Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {profile.contributions.map((c) => (
              <div key={c.type} className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{c.type}</span>
                <span className="font-mono text-sm font-medium">{c.count.toLocaleString()}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
