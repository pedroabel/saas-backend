"use client";

import * as React from "react";

import {
  IconAdjustmentsHorizontal,
  IconBuildingArch,
  IconCamera,
  IconChartBar,
  IconFileAi,
  IconFileDescription,
  IconHelp,
  IconLayersSubtract,
  IconLayoutDashboard,
  IconListDetails,
  IconManualGearbox,
  IconSettings,
  IconUsers,
  IconUsersGroup,
} from "@tabler/icons-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { NavMain } from "@/components/dashboard/layout/nav-main";
import { NavSecondary } from "@/components/dashboard/layout/nav-secondary";
import { NavUser } from "@/components/dashboard/layout/nav-user";

const data = {
  user: {
    name: "Pedro Abel",
    email: "ti@clubeprosegur.com.br",
    avatar: "https://github.com/pedroabel.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconLayoutDashboard,
    },
    {
      title: "Fila",
      url: "/dashboard/fila",
      icon: IconLayersSubtract,
    },
    {
      title: "Eventos",
      url: "/dashboard/eventos",
      icon: IconListDetails,
    },
    {
      title: "Relatórios",
      url: "/dashboard/relatorios",
      icon: IconChartBar,
    },
    {
      title: "Associados",
      url: "/dashboard/associados",
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Configurações",
      url: "/dashboard/configuracao",
      icon: IconSettings,
    },
    {
      title: "Suporte",
      url: "/dashboard/suporte",
      icon: IconHelp,
    },
    // {
    //   title: "Search",
    //   url: "#",
    //   icon: IconSearch,
    // },
  ],
  organizations: [
    {
      name: "Organização",
      url: "/dashboard/organizacao",
      icon: IconBuildingArch,
    },
    {
      name: "Serviços",
      url: "/dashboard/servicos",
      icon: IconAdjustmentsHorizontal,
    },
    {
      name: "Membros",
      url: "/dashboard/membros",
      icon: IconUsersGroup,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconManualGearbox className="!size-5" />
                <span className="text-base font-semibold">Sinpro</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavOrganizations items={data.organizations} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
