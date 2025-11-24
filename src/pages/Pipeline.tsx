import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, User } from "lucide-react";
import { motion } from "framer-motion";

const stages = [
  {
    id: "qualified",
    title: "Qualified",
    deals: [
      { id: 1, company: "Acme Corp", value: 45000, contact: "John Smith" },
      { id: 2, company: "TechStart Inc", value: 32000, contact: "Sarah Johnson" },
    ],
  },
  {
    id: "proposal",
    title: "Proposal Sent",
    deals: [
      { id: 3, company: "Global Solutions", value: 67000, contact: "Mike Brown" },
      { id: 4, company: "Innovation Labs", value: 28000, contact: "David Lee" },
    ],
  },
  {
    id: "negotiation",
    title: "Negotiation",
    deals: [
      { id: 5, company: "Digital Ventures", value: 89000, contact: "Emma Wilson" },
    ],
  },
  {
    id: "closed",
    title: "Closed Won",
    deals: [
      { id: 6, company: "Future Tech", value: 125000, contact: "Lisa Anderson" },
    ],
  },
];

const Pipeline = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Sales Pipeline</h1>
        <p className="text-muted-foreground mt-2">
          Visualize and manage your deals through the sales process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stages.map((stage, stageIndex) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: stageIndex * 0.1 }}
          >
            <Card className="glass h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{stage.title}</CardTitle>
                  <Badge variant="secondary">{stage.deals.length}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {stage.deals.map((deal) => (
                  <motion.div
                    key={deal.id}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all cursor-pointer"
                  >
                    <h4 className="font-semibold mb-2">{deal.company}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-success">
                        <DollarSign className="h-4 w-4" />
                        <span className="font-semibold">
                          ${deal.value.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{deal.contact}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Pipeline Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Total Deals</p>
              <p className="text-3xl font-bold">7</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Total Value</p>
              <p className="text-3xl font-bold text-success">$386K</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Average Deal Size</p>
              <p className="text-3xl font-bold">$55K</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Win Rate</p>
              <p className="text-3xl font-bold text-primary">32%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Pipeline;
