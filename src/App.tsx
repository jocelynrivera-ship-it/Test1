/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { 
  Search, 
  Info, 
  Database, 
  BarChart3, 
  Truck, 
  ShieldCheck, 
  Briefcase, 
  ChevronRight, 
  Menu, 
  X,
  ExternalLink,
  Users,
  Calendar,
  MapPin,
  Clock
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { sopData, SOPSection } from "./data/sopData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const iconMap: Record<string, any> = {
  Info,
  Database,
  BarChart3,
  Truck,
  ShieldCheck,
  Briefcase,
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSectionId, setActiveSectionId] = useState(sopData[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredData = useMemo(() => {
    if (!searchQuery) return sopData;
    return sopData.filter(section => 
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.subsections?.some(sub => 
        sub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sub.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const activeSection = useMemo(() => 
    sopData.find(s => s.id === activeSectionId) || sopData[0],
  [activeSectionId]);

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-white border-r border-border">
      <div className="p-6 border-b border-border bg-white h-20 flex items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-extrabold text-lg">
            BE
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-bold tracking-tight text-foreground leading-none">SCM Portal</h1>
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-1">Operations Hub</p>
          </div>
        </div>
      </div>
      
      <ScrollArea className="flex-1 px-4 py-6">
        <div className="space-y-1">
          {sopData.map((section) => {
            const Icon = iconMap[section.icon || "Info"];
            return (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSectionId(section.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeSectionId === section.id 
                    ? "bg-secondary text-primary border border-primary/20" 
                    : "text-muted-foreground hover:bg-slate-100 hover:text-foreground"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {section.title}
              </button>
            );
          })}
        </div>

        <div className="mt-10">
          <h3 className="px-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Quick Links</h3>
          <div className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
              <ExternalLink className="w-3.5 h-3.5" />
              Xentral ERP
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
              <ExternalLink className="w-3.5 h-3.5" />
              IMS Spreadsheet
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
              <ExternalLink className="w-3.5 h-3.5" />
              Zen Portal
            </a>
          </div>
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border bg-white">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-border">
          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-xs">
            MA
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-foreground">Mateo Ariza</span>
            <span className="text-[10px] text-muted-foreground">Teamlead SCM</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-background font-sans text-foreground">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 flex-shrink-0">
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-background">
        {/* Header */}
        <header className="h-20 border-b border-border flex items-center justify-between px-8 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-6 flex-1">
            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-72">
                <SidebarContent />
              </SheetContent>
            </Sheet>
            
            <div className="relative max-w-md w-full hidden sm:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search SOP, tools, or processes..." 
                className="pl-11 bg-slate-50 border-border rounded-full h-10 text-sm focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2">
              {sopData.slice(0, 3).map(section => (
                <button 
                  key={section.id}
                  onClick={() => setActiveSectionId(section.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    activeSectionId === section.id 
                      ? "bg-secondary text-primary border border-primary/20" 
                      : "bg-slate-50 text-muted-foreground border border-transparent hover:bg-slate-100"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
            <Badge variant="outline" className="flex items-center gap-1.5 py-1.5 px-3 bg-slate-50 border-border text-muted-foreground font-bold text-[10px] uppercase tracking-widest">
              <Clock className="w-3 h-3" />
              Jan 2026
            </Badge>
          </div>
        </header>

        {/* Content Area */}
        <ScrollArea className="flex-1">
          <div className="max-w-6xl mx-auto p-8 lg:p-12">
            <AnimatePresence mode="wait">
              {searchQuery ? (
                <motion.div
                  key="search-results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Search Results</h2>
                    <p className="text-muted-foreground">Found {
                      filteredData.reduce((acc, curr) => acc + 1 + (curr.subsections?.length || 0), 0)
                    } matches for "{searchQuery}"</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredData.map(section => (
                      <div key={section.id} className="space-y-4">
                        <Card 
                          className="cursor-pointer hover:border-primary transition-colors bg-white shadow-sm"
                          onClick={() => {
                            setActiveSectionId(section.id);
                            setSearchQuery("");
                          }}
                        >
                          <CardHeader className="pb-2">
                            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                              Section
                            </div>
                            <CardTitle className="text-lg">{section.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground line-clamp-2">{section.content}</p>
                          </CardContent>
                        </Card>
                        
                        {section.subsections?.filter(sub => 
                          sub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          sub.content.toLowerCase().includes(searchQuery.toLowerCase())
                        ).map(sub => (
                          <Card 
                            key={sub.id} 
                            className="cursor-pointer hover:border-primary transition-colors bg-white shadow-sm border-slate-100"
                            onClick={() => {
                              setActiveSectionId(section.id);
                              setSearchQuery("");
                            }}
                          >
                            <CardHeader className="pb-2">
                              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                                Procedure
                              </div>
                              <CardTitle className="text-base">{sub.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground line-clamp-3">{sub.content}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={activeSectionId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                <div className="mb-10">
                  <div className="flex items-center gap-2 text-muted-foreground text-[10px] font-bold uppercase tracking-widest mb-4">
                    <span>SCM Portal</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-foreground">{activeSection.title}</span>
                  </div>
                  <h2 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">
                    {activeSection.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    {activeSection.content}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                  {activeSection.id === "introduction" ? (
                    <>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 md:row-span-2"
                      >
                        <Card className="h-full border-border shadow-sm bg-white overflow-hidden hover:shadow-md transition-shadow">
                          <CardHeader className="pb-3">
                            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Team Overview</div>
                            <CardTitle className="text-2xl">SCM Department</CardTitle>
                            <CardDescription>Core team and primary responsibilities</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4 mt-4">
                              {[
                                { name: "Mateo Ariza", role: "Teamlead", color: "bg-primary" },
                                { name: "Julia Hönow", role: "Manager", color: "bg-slate-400" },
                                { name: "Chenye Liu", role: "Manager", color: "bg-slate-400" },
                                { name: "Saphira Pitka", role: "Sourcing", color: "bg-slate-400" }
                              ].map((member) => (
                                <div key={member.name} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
                                  <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full ${member.color} flex items-center justify-center text-white text-[10px] font-bold`}>
                                      {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <span className="text-sm font-bold text-foreground">{member.name}</span>
                                  </div>
                                  <Badge variant="secondary" className="text-[10px] font-bold uppercase tracking-wider">{member.role}</Badge>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-1"
                      >
                        <Card className="h-full border-border shadow-sm bg-white hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2">
                            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Status</div>
                            <CardTitle className="text-lg">System Health</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center gap-2 mt-2">
                              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                              <span className="text-sm font-bold">ERP Live Sync</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-wider">Last sync: 4m ago</p>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-1 md:row-span-2"
                      >
                        <Card className="h-full border-none shadow-lg bg-primary text-white hover:shadow-xl transition-shadow">
                          <CardHeader className="pb-3">
                            <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-2">Emergency</div>
                            <CardTitle className="text-xl text-white">Incident Protocol</CardTitle>
                          </CardHeader>
                          <CardContent className="flex flex-col h-full">
                            <p className="text-sm text-white/80 leading-relaxed">
                              Immediate steps for shipment delays or inventory discrepancies.
                            </p>
                            <Button variant="secondary" className="mt-8 w-full bg-white text-primary hover:bg-white/90 font-bold uppercase tracking-wider text-xs">
                              Access Manual
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-1"
                      >
                        <Card className="h-full border-border shadow-sm bg-white hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2">
                            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Accuracy</div>
                            <CardTitle className="text-lg">99.8%</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-xs text-muted-foreground font-medium">Inventory Precision</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </>
                  ) : (
                    <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <Card className="h-full border-border shadow-sm bg-white hover:shadow-md transition-shadow">
                          <CardHeader className="pb-3">
                            <Users className="w-5 h-5 text-primary mb-2" />
                            <CardTitle className="text-lg">Section Overview</CardTitle>
                            <CardDescription>Key information for this module</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {activeSection.content}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Card className="h-full border-border shadow-sm bg-white hover:shadow-md transition-shadow">
                          <CardHeader className="pb-3">
                            <Calendar className="w-5 h-5 text-primary mb-2" />
                            <CardTitle className="text-lg">Quick Actions</CardTitle>
                            <CardDescription>Relevant tools and links</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary" className="cursor-pointer hover:bg-slate-200 transition-colors">Open Xentral</Badge>
                              <Badge variant="secondary" className="cursor-pointer hover:bg-slate-200 transition-colors">View Reports</Badge>
                              <Badge variant="secondary" className="cursor-pointer hover:bg-slate-200 transition-colors">Contact Team</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">Detailed Procedures</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {activeSection.subsections?.map((sub, index) => (
                      <Accordion type="single" collapsible key={sub.id} className="w-full">
                        <AccordionItem 
                          value={sub.id}
                          className="border border-border rounded-2xl px-6 bg-white shadow-sm overflow-hidden"
                        >
                          <AccordionTrigger className="hover:no-underline py-5">
                            <div className="flex items-center gap-4 text-left">
                              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-sm font-black text-primary">
                                {String(index + 1).padStart(2, '0')}
                              </div>
                              <span className="font-bold text-foreground text-base">{sub.title}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pb-8 pt-2">
                            <div className="pl-14 pr-4 text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                              {sub.content}
                            </div>
                            {sub.id === "gii-process" && (
                              <div className="mt-8 ml-14 p-8 bg-slate-50 border border-border rounded-2xl">
                                <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-6">Gii Workflow</h4>
                                <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
                                  <div className="absolute top-5 left-10 right-10 h-0.5 bg-border hidden md:block" />
                                  {[
                                    { step: "01", label: "Production" },
                                    { step: "02", label: "Samples" },
                                    { step: "03", label: "Inspection" },
                                    { step: "✓", label: "Release", success: true }
                                  ].map((item) => (
                                    <div key={item.label} className="flex flex-col items-center gap-3 relative z-10">
                                      <div className={`w-10 h-10 rounded-full ${item.success ? 'bg-green-500' : 'bg-secondary'} flex items-center justify-center text-xs font-bold ${item.success ? 'text-white' : 'text-primary'}`}>
                                        {item.step}
                                      </div>
                                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{item.label}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                            {sub.id === "zen-fulfillment" && (
                              <div className="mt-8 ml-14 p-6 bg-slate-50 border border-border rounded-2xl flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-primary">
                                  <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                  <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Main Delivery Address</p>
                                  <p className="text-sm text-muted-foreground leading-relaxed">
                                    Zenfulfillment GmbH c/o Fiege<br />
                                    Tor 19/20/21, Sülzenbrücker Str. 7<br />
                                    99192 Apfelstädt, Germany
                                  </p>
                                </div>
                              </div>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ))}
                  </div>
                </div>

                {activeSection.id === "xentral-erp" && (
                  <Card className="mt-12 border-none shadow-xl bg-slate-900 text-white overflow-hidden rounded-3xl">
                    <CardHeader className="p-10 pb-0">
                      <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">Visual Guide</div>
                      <CardTitle className="text-3xl text-white">PO Lifecycle Flow</CardTitle>
                    </CardHeader>
                    <CardContent className="p-10 pt-12">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
                        <div className="absolute top-6 left-12 right-12 h-px bg-white/10 hidden md:block" />
                        {[
                          { step: "01", label: "Draft" },
                          { step: "02", label: "Approval" },
                          { step: "03", label: "Released" },
                          { step: "04", label: "Confirmed" },
                          { step: "05", label: "Closed", active: true }
                        ].map((item) => (
                          <div key={item.label} className="flex flex-col items-center gap-4 relative z-10">
                            <div className={`w-12 h-12 rounded-2xl ${item.active ? 'bg-white text-slate-900' : 'bg-white/5 text-white/40 border border-white/10'} flex items-center justify-center text-sm font-black transition-all hover:scale-110`}>
                              {item.step}
                            </div>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${item.active ? 'text-white' : 'text-white/40'}`}>{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
