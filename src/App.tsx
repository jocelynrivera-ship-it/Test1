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
  Image as ImageIcon,
  ArrowRight,
  RefreshCw,
  User,
  Mail,
  MoreVertical,
  Circle,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { sopData, SOPSection } from "./data/sopData";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  FileText,
  RefreshCw,
  Users,
  Calendar
};

const TeamMemberCard = ({ name, role, email }: { name: string, role: string, email: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
        <User className="w-7 h-7 text-primary" />
      </div>
      <div className="flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
      </div>
    </div>
    <h3 className="font-black text-lg text-foreground tracking-tight mb-1">{name}</h3>
    <p className="text-[10px] uppercase tracking-widest font-black text-primary mb-4">{role}</p>
    <a 
      href={`mailto:${email}`}
      className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors"
    >
      <Mail className="w-3.5 h-3.5" />
      {email}
    </a>
  </motion.div>
);

const MeetingCard = ({ day, time, title, detail }: { day: string, time: string, title: string, detail?: string }) => (
  <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-lg transition-all">
    <div className="hidden sm:flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-white border border-slate-100 font-black text-center">
      <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{day.substring(0, 3)}</span>
      <span className="text-xl text-primary">{time.split(':')[0]}</span>
    </div>
    <div className="flex-1">
      <div className="sm:hidden text-[10px] font-black text-primary uppercase tracking-widest mb-1">{day} • {time}</div>
      <h4 className="font-black text-lg tracking-tight mb-1 group-hover:text-primary transition-colors">{title}</h4>
      {detail && <p className="text-xs text-muted-foreground font-medium">{detail}</p>}
    </div>
    <div className="text-xs font-black text-slate-300 hidden md:block">
      {time}
    </div>
  </div>
);

const ProcessStep = ({ number, title, content, image }: { number: string, title: string, content: string, image?: string }) => (
  <div className="relative pl-12 pb-12 border-l-2 border-slate-100 last:pb-0 last:border-0">
    <div className="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center z-10">
      <div className="w-2 h-2 rounded-full bg-primary" />
    </div>
    <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-[10px] font-black text-primary bg-secondary px-3 py-1 rounded-full uppercase tracking-widest">Step {number}</span>
        <h3 className="font-black text-xl tracking-tight">{title}</h3>
      </div>
      <div className="prose prose-slate max-w-none text-muted-foreground mb-6">
        <CustomMarkdown content={content} />
      </div>
      {image && <SOPImagePlaceholder label={image} />}
    </div>
  </div>
);

const LinkIcon = ({ type }: { type?: string }) => {
  switch (type) {
    case 'tool': return <MousePointer2 className="w-3.5 h-3.5" />;
    case 'video': return <Video className="w-3.5 h-3.5" />;
    case 'doc': return <FileText className="w-3.5 h-3.5" />;
    default: return <ExternalLink className="w-3.5 h-3.5" />;
  }
};

const SOPImagePlaceholder = ({ label }: { label: string }) => (
  <div className="my-10 rounded-[2.5rem] bg-slate-50 border-2 border-dashed border-slate-200 overflow-hidden group/img relative">
    <div className="p-16 flex flex-col items-center justify-center text-center">
      <div className="w-20 h-20 rounded-3xl bg-white shadow-xl border border-slate-100 flex items-center justify-center mb-8 group-hover/img:scale-110 transition-transform duration-700">
        <ImageIcon className="w-10 h-10 text-slate-300" />
      </div>
      <h4 className="text-base font-black text-slate-800 mb-2">Original SOP Illustration</h4>
      <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-black max-w-[320px] mb-8 leading-relaxed">
        Reference: {label}
      </p>
      <div className="flex gap-2">
        <Badge variant="outline" className="bg-white border-slate-200 text-slate-500 text-[9px] font-bold uppercase py-1 px-4 rounded-full tracking-widest leading-none">
          Contextual Asset
        </Badge>
      </div>
    </div>
    <div className="bg-white/50 backdrop-blur-sm py-4 px-8 border-t border-slate-200 flex items-center justify-between">
      <span className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em]">Procurement Operations Portal</span>
      <div className="flex gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
        <div className="w-1.5 h-1.5 rounded-full bg-slate-100" />
      </div>
    </div>
  </div>
);

const StatusBadge = ({ name, description }: { name: string, description: string }) => {
  const getStatusConfig = (status: string) => {
    const s = status.toLowerCase();
    if (s.includes('upcoming')) return { color: 'bg-indigo-50 text-indigo-700 border-indigo-100', icon: Clock };
    if (s.includes('active')) return { color: 'bg-emerald-50 text-emerald-700 border-emerald-100', icon: CheckCircle2 };
    if (s.includes('discontinue')) return { color: 'bg-amber-50 text-amber-700 border-amber-100', icon: AlertCircle };
    if (s.includes('inactive')) return { color: 'bg-rose-50 text-rose-700 border-rose-100', icon: X };
    return { color: 'bg-slate-50 text-slate-700 border-slate-100', icon: Circle };
  };

  const config = getStatusConfig(name);
  const Icon = config.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`p-6 rounded-[2.5rem] border ${config.color} mb-6 flex gap-6 items-start shadow-sm hover:shadow-md transition-all`}
    >
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border border-current/10 shadow-inner`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-black text-xl tracking-tight mb-2 uppercase">{name}</h4>
        <p className="text-sm font-semibold opacity-80 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const QuickNav = ({ items, onSelect }: { items: { id: string, title: string }[], onSelect: (id: string) => void }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
    {items.map((item, idx) => (
      <motion.button
        key={item.id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: idx * 0.1 }}
        onClick={() => {
          const el = document.getElementById(item.id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className="flex items-center gap-4 p-5 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:border-primary hover:shadow-lg transition-all text-left group"
      >
        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] font-black group-hover:bg-primary group-hover:text-white transition-colors">
          {String(idx + 1).padStart(2, '0')}
        </div>
        <span className="font-bold text-sm tracking-tight text-slate-600 group-hover:text-foreground transition-colors">{item.title}</span>
      </motion.button>
    ))}
  </div>
);

const CustomMarkdown = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown 
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <h1 className="text-2xl font-black tracking-tight mb-6">{children}</h1>,
        h3: ({ children }) => <h3 className="text-lg font-black tracking-tight mt-8 mb-4 flex items-center gap-2"><div className="w-1.5 h-6 bg-primary rounded-full" />{children}</h3>,
        p: ({ children }) => {
          // Only attempt smart detection for simple text content
          // ReactMarkdown children can be strings or elements
          const childrenArray = Array.isArray(children) ? children : [children];
          const isSimpleText = childrenArray.every(child => typeof child === 'string');
          
          if (isSimpleText) {
            const text = childrenArray.join("");
            
            // Detect Status Definition pattern: "1. **Name** Refers to..."
            if (text.match(/^\d+\.\s+Refers to|Indicates|A status/)) {
              // Note: The bolding might be separate children if it's markdown **Name**
              // But if it's simple text, we handle it here
            }

            // Detect Team Member pattern
            if (text.includes(" - ") && text.includes("@brain-effect.com")) {
              const parts = text.split(" - ");
              const name = parts[0].replace(/[* ]/g, "");
              const info = parts[1].split(" - ");
              const role = info[0];
              const email = info[info.length - 1];
              return <TeamMemberCard name={name} role={role} email={email} />;
            }
            
            // Detect Meeting pattern
            const meetingMatch = text.match(/^(Monday|Tuesday|Wednesday|Thursday|Friday|Daily):\s*(\d{2}:\d{2})\s*-\s*(.*)/);
            if (meetingMatch) {
              return <MeetingCard day={meetingMatch[1]} time={meetingMatch[2]} title={meetingMatch[3]} />;
            }
          } else {
            // Complex content: check first child if it's a bold tag for Status Definitions
            const firstChild = childrenArray[0];
            const remains = childrenArray.slice(1);
            const remainsText = remains.map(c => typeof c === 'string' ? c : '').join('');

            // Pattern: [<strong>Name</strong>, " Refers to..."]
            if (firstChild && typeof firstChild === 'object' && 'type' in firstChild && firstChild.type === 'strong') {
              if (remainsText.match(/^\s+(Refers to|Indicates|A status|Indicates|Refers)/)) {
                // @ts-ignore
                const name = firstChild.props.children;
                return <StatusBadge name={String(name)} description={remainsText.trim()} />;
              }
            }
          }

          return <p className="mb-6 last:mb-0 leading-relaxed text-slate-600 font-medium">{children}</p>;
        },
        li: ({ children }) => (
          <li className="flex gap-3 mb-3 items-start">
            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-muted-foreground font-medium">{children}</span>
          </li>
        ),
        ul: ({ children }) => <ul className="my-6 space-y-2">{children}</ul>,
        img: ({ src, alt }) => {
          if (src && !src.startsWith('http') && !src.startsWith('/')) {
            // In Vite, files in public/ are served from the root /
            src = `/${src}`;
          }
          
          if (src) {
            return (
              <div className="my-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 bg-white">
                <img 
                  src={src} 
                  alt={alt || "SOP illustration"} 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add('p-0');
                      const placeholder = document.createElement('div');
                      placeholder.className = "p-16 flex flex-col items-center justify-center text-center bg-slate-50";
                      placeholder.innerHTML = `
                        <div class="w-16 h-16 rounded-2xl bg-white shadow-lg border border-slate-100 flex items-center justify-center mb-6">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-300"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                        </div>
                        <h4 class="text-sm font-black text-slate-800 mb-1">Asset Missing: ${alt}</h4>
                        <p class="text-[9px] text-slate-400 uppercase tracking-widest font-black">Please upload this file to the public folder</p>
                      `;
                      target.parentElement.appendChild(placeholder);
                    }
                  }}
                />
              </div>
            );
          }
          return <SOPImagePlaceholder label={alt || "Untitled SOP Visual"} />;
        },
        a: ({ children, href }) => {
          const isLoom = href?.includes("loom.com") || children?.toString().toLowerCase().includes("loom");
          const isVideo = href?.includes(".mp4") || children?.toString().toLowerCase().includes("video");
          
          if (isLoom || isVideo) {
            return (
              <a 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 my-2 bg-primary/10 border border-primary/20 rounded-xl text-primary font-bold text-xs hover:bg-primary hover:text-white transition-all group"
              >
                <Video className="w-4 h-4" />
                {children}
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
              </a>
            );
          }

          return (
            <a 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 my-1 bg-slate-100 border border-slate-200 rounded-lg text-slate-700 font-bold text-xs hover:bg-slate-200 transition-all decoration-none"
            >
              <LinkIcon type={href?.includes(".xlsx") || href?.includes(".csv") || href?.includes("spreadsheet") ? 'doc' : 'tool'} />
              {children}
            </a>
          );
        }
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

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
                  className="space-y-16"
                >
                  <div className="relative overflow-hidden p-6 md:p-8 rounded-[2rem] bg-primary text-primary-foreground shadow-2xl">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-[60px] -mr-10 -mt-10 shrink-0 select-none pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/20 rounded-full blur-[40px] -ml-5 -mb-5 shrink-0 select-none pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner">
                          {(() => {
                            const Icon = iconMap[activeSection?.icon] || Info;
                            return <Icon className="w-4 h-4" />;
                          })()}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[8px] font-black uppercase tracking-[0.2em] opacity-70 leading-none">Supply Chain Documentation</span>
                          <span className="text-[10px] font-bold opacity-90 leading-none mt-0.5">SOP // BRAINEFFECT</span>
                        </div>
                      </div>
                      <h2 className="text-2xl md:text-4xl font-black tracking-tightest leading-[0.95] mb-4 max-w-3xl">
                        {activeSection?.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 mt-2">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 opacity-70" />
                          <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest text-nowrap">Jan 2026 UPDATE</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MousePointer2 className="w-3.5 h-3.5 opacity-70" />
                          <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest text-nowrap">Interactive Doc</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-100 shadow-sm relative z-20 -mt-10 mx-2 md:mx-4">
                    {activeSection.subsections && activeSection.subsections.length > 0 && (
                      <QuickNav 
                        items={activeSection.subsections.map(s => ({ id: s.id, title: s.title }))} 
                        onSelect={() => {}} 
                      />
                    )}

                    <div className="prose prose-slate prose-base max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-p:leading-relaxed prose-img:rounded-[2rem] prose-img:shadow-lg prose-a:text-primary prose-a:font-black prose-a:no-underline hover:prose-a:underline">
                      <CustomMarkdown content={activeSection?.content} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {activeSection.subsections?.map((sub, index) => (
                      <Accordion key={sub.id} className="w-full" id={sub.id}>
                        <AccordionItem 
                          value={sub.id}
                          className="border border-border rounded-[2.5rem] px-8 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                        >
                          <AccordionTrigger className="hover:no-underline py-8">
                            <div className="flex items-center gap-6 text-left">
                              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-sm font-black text-primary">
                                {String(index + 1).padStart(2, '0')}
                              </div>
                              <span className="font-black text-foreground text-xl tracking-tight">{sub.title}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pb-12 pt-4">
                            <div className="pl-[4.5rem] pr-6 text-muted-foreground leading-relaxed text-base prose prose-slate max-w-none">
                              <CustomMarkdown content={sub.content} />
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
