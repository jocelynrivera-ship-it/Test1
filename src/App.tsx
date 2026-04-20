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
  Clock,
  Video,
  FileText,
  MousePointer2,
  Image as ImageIcon
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { sopData, SOPSection, SOPLink } from "./data/sopData";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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

const LinkIcon = ({ type }: { type?: string }) => {
  switch (type) {
    case 'tool': return <MousePointer2 className="w-3.5 h-3.5" />;
    case 'video': return <Video className="w-3.5 h-3.5" />;
    case 'doc': return <FileText className="w-3.5 h-3.5" />;
    default: return <ExternalLink className="w-3.5 h-3.5" />;
  }
};

const SOPImagePlaceholder = ({ label }: { label: string }) => (
  <div className="ml-14 mb-8 rounded-[2rem] bg-slate-50 border-2 border-dashed border-slate-200 overflow-hidden group/img">
    <div className="p-12 flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 rounded-3xl bg-white shadow-xl border border-slate-100 flex items-center justify-center mb-6 group-hover/img:scale-110 transition-transform duration-500">
        <ImageIcon className="w-8 h-8 text-slate-300" />
      </div>
      <h4 className="text-sm font-bold text-slate-800 mb-2">Original SOP Illustration</h4>
      <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black max-w-[280px] mb-6">
        Reference: {label}
      </p>
      <div className="flex gap-2">
        <Badge variant="outline" className="bg-white border-slate-200 text-slate-500 text-[9px] font-bold uppercase py-0.5 px-3">
          Verbatim Link Required
        </Badge>
      </div>
    </div>
    <div className="bg-slate-100/50 py-3 px-6 border-t border-slate-200 flex items-center justify-between">
      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-none">System Reference Only</span>
      <div className="flex gap-1">
        <div className="w-1 h-1 rounded-full bg-slate-200" />
        <div className="w-1 h-1 rounded-full bg-slate-200" />
        <div className="w-1 h-1 rounded-full bg-slate-200" />
      </div>
    </div>
  </div>
);

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSectionId, setActiveSectionId] = useState("intro");
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
          {filteredData.map((section) => {
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
          {filteredData.length === 0 && (
            <div className="p-4 text-center">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">No sections found</p>
            </div>
          )}
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
    <div className="flex h-screen bg-background font-sans text-foreground overflow-hidden">
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
              <SheetTrigger 
                render={
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="w-5 h-5" />
                  </Button>
                }
              />
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
                </div>

                <div className="space-y-6">
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">Resource Hub</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {activeSection.links?.map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -4 }}
                        className="group flex flex-col p-6 bg-white border border-border rounded-[2rem] shadow-sm hover:shadow-md transition-all"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <LinkIcon type={link.type} />
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h4 className="font-bold text-foreground mb-1">{link.label}</h4>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Access {link.type || 'Resource'}</p>
                      </motion.a>
                    ))}
                    {!activeSection.links?.length && (
                      <div className="md:col-span-3 py-12 flex flex-col items-center justify-center border-2 border-dashed border-slate-100 rounded-[2rem] opacity-50">
                        <FileText className="w-12 h-12 text-slate-200 mb-4" />
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center">
                          No direct links associated<br />with this section
                        </p>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">Detailed Procedures</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {activeSection.subsections?.map((sub, index) => (
                      <Accordion key={sub.id} className="w-full">
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
                            {sub.imageLabel && (
                              <SOPImagePlaceholder label={sub.imageLabel} />
                            )}
                            <div className="pl-14 pr-4 text-muted-foreground leading-relaxed text-sm prose prose-sm prose-slate max-w-none">
                              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {sub.content}
                              </ReactMarkdown>
                            </div>
                            
                            {/* In-context links for subsections */}
                            {sub.links && sub.links.length > 0 && (
                              <div className="mt-8 ml-14 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {sub.links.map((link) => (
                                  <a 
                                    key={link.label}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl hover:border-primary/50 transition-all group"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                      <LinkIcon type={link.type} />
                                    </div>
                                    <span className="text-xs font-bold text-slate-700">{link.label}</span>
                                  </a>
                                ))}
                              </div>
                            )}

                            {/* Media Placeholders for SOP content pointers */}
                            {(sub.content.toLowerCase().includes("video") || sub.content.toLowerCase().includes("loom") || sub.content.toLowerCase().includes("example") || sub.content.toLowerCase().includes("mp4")) && (
                              <div className="mt-8 ml-14">
                                <Card className="bg-slate-50 border-dashed border-2 border-slate-200">
                                  <CardContent className="flex flex-col items-center justify-center py-8 text-center">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-4 border border-slate-100">
                                      <Video className="w-6 h-6" />
                                    </div>
                                    <p className="text-sm font-bold text-foreground mb-1 text-slate-800">Visual Resource Reference</p>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider leading-relaxed max-w-[240px]">
                                      The original SOP references a Loom video or visual walkthrough at this step.
                                    </p>
                                  </CardContent>
                                </Card>
                              </div>
                            )}

                            {activeSection.id === "introduction" && sub.id === "important-addresses" && (
                              <div className="mt-8 ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-6 bg-slate-50 border border-border rounded-2xl flex items-start gap-4">
                                  <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-primary">
                                    <MapPin className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Zenfulfillment Apfelstädt</p>
                                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                                      c/o Fiege, Tor 19/20/21<br />
                                      Sülzenbrücker Str. 7<br />
                                      99192 Apfelstädt
                                    </p>
                                  </div>
                                </div>
                                <div className="p-6 bg-slate-50 border border-border rounded-2xl flex items-start gap-4">
                                  <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-primary">
                                    <Briefcase className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Berlin Office</p>
                                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                                      Revaler Straße 30 - 31<br />
                                      10245 Berlin, Germany
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ))}
                  </div>
                </div>

                {activeSection.links && activeSection.links.length > 0 && (
                  <div className="mt-16 p-10 bg-slate-900 rounded-[2.5rem] text-white overflow-hidden relative group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                      <ExternalLink className="w-32 h-32 text-white" />
                    </div>
                    
                    <h3 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
                      <Badge variant="secondary" className="bg-primary text-white border-none py-0 px-2 h-5">Hub</Badge>
                      Section Resources & Tools
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
                      {activeSection.links.map((link) => (
                        <a 
                          key={link.label} 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white aggregation-hover:border-primary/50 transition-all group/link"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover/link:bg-primary transition-colors">
                              <LinkIcon type={link.type} />
                            </div>
                            <span className="text-xs font-bold text-white/90 group-hover/link:text-white">{link.label}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/20 group-hover/link:text-primary transition-all group-hover/link:translate-x-1" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

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
