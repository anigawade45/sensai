"use client";

import {
  BrainCircuit,
  ScrollText,
  Bot,
  FileText,
  UserCheck,
  BadgeHelp,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tools = [
  {
    title: "AI Resume Generator",
    description: "Build a professional resume tailored to your profile.",
    icon: <ScrollText className="w-8 h-8 text-primary" />,
  },
  {
    title: "Cover Letter Writer",
    description: "Get a well-structured, job-specific cover letter.",
    icon: <FileText className="w-8 h-8 text-primary" />,
  },
  {
    title: "Career Suggestions",
    description: "Find the best career path using AI-driven insights.",
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
  },
  {
    title: "Mock Interviews",
    description: "Practice interviews with real-time AI feedback.",
    icon: <UserCheck className="w-8 h-8 text-primary" />,
  },
  {
    title: "Chat with AI Mentor",
    description: "Get answers to your career-related doubts instantly.",
    icon: <Bot className="w-8 h-8 text-primary" />,
    comingSoon: true,
  },
  {
    title: "Interview Q&A Bank",
    description: "Explore common questions and expert-curated answers.",
    icon: <BadgeHelp className="w-8 h-8 text-primary" />,
    comingSoon: true,
  },
];

export default function ToolsPage() {
  return (
    <div className="relative dark:text-black px-4 md:px-20 py-16">
      {/* Decorative Blobs */}
      <img
        src="/blobs/blob-top.svg"
        className="absolute top-[-60px] left-[-80px] w-[250px] opacity-10 pointer-events-none"
        alt=""
      />
      <img
        src="/blobs/blob-bottom.svg"
        className="absolute bottom-[-60px] right-[-80px] w-[250px] opacity-10 pointer-events-none"
        alt=""
      />

      <h2 className="text-4xl font-bold text-center mb-4">🧰 Tools</h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
        Explore the AI-powered tools designed to accelerate your career journey.
      </p>

      <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-3 scroll-snap-x pb-6">
        {tools.map((tool, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="min-w-[260px] md:min-w-0 scroll-snap-align-start"
          >
            <Card className="h-full hover:shadow-md transition-all relative">
              <CardHeader>
                {tool.comingSoon && (
                  <Badge className="absolute top-3 right-3" variant="secondary">
                    Coming Soon
                  </Badge>
                )}
                {tool.icon}
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg mb-1">{tool.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/dashboard">
          <Button size="lg" variant="secondary" className="h-11 animate-bounce">
            Try all tools
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
