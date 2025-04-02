export default function TestePage() {
  return <>Teste</>;
}

// "use client";

// import { useState, useEffect, type SetStateAction } from "react";
// import {
//   Mail,
//   Phone,
//   Smartphone,
//   Video,
//   Edit,
//   MoreHorizontal,
//   ChevronRight,
//   Calendar,
//   MapPin,
//   Gift,
//   FileText,
//   Users,
//   Check,
//   Download,
//   Menu,
//   ChevronLeft,
// } from "lucide-react";
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import Image from "next/image";
// import { SiteHeader } from "@/components/dashboard/site-header";
// import { IconTicket } from "@tabler/icons-react";
// export default function FilaPage() {
//   const [activePatient, setActivePatient] = useState("Jerome Bellingham");
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Check if we're on mobile on initial render and when window resizes
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//       // Auto-collapse sidebar on mobile
//       if (window.innerWidth < 768) {
//         setSidebarCollapsed(true);
//       }
//     };

//     // Check on initial render
//     checkIfMobile();

//     // Add event listener for window resize
//     window.addEventListener("resize", checkIfMobile);

//     // Cleanup
//     return () => window.removeEventListener("resize", checkIfMobile);
//   }, []);

//   const events = [
//     {
//       name: "Bessie Cooper",
//       registerDate: "12/02/2023",
//       avatar: "/placeholder.svg?height=40&width=40",
//     },
//     {
//       name: "20250212041",
//       registerDate: "12/02/2023",
//       avatar: "/placeholder.svg?height=40&width=40",
//       isMember: true,
//       gender: "Male",
//       birthday: "12 August 2001",
//       phone: "+62 837 356 343 23",
//       email: "jeromebellingham93@gmail.com",
//       sources: ["facebook", "google", "twitter", "whatsapp"],
//       appointments: [
//         {
//           date: "12 Oct 2023",
//           title: "Prosthetic Tooth Fabrication",
//           doctor: "Dr. Wade Warren",
//         },
//         {
//           date: "12 Sep 2023",
//           title: "Post-Surgical Care",
//           doctor: "Dr. Marvin McKinney",
//         },
//         {
//           date: "12 Jul 2023",
//           title: "",
//           doctor: "",
//         },
//       ],
//       history: [
//         {
//           id: "#12324",
//           type: "Implant",
//           date: "12 Jun 2023",
//           result: "Well done",
//           payment: "Pending",
//         },
//         {
//           id: "#20324",
//           type: "Route canal",
//           date: "4 May 2023",
//           result: "Well done",
//           payment: "Paid",
//         },
//         {
//           id: "#57686",
//           type: "Dentures",
//           date: "2 Mar 2023",
//           result: "Well done",
//           payment: "Paid",
//         },
//         {
//           id: "#68767",
//           type: "Whitening",
//           date: "16 Feb 2023",
//           result: "Well done",
//           payment: "Paid",
//         },
//         {
//           id: "#69696",
//           type: "Implant",
//           date: "9 Jan 2023",
//           result: "Well done",
//           payment: "Paid",
//         },
//       ],
//       assurance: {
//         id: "234-234-232-32",
//         date: "23/04/2024",
//         status: "Actived",
//       },
//       membership: {
//         startDate: "12 Dec 2023",
//         days: 32,
//       },
//       documents: [
//         {
//           name: "Agreement_Meditation.zip",
//           size: "2.3 mb",
//         },
//         {
//           name: "Provision of information.pdf",
//           size: "1.2 mb",
//         },
//         {
//           name: "Agreement_Meditation.zip",
//           size: "2.3 mb",
//         },
//         {
//           name: "Provision of information.pdf",
//           size: "1.2 mb",
//         },
//       ],
//     },
//     {
//       name: "Darlene Robertson",
//       registerDate: "12/02/2023",
//       avatar: "/placeholder.svg?height=40&width=40",
//     },
//     {
//       name: "Albert Flores",
//       registerDate: "12/02/2023",
//       avatar: "/placeholder.svg?height=40&width=40",
//     },
//     {
//       name: "Savannah Nguyen",
//       registerDate: "12/02/2023",
//       avatar: "/placeholder.svg?height=40&width=40",
//     },
//     {
//       name: "Jenny Wilson",
//       registerDate: "12/02/2023",
//       avatar: "/placeholder.svg?height=40&width=40",
//     },
//     {
//       name: "Kathryn Murphy",
//       registerDate: "12/02/2023",
//       avatar: "/placeholder.svg?height=40&width=40",
//     },
//   ];

//   const currentEvent = events.find((event) => event.name === activePatient);

//   const toggleSidebar = () => {
//     setSidebarCollapsed(!sidebarCollapsed);
//   };

//   const handlePatientClick = (eventName: SetStateAction<string>) => {
//     setActivePatient(eventName);
//     // Auto-collapse sidebar on mobile after selection
//     if (isMobile) {
//       setSidebarCollapsed(true);
//     }
//   };

//   return (
//     <>
//       <>
//         <SiteHeader title="Fila" />
//         <div className="flex flex-1 flex-col">
//           <div className="@container/main flex flex-1 flex-col gap-2">
//             <div className="flex flex-col gap-4 pl-4 md:gap-6 md:py-6">
//               <div className="flex h-screen bg-background overflow-hidden">
//                 {/* Collapsible Sidebar */}
//                 <div
//                   className={` flex flex-col transition-all duration-300 ${
//                     sidebarCollapsed ? "w-0 overflow-hidden" : "w-full md:w-72"
//                   }`}
//                 >
//                   <div className="px-4 py-2  flex items-center justify-between">
//                     <h2 className="text-base font-medium">Seus Eventos</h2>
//                     <IconTicket className="h-4 w-4" />
//                   </div>

//                   <Tabs defaultValue="all">
//                     <TabsList className="grid grid-cols-3 w-full">
//                       <TabsTrigger value="all">Todos</TabsTrigger>
//                       <TabsTrigger value="oldest">Em espera</TabsTrigger>
//                       <TabsTrigger value="newest">Andamento</TabsTrigger>
//                     </TabsList>
//                   </Tabs>

//                   <div className="flex-1 overflow-auto scrollbar-hide space-y-2 mt-2">
//                     {events.map((event) => (
//                       <div
//                         key={event.name}
//                         className={`flex items-center justify-between py-2 px-3 border rounded cursor-pointer hover:bg-muted/50 transition-colors ${event.name === activePatient ? "bg-muted/15" : ""}`}
//                         onClick={() => handlePatientClick(event.name)}
//                       >
//                         <div className="flex items-center gap-3">
//                           {/* <Avatar>
//                             <AvatarImage
//                               src={event.avatar}
//                               alt={event.name}
//                             />
//                             <AvatarFallback>
//                               {event.name.charAt(0)}
//                             </AvatarFallback>
//                           </Avatar> */}
//                           <div>
//                             <p className="font-medium text-sm">{event.name}</p>
//                             <p className="text-xs text-muted-foreground">
//                               Data: {event.registerDate}
//                             </p>
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <ChevronRight className="h-4 w-4 text-muted-foreground" />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Main Content */}
//                 {currentEvent && (
//                   <div className="flex-1 overflow-auto mx-4 rounded-lg border flex flex-col bg-white">
//                     {/* Patient Header */}
//                     <div className="px-1 py-2 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//                       <div className="flex items-center gap-3 w-full sm:w-auto">
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           onClick={toggleSidebar}
//                           className="mx-1"
//                         >
//                           {sidebarCollapsed ? (
//                             <Menu className="h-4 w-4" />
//                           ) : (
//                             <ChevronLeft className="h-4 w-4" />
//                           )}
//                         </Button>
//                         <div>
//                           <div className="flex items-center gap-2 flex-wrap">
//                             <h2 className="text-base font-semibold">
//                               Protocolo: {currentEvent.name}
//                             </h2>
//                             {currentEvent.isMember && (
//                               <Badge className="bg-green-100  text-green-800 hover:bg-green-100 ">
//                                 Aprovado
//                               </Badge>
//                             )}
//                           </div>
//                           <p className="text-xs text-muted-foreground">
//                             <span className="inline-flex items-center gap-1">
//                               <Calendar className="h-3 w-3" />
//                               Data: {currentEvent.registerDate}
//                             </span>
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
//                         <Button variant="ghost" size="icon">
//                           <Mail className="h-5 w-5" />
//                         </Button>

//                         <Button variant="ghost" size="icon">
//                           <Edit className="h-5 w-5" />
//                         </Button>
//                       </div>
//                     </div>

//                     {/* Patient Details */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 overflow-auto">
//                       {/* Top Row: Basic Informational (2 cols) and Appointment Schedule (1 col) */}
//                       {/* Basic Information - Now spans 2 columns */}
//                       <div className="border rounded-md shadow-sm p-4 md:col-span-2">
//                         <div className="pb-2">
//                           <h3 className="text-base font-medium">
//                             Basic Informational
//                           </h3>
//                         </div>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                           <div className="flex items-start gap-3">
//                             <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
//                             <div>
//                               <p className="text-sm text-muted-foreground">
//                                 Gender
//                               </p>
//                               <p>{currentEvent.gender}</p>
//                             </div>
//                           </div>

//                           <div className="flex items-start gap-3">
//                             <Gift className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
//                             <div>
//                               <p className="text-sm text-muted-foreground">
//                                 Birthday
//                               </p>
//                               <p>{currentEvent.birthday}</p>
//                             </div>
//                           </div>

//                           <div className="flex items-start gap-3">
//                             <Phone className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
//                             <div>
//                               <p className="text-sm text-muted-foreground">
//                                 Phone Number
//                               </p>
//                               <p className="break-all">{currentEvent.phone}</p>
//                             </div>
//                           </div>

//                           <div className="flex items-start gap-3">
//                             <Mail className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
//                             <div>
//                               <p className="text-sm text-muted-foreground">
//                                 Email
//                               </p>
//                               <p className="break-all">{currentEvent.email}</p>
//                             </div>
//                           </div>

//                           <div className="flex items-start gap-3 sm:col-span-2">
//                             <Users className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
//                             <div>
//                               <p className="text-sm text-muted-foreground">
//                                 Sources
//                               </p>
//                               <div className="flex gap-2 mt-1">
//                                 {currentEvent.sources?.map((source) => (
//                                   <div
//                                     key={source}
//                                     className="h-6 w-6 rounded-full bg-muted flex items-center justify-center"
//                                   >
//                                     {source === "facebook" && (
//                                       <span className="text-blue-600 text-xs">
//                                         f
//                                       </span>
//                                     )}
//                                     {source === "google" && (
//                                       <span className="text-red-500 text-xs">
//                                         G
//                                       </span>
//                                     )}
//                                     {source === "twitter" && (
//                                       <span className="text-blue-400 text-xs">
//                                         t
//                                       </span>
//                                     )}
//                                     {source === "whatsapp" && (
//                                       <span className="text-green-500 text-xs">
//                                         w
//                                       </span>
//                                     )}
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Appointment Schedule - Now spans 1 column */}
//                       <div className="border rounded-md shadow-sm p-4">
//                         <div className="pb-2">
//                           <h3 className="text-base font-medium">
//                             Appointment Schedule
//                           </h3>
//                         </div>
//                         <div className="space-y-4">
//                           {currentEvent.appointments?.map(
//                             (appointment, index) => (
//                               <div key={index} className="relative pl-6 pb-4">
//                                 {index <
//                                   currentEvent.appointments.length - 1 && (
//                                   <div className="absolute left-[11px] top-3 bottom-0 w-0.5 bg-muted" />
//                                 )}
//                                 <div className="absolute left-0 top-1.5 h-5 w-5 rounded-full border-2 border-primary bg-background flex items-center justify-center">
//                                   {index < 3 && (
//                                     <div className="h-2 w-2 rounded-full bg-primary" />
//                                   )}
//                                 </div>

//                                 <p className="text-sm">{appointment.date}</p>

//                                 {appointment.title && (
//                                   <div className="mt-1 p-3 border rounded-md">
//                                     <p className="font-medium">
//                                       {appointment.title}
//                                     </p>
//                                     {appointment.doctor && (
//                                       <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
//                                         <span className="h-2 w-2 rounded-full bg-sky-400" />
//                                         {appointment.doctor}
//                                       </p>
//                                     )}
//                                   </div>
//                                 )}
//                               </div>
//                             ),
//                           )}
//                         </div>
//                       </div>

//                       {/* Second Row: History Dental (2 cols) and Data of Assurance + Member Dentalica (1 col) */}
//                       {/* History Dental */}
//                       <div className="border rounded-md shadow-sm p-4 md:col-span-2 overflow-hidden">
//                         <div className="pb-2">
//                           <h3 className="text-base font-medium">
//                             History dental
//                           </h3>
//                         </div>
//                         <div className="overflow-x-auto -mx-4 px-4">
//                           <div className="min-w-[600px] pb-2">
//                             <Table>
//                               <TableHeader>
//                                 <TableRow>
//                                   <TableHead>ID</TableHead>
//                                   <TableHead>Type Treatment</TableHead>
//                                   <TableHead>Date</TableHead>
//                                   <TableHead>Result Treatment</TableHead>
//                                   <TableHead>Payment Status</TableHead>
//                                   <TableHead></TableHead>
//                                 </TableRow>
//                               </TableHeader>
//                               <TableBody>
//                                 {currentEvent.history?.map((item) => (
//                                   <TableRow key={item.id}>
//                                     <TableCell>{item.id}</TableCell>
//                                     <TableCell>
//                                       <div className="flex items-center gap-2">
//                                         <span className="h-4 w-4 rounded-sm bg-sky-100 text-sky-600 flex items-center justify-center text-xs">
//                                           🦷
//                                         </span>
//                                         {item.type}
//                                       </div>
//                                     </TableCell>
//                                     <TableCell>{item.date}</TableCell>
//                                     <TableCell>
//                                       <div className="flex items-center gap-1 text-green-600">
//                                         <Check className="h-4 w-4" />
//                                         {item.result}
//                                       </div>
//                                     </TableCell>
//                                     <TableCell>
//                                       <Badge
//                                         variant="outline"
//                                         className={
//                                           item.payment === "Paid"
//                                             ? "border-green-200 bg-green-50 text-green-700"
//                                             : "border-yellow-200 bg-yellow-50 text-yellow-700"
//                                         }
//                                       >
//                                         {item.payment}
//                                       </Badge>
//                                     </TableCell>
//                                     <TableCell>
//                                       <Button variant="ghost" size="icon">
//                                         <MoreHorizontal className="h-4 w-4" />
//                                       </Button>
//                                     </TableCell>
//                                   </TableRow>
//                                 ))}
//                               </TableBody>
//                             </Table>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Data of Assurance + Member Dentalica */}

//                       {/* Third Row: Agreement of Document (1 col) */}
//                       {/* Agreement of Document */}
//                       <div className="border rounded-md shadow-sm p-4">
//                         <div className="flex flex-row items-center justify-between pb-2">
//                           <h3 className="text-base font-medium">
//                             Agreement of document
//                           </h3>
//                           <Button variant="ghost" size="icon">
//                             <MoreHorizontal className="h-4 w-4" />
//                           </Button>
//                         </div>
//                         <div className="space-y-3">
//                           {currentEvent.documents?.map((doc, index) => (
//                             <div
//                               key={index}
//                               className="flex items-center justify-between"
//                             >
//                               <div className="flex items-center gap-3">
//                                 <div className="h-8 w-8 rounded border flex items-center justify-center">
//                                   <FileText className="h-4 w-4" />
//                                 </div>
//                                 <div>
//                                   <p className="text-sm">{doc.name}</p>
//                                   <p className="text-xs text-muted-foreground">
//                                     {doc.size}
//                                   </p>
//                                 </div>
//                               </div>
//                               <Button variant="ghost" size="icon">
//                                 <Download className="h-4 w-4" />
//                               </Button>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Mobile History Dental (only visible on very small screens) */}
//                       <div className="border rounded-md shadow-sm p-4 md:col-span-2 block md:hidden">
//                         <div className="pb-2">
//                           <h3 className="text-base font-medium">
//                             History dental (mobile view)
//                           </h3>
//                         </div>
//                         <div className="space-y-4">
//                           {currentEvent.history?.map((item) => (
//                             <div
//                               key={item.id}
//                               className="border rounded-md p-3"
//                             >
//                               <div className="flex justify-between items-center mb-2">
//                                 <div className="font-medium">{item.id}</div>
//                                 <Badge
//                                   variant="outline"
//                                   className={
//                                     item.payment === "Paid"
//                                       ? "border-green-200 bg-green-50 text-green-700"
//                                       : "border-yellow-200 bg-yellow-50 text-yellow-700"
//                                   }
//                                 >
//                                   {item.payment}
//                                 </Badge>
//                               </div>
//                               <div className="grid grid-cols-2 gap-2 text-sm">
//                                 <div>
//                                   <p className="text-muted-foreground">Type:</p>
//                                   <div className="flex items-center gap-2">
//                                     <span className="h-4 w-4 rounded-sm bg-sky-100 text-sky-600 flex items-center justify-center text-xs">
//                                       🦷
//                                     </span>
//                                     {item.type}
//                                   </div>
//                                 </div>
//                                 <div>
//                                   <p className="text-muted-foreground">Date:</p>
//                                   <p>{item.date}</p>
//                                 </div>
//                                 <div className="col-span-2">
//                                   <p className="text-muted-foreground">
//                                     Result:
//                                   </p>
//                                   <div className="flex items-center gap-1 text-green-600">
//                                     <Check className="h-4 w-4" />
//                                     {item.result}
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     </>
//   );
// }
