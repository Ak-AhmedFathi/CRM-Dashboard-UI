import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Mail, Phone, MapPin } from "lucide-react";

const customers = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 234-567-8901",
    company: "Acme Corp",
    location: "New York, USA",
    status: "active",
    revenue: "$125,000",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+1 234-567-8902",
    company: "TechStart Inc",
    location: "San Francisco, USA",
    status: "active",
    revenue: "$89,500",
  },
  {
    id: 3,
    name: "Mike Brown",
    email: "mike.b@example.com",
    phone: "+1 234-567-8903",
    company: "Global Solutions",
    location: "London, UK",
    status: "inactive",
    revenue: "$45,000",
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma.w@example.com",
    phone: "+1 234-567-8904",
    company: "Digital Ventures",
    location: "Austin, USA",
    status: "active",
    revenue: "$198,000",
  },
];

const Customers = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Customers</h1>
          <p className="text-muted-foreground mt-2">
            View and manage your customer relationships.
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Customer
        </Button>
      </div>

      <Card className="glass p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers..."
              className="pl-10 bg-background/50"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {customers.map((customer) => (
            <Card key={customer.id} className="glass-hover p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {customer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{customer.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {customer.company}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        customer.status === "active"
                          ? "bg-success/10 text-success border-success/20"
                          : "bg-muted/50 text-muted-foreground border-border"
                      }
                    >
                      {customer.status}
                    </Badge>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      {customer.email}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      {customer.phone}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {customer.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Total Revenue
                      </p>
                      <p className="text-xl font-bold text-success">
                        {customer.revenue}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Customers;
