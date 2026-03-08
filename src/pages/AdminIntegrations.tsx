import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { MessageSquare, FileText, GitBranch, Mail, Calendar, Database } from "lucide-react";

const integrations = [
  { name: "Slack", description: "Analyze messages and channel activity to detect expertise", icon: MessageSquare, connected: true, docsCount: "24K messages" },
  { name: "Confluence", description: "Index documentation and wiki contributions", icon: FileText, connected: true, docsCount: "1.2K pages" },
  { name: "GitHub", description: "Track code contributions, reviews, and repositories", icon: GitBranch, connected: true, docsCount: "89 repos" },
  { name: "Gmail", description: "Analyze email threads for domain expertise signals", icon: Mail, connected: false, docsCount: "—" },
  { name: "Google Calendar", description: "Detect expertise from meeting topics and participants", icon: Calendar, connected: false, docsCount: "—" },
  { name: "Jira", description: "Analyze ticket history and project involvement", icon: Database, connected: false, docsCount: "—" },
];

export default function AdminIntegrations() {
  return (
    <div className="p-8 max-w-[800px] mx-auto space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Integrations</h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Connect data sources to improve expertise detection accuracy
        </p>
      </div>

      <div className="space-y-2.5">
        {integrations.map((integration) => (
          <Card key={integration.name} className="bg-card shadow-sm">
            <CardContent className="p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <integration.icon className="h-4.5 w-4.5 text-muted-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{integration.name}</p>
                    {integration.connected && (
                      <Badge className="text-[9px] font-mono border-0 bg-expert-green/10 text-expert-green h-4">
                        Connected
                      </Badge>
                    )}
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-0.5 truncate">{integration.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                {integration.connected && (
                  <span className="font-mono text-[11px] text-muted-foreground hidden sm:block">
                    {integration.docsCount}
                  </span>
                )}
                <Switch checked={integration.connected} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-dashed bg-transparent shadow-none">
        <CardContent className="p-6 text-center">
          <p className="text-xs text-muted-foreground">
            Need a custom integration?{" "}
            <button className="text-primary hover:underline font-medium">Contact support</button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
