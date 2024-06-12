"use client"

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Code",
    icon: Code,
    href: "/code",
    color: "text-green-700",
    bgColor: "bg-green-700/10",
  },
]
const DashboardPage = () => {

  const router = useRouter();

    return (
        <div className="mt-20 pt-20">
          <div className="mb-8 space-y-4">
            <h2 className="text-2xl text-center font-bold md:text-4xl">Embrace the possibilities of AI</h2>
          </div>
          <div className="px-4 md:px-20 lg:px-32 space-y-4">
            {tools.map((tool) => (
              <Card key={tool.href}
                    onClick={() => router.push(tool.href)}
                    className="p-4 flex justify-between items-center 
                    border-black/5 hover:shadow-md transition cursor-pointer">
                      <div className="flex items-center gap-x-4">
                        <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                          <tool.icon className={cn("w-8 h-8", tool.color)}/>
                        </div>
                        <div className="font-semibold">
                          {tool.label}
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6"/>
              </Card>
            ))}
          </div>
        </div>
      );
}

export default DashboardPage;