"use client";

import { useState, useEffect, type SetStateAction } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Copy,
  CreditCard,
  MoreVertical,
  Truck,
  Menu,
} from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SiteHeader } from "@/components/dashboard/site-header";
import { IconTicket } from "@tabler/icons-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
export default function FilaPage() {
  const [activePatient, setActivePatient] = useState("Jerome Bellingham");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile on initial render and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Auto-collapse sidebar on mobile
      if (window.innerWidth < 768) {
        setSidebarCollapsed(true);
      }
    };

    // Check on initial render
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const events = [
    {
      name: "Bessie Cooper",
      registerDate: "12/02/2023",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "20250212041",
      registerDate: "12/02/2023",
      avatar: "/placeholder.svg?height=40&width=40",
      isMember: true,
      gender: "Male",
      birthday: "12 August 2001",
      phone: "+62 837 356 343 23",
      email: "jeromebellingham93@gmail.com",
      sources: ["facebook", "google", "twitter", "whatsapp"],
      appointments: [
        {
          date: "12 Oct 2023",
          title: "Prosthetic Tooth Fabrication",
          doctor: "Dr. Wade Warren",
        },
        {
          date: "12 Sep 2023",
          title: "Post-Surgical Care",
          doctor: "Dr. Marvin McKinney",
        },
        {
          date: "12 Jul 2023",
          title: "",
          doctor: "",
        },
      ],
      history: [
        {
          id: "#12324",
          type: "Implant",
          date: "12 Jun 2023",
          result: "Well done",
          payment: "Pending",
        },
        {
          id: "#20324",
          type: "Route canal",
          date: "4 May 2023",
          result: "Well done",
          payment: "Paid",
        },
        {
          id: "#57686",
          type: "Dentures",
          date: "2 Mar 2023",
          result: "Well done",
          payment: "Paid",
        },
        {
          id: "#68767",
          type: "Whitening",
          date: "16 Feb 2023",
          result: "Well done",
          payment: "Paid",
        },
        {
          id: "#69696",
          type: "Implant",
          date: "9 Jan 2023",
          result: "Well done",
          payment: "Paid",
        },
      ],
      assurance: {
        id: "234-234-232-32",
        date: "23/04/2024",
        status: "Actived",
      },
      membership: {
        startDate: "12 Dec 2023",
        days: 32,
      },
      documents: [
        {
          name: "Agreement_Meditation.zip",
          size: "2.3 mb",
        },
        {
          name: "Provision of information.pdf",
          size: "1.2 mb",
        },
        {
          name: "Agreement_Meditation.zip",
          size: "2.3 mb",
        },
        {
          name: "Provision of information.pdf",
          size: "1.2 mb",
        },
      ],
    },
    {
      name: "Darlene Robertson",
      registerDate: "12/02/2023",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Albert Flores",
      registerDate: "12/02/2023",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Savannah Nguyen",
      registerDate: "12/02/2023",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Jenny Wilson",
      registerDate: "12/02/2023",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Kathryn Murphy",
      registerDate: "12/02/2023",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  const currentEvent = events.find((event) => event.name === activePatient);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handlePatientClick = (eventName: SetStateAction<string>) => {
    setActivePatient(eventName);
    // Auto-collapse sidebar on mobile after selection
    if (isMobile) {
      setSidebarCollapsed(true);
    }
  };

  return (
    <div className="flex-1 flex p-4">
      <Card className="overflow-hidden w-full flex flex-col">
        <CardHeader className="flex flex-row items-start bg-muted/50 py-3">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg m-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="mx-1"
              >
                {sidebarCollapsed ? (
                  <Menu className="h-4 w-4" />
                ) : (
                  <ChevronLeft className="h-4 w-4" />
                )}
              </Button>
              Order Oe31b70H
              <Button
                size="icon"
                variant="outline"
                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copy Order ID</span>
              </Button>
            </CardTitle>
            <CardDescription>Date: November 23, 2023</CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <Truck className="h-3.5 w-3.5" />
              <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                Track Order
              </span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline" className="h-8 w-8">
                  <MoreVertical className="h-3.5 w-3.5" />
                  <span className="sr-only">More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Export</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Trash</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm flex-1 overflow-auto">
          <div className="grid gap-3">
            <div className="font-semibold">Order Details</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Glimmer Lamps x <span>2</span>
                </span>
                <span>$250.00</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Aqua Filters x <span>1</span>
                </span>
                <span>$49.00</span>
              </li>
            </ul>
            <Separator className="my-2" />
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>$299.00</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>$5.00</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>$25.00</span>
              </li>
              <li className="flex items-center justify-between font-semibold">
                <span className="text-muted-foreground">Total</span>
                <span>$329.00</span>
              </li>
            </ul>
          </div>
          <Separator className="my-4" />
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <div className="font-semibold">Shipping Information</div>
              <address className="grid gap-0.5 not-italic text-muted-foreground">
                <span>Liam Johnson</span>
                <span>1234 Main St.</span>
                <span>Anytown, CA 12345</span>
              </address>
            </div>
            <div className="grid auto-rows-max gap-3">
              <div className="font-semibold">Billing Information</div>
              <div className="text-muted-foreground">
                Same as shipping address
              </div>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Customer Information</div>
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Customer</dt>
                <dd>Liam Johnson</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Email</dt>
                <dd>
                  <a href="mailto:">liam@acme.com</a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Phone</dt>
                <dd>
                  <a href="tel:">+1 234 567 890</a>
                </dd>
              </div>
            </dl>
          </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Payment Information</div>
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="flex items-center gap-1 text-muted-foreground">
                  <CreditCard className="h-4 w-4" />
                  Visa
                </dt>
                <dd>**** **** **** 4532</dd>
              </div>
            </dl>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3 mt-auto">
          <div className="text-xs text-muted-foreground">
            Updated <time dateTime="2023-11-23">November 23, 2023</time>
          </div>
          <Pagination className="ml-auto mr-0 w-auto">
            <PaginationContent>
              <PaginationItem>
                <Button size="icon" variant="outline" className="h-6 w-6">
                  <ChevronLeft className="h-3.5 w-3.5" />
                  <span className="sr-only">Previous Order</span>
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button size="icon" variant="outline" className="h-6 w-6">
                  <ChevronRight className="h-3.5 w-3.5" />
                  <span className="sr-only">Next Order</span>
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>
    </div>
  );
}
