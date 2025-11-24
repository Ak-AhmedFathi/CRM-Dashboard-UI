import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";

const tasks = [
  {
    id: 1,
    title: "Follow up with Acme Corp",
    description: "Send proposal and schedule demo",
    priority: "high",
    dueDate: "Today",
    assignee: "You",
    completed: false,
  },
  {
    id: 2,
    title: "Prepare quarterly report",
    description: "Compile sales data and metrics",
    priority: "medium",
    dueDate: "Tomorrow",
    assignee: "Sarah Johnson",
    completed: false,
  },
  {
    id: 3,
    title: "Client meeting with TechStart",
    description: "Discuss project timeline and budget",
    priority: "high",
    dueDate: "Today",
    assignee: "You",
    completed: true,
  },
  {
    id: 4,
    title: "Update CRM database",
    description: "Add new leads from conference",
    priority: "low",
    dueDate: "Next Week",
    assignee: "Mike Brown",
    completed: false,
  },
  {
    id: 5,
    title: "Review contract terms",
    description: "Check Digital Ventures agreement",
    priority: "medium",
    dueDate: "Tomorrow",
    assignee: "You",
    completed: false,
  },
];

const priorityColors = {
  high: "bg-destructive/10 text-destructive border-destructive/20",
  medium: "bg-warning/10 text-warning border-warning/20",
  low: "bg-primary/10 text-primary border-primary/20",
};

const Tasks = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Tasks</h1>
          <p className="text-muted-foreground mt-2">
            Manage your daily tasks and stay organized.
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Task
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="glass p-6">
          <h2 className="text-xl font-bold mb-4">Pending Tasks</h2>
          <div className="space-y-3">
            {tasks
              .filter((task) => !task.completed)
              .map((task, index) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <Checkbox className="mt-1" />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold">{task.title}</h3>
                        <Badge
                          variant="outline"
                          className={
                            priorityColors[task.priority as keyof typeof priorityColors]
                          }
                        >
                          {task.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {task.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {task.dueDate}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {task.assignee}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </Card>

        <Card className="glass p-6">
          <h2 className="text-xl font-bold mb-4">Completed Tasks</h2>
          <div className="space-y-3">
            {tasks
              .filter((task) => task.completed)
              .map((task, index) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 rounded-lg bg-card/50 border border-border/50 opacity-60"
                >
                  <div className="flex items-start gap-3">
                    <Checkbox checked className="mt-1" />
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold line-through">
                        {task.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {task.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {task.dueDate}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {task.assignee}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Tasks;
