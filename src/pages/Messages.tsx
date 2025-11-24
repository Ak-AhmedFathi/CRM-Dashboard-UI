import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Send } from "lucide-react";

const conversations = [
  {
    id: 1,
    name: "John Smith",
    company: "Acme Corp",
    lastMessage: "Thanks for the proposal. Let's schedule a call.",
    time: "2m ago",
    unread: 2,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "TechStart Inc",
    lastMessage: "Can you send me the pricing details?",
    time: "1h ago",
    unread: 0,
  },
  {
    id: 3,
    name: "Mike Brown",
    company: "Global Solutions",
    lastMessage: "The demo went great! When can we start?",
    time: "3h ago",
    unread: 1,
  },
  {
    id: 4,
    name: "Emma Wilson",
    company: "Digital Ventures",
    lastMessage: "I have some questions about the features.",
    time: "1d ago",
    unread: 0,
  },
];

const messages = [
  {
    id: 1,
    sender: "John Smith",
    message: "Hi! I reviewed your proposal.",
    time: "10:30 AM",
    isOwn: false,
  },
  {
    id: 2,
    sender: "You",
    message: "Great! What are your thoughts?",
    time: "10:32 AM",
    isOwn: true,
  },
  {
    id: 3,
    sender: "John Smith",
    message: "It looks good. Let's schedule a call to discuss next steps.",
    time: "10:35 AM",
    isOwn: false,
  },
  {
    id: 4,
    sender: "You",
    message: "Perfect! How about tomorrow at 2 PM?",
    time: "10:37 AM",
    isOwn: true,
  },
];

const Messages = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Messages</h1>
        <p className="text-muted-foreground mt-2">
          Connect with your leads and customers.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="glass p-6 lg:col-span-1">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                className="pl-10 bg-background/50"
              />
            </div>

            <div className="space-y-2">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className="p-4 rounded-lg bg-card/50 hover:bg-card/70 border border-border/50 hover:border-primary/50 transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                        {conv.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="font-semibold truncate">{conv.name}</p>
                          <p className="text-xs text-muted-foreground truncate">
                            {conv.company}
                          </p>
                        </div>
                        {conv.unread > 0 && (
                          <Badge variant="default" className="ml-2">
                            {conv.unread}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 truncate">
                        {conv.lastMessage}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {conv.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="glass p-6 lg:col-span-2">
          <div className="flex flex-col h-[600px]">
            <div className="flex items-center gap-3 pb-4 border-b border-border/50">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  JS
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">John Smith</p>
                <p className="text-sm text-muted-foreground">Acme Corp</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] p-4 rounded-lg ${
                      msg.isOwn
                        ? "bg-primary text-primary-foreground"
                        : "bg-card/70 border border-border/50"
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                    <p
                      className={`text-xs mt-1 ${
                        msg.isOwn
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-border/50">
              <Input
                placeholder="Type your message..."
                className="flex-1 bg-background/50"
              />
              <Button size="icon" className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Messages;
