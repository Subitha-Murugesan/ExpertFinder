import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Integrations</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Connect data sources to improve expertise detection accuracy
        </p>
      </div>

      <div className="space-y-3">
        {integrations.map((integration) => (
          <Card key={integration.name} className="border">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <integration.icon className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{integration.name}</p>
                    {integration.connected && (
                      <Badge variant="secondary" className="text-[10px] font-mono text-expert-green">
                        Connected
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{integration.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {integration.connected && (
                  <span className="font-mono text-xs text-muted-foreground hidden sm:block">
                    {integration.docsCount}
                  </span>
                )}
                <Switch checked={integration.connected} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border border-dashed">
        <CardContent className="p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Need a custom integration?{" "}
            <button className="text-primary hover:underline">Contact support</button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
