import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const projects = [
  {
    name: "Real-time Analytics Pipeline",
    description: "Build a streaming data pipeline for real-time product analytics",
    requiredSkills: ["Kafka", "Spark", "Python", "BigQuery"],
    status: "Staffing",
    recommendations: [
      { name: "Lena Kowalski", match: 94, matchedSkills: ["Spark", "BigQuery"] },
      { name: "Marcus Johnson", match: 87, matchedSkills: ["Python"] },
      { name: "James O'Brien", match: 72, matchedSkills: ["Kafka"] },
    ],
  },
  {
    name: "Zero Trust Network Overhaul",
    description: "Implement zero-trust architecture across all internal services",
    requiredSkills: ["Zero Trust", "IAM", "Kubernetes", "Terraform"],
    status: "Planning",
    recommendations: [
      { name: "Aisha Patel", match: 96, matchedSkills: ["Zero Trust", "IAM"] },
      { name: "Sarah Chen", match: 91, matchedSkills: ["Kubernetes", "Terraform"] },
      { name: "James O'Brien", match: 68, matchedSkills: ["Terraform"] },
    ],
  },
  {
    name: "Design System v2",
    description: "Rebuild the component library with accessibility and performance improvements",
    requiredSkills: ["React", "TypeScript", "Design Systems", "Performance"],
    status: "Active",
    recommendations: [
      { name: "Tom Rivera", match: 98, matchedSkills: ["React", "TypeScript", "Design Systems", "Performance"] },
      { name: "Carlos Mendez", match: 74, matchedSkills: ["React"] },
    ],
  },
];

const statusColor: Record<string, string> = {
  Active: "bg-expert-green/10 text-expert-green",
  Staffing: "bg-expert-amber/10 text-expert-amber",
  Planning: "bg-primary/10 text-primary",
};

export default function ProjectRecommendations() {
  return (
    <div className="p-8 max-w-[960px] mx-auto space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Project Recommendations</h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          AI-suggested experts for your active and upcoming projects
        </p>
      </div>

      <div className="space-y-5">
        {projects.map((project) => (
          <Card key={project.name} className="bg-card shadow-sm">
            <CardHeader className="pb-0 pt-5 px-5">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <CardTitle className="text-sm font-medium">{project.name}</CardTitle>
                    <Badge className={`text-[10px] font-mono border-0 ${statusColor[project.status] || ""}`}>
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{project.description}</p>
                  <div className="flex gap-1.5 mt-2.5 flex-wrap">
                    {project.requiredSkills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-[10px] font-mono font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              <div className="divide-y">
                {project.recommendations.map((rec) => (
                  <Link
                    key={rec.name}
                    to={`/profiles/${encodeURIComponent(rec.name)}`}
                    className="flex items-center justify-between px-5 py-3.5 hover:bg-muted/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <span className="text-[10px] font-medium text-secondary-foreground">
                          {rec.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{rec.name}</p>
                        <div className="flex gap-1 mt-0.5">
                          {rec.matchedSkills.map((s) => (
                            <Badge key={s} variant="secondary" className="text-[9px] font-mono font-normal h-4">
                              {s}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-sm font-semibold">{rec.match}%</span>
                      <span className="text-[10px] text-muted-foreground">match</span>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
