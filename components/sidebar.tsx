"use client"

import { cn } from "@/lib/utils";
import { Code, LayoutDashboard, MessageSquare, Settings } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"]});

const routes = [
    {
        label: "Dashboard",
        icon : LayoutDashboard,
        href: "/dashboard",
        colour: "text-orange-700"
    },
    {
        label: "Conversation",
        icon : MessageSquare,
        href: "/conversation",
        colour: "text-violet-500"
    },
    {
        label: "Code Generation",
        icon : Code,
        href: "/code",
        colour: "text-green-700"
    },
    {
        label: "Settings",
        icon : Settings,
        href: "/settings"
    },
    ];

    // #111827 bg-[#4B2550]

const Sidebar = () => {
    return (
      <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
        <div className="px-3 py-2 flex-1">
            <Link href="/dashboard" 
            className="flex items-center pl-3 mb-14">
                <div className="relative w-8 h-8 mr-4">
                    <Image fill alt="logo" src="/logo.png"/>
                </div>
                <h1 className={cn("text-2xl font-bold", montserrat.className)}>CodeConverse</h1>
            </Link>

            <div className="space-y-1">{
                routes.map((route) => (
                    <Link href={route.href}
                        key={route.href}
                        className="text-sm flex p-3 w-full justify-start font-medium cursor-pointer
                                    hover:text-white hover:bg-white/10 rounded-lg transition">
                        <div className="flex items-center flex-1">
                            <route.icon className={cn("h-5 w-5 mr-3",route.colour)}/>
                            {route.label}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </div>
      );
}

export default Sidebar;