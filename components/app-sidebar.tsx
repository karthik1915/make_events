"use client";

import * as React from "react";
import {
  BookOpen,
  Command,
  Frame,
  LifeBuoy,
  ScanSearch,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavTools } from "@/components/nav-tools";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { User } from "@supabase/supabase-js";
import { ThemeSwitcher } from "./theme-switcher";
import Link from "next/link";
import { usePathname } from "next/navigation";

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & { user: User };

export function AppSidebar({ user, ...props }: AppSidebarProps) {
  const currPath = usePathname();

  const data = {
    navMain: [
      {
        title: "Projects",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: "TODO : Projects list of user",
            url: "#",
          },
        ],
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Introduction",
            url: "/dashboard/documentation",
          },
          {
            title: "Get Started",
            url: "/dashboard/documentation/getting-started",
          },
          {
            title: "Tutorials",
            url: "/dashboard/documentation/tutorials",
          },
          {
            title: "Changelog",
            url: "/dashboard/documentation/change-logs",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "General",
            url: "/dashboard/settings",
          },
        ],
      },
    ],
    navSecondary: [
      {
        title: "support",
        url: "/dashboard/support",
        icon: LifeBuoy,
        isActive: currPath.includes("/dashboard/support"),
      },
      {
        title: "feedback",
        url: "/dashboard/feedback",
        icon: Send,
        isActive: currPath.includes("/dashboard/feedback"),
      },
    ],
    tools: [
      {
        name: "PDF Generator",
        url: "/dashboard/pdf-generator",
        icon: Frame,
        isActive: currPath.includes("/dashboard/pdf-generator"),
      },
      {
        name: "Verify Tickets",
        url: "/dashboard/verify-tickets",
        icon: ScanSearch,
        isActive: currPath.includes("/dashboard/verify-tickets"),
      },
    ],
  };

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Make Events</span>
                  <span className="truncate text-xs">Dashboard</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavTools tools={data.tools} />
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className="flex flex-row items-center">
        <NavUser user={user} />
        <ThemeSwitcher />
      </SidebarFooter>
    </Sidebar>
  );
}
