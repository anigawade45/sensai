"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Briefcase,
  LineChart,
  ScrollText,
  Clock,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <BrainCircuit className="w-10 h-10 mb-4 text-primary" />,
    title: "AI-Powered Career Guidance",
    description:
      "Get personalized career advice and insights powered by advanced AI technology.",
  },
  {
    icon: <Briefcase className="w-10 h-10 mb-4 text-primary" />,
    title: "Interview Preparation",
    description:
      "Practice with role-specific questions and get instant feedback to improve your performance.",
  },
  {
    icon: <LineChart className="w-10 h-10 mb-4 text-primary" />,
    title: "Industry Insights",
    description:
      "Stay ahead with real-time industry trends, salary data, and market analysis.",
  },
  {
    icon: <ScrollText className="w-10 h-10 mb-4 text-primary" />,
    title: "Smart Resume Creation",
    description: "Generate ATS-optimized resumes with AI assistance.",
  },
  {
    icon: <Clock className="w-10 h-10 mb-4 text-muted" />,
    title: "Live Workshops",
    description:
      "Attend live sessions weekly and get your questions answered in real-time.",
    comingSoon: true,
  },
];

export default function FeaturesPage() {
  return (
    <section className="relative py-0 px-6 md:px-24 bg-background text-foreground overflow-hidden">
      {/* Gradient glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl top-10 -left-20" />
        <div className="absolute w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl bottom-0 right-0" />
      </div>

      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl font-bold">🚀 Features</h2>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
          Explore our suite of smart tools designed to accelerate your career
          journey.
        </p>
      </div>

      <div className="flex md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 relative z-10">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="min-w-[280px] md:min-w-0"
          >
            <Card className="hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader>
                <div className="flex justify-between items-start">
                  {feature.icon}
                  {feature.comingSoon && (
                    <Badge variant="outline" className="text-xs mt-1">
                      Coming Soon
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg mt-2">{feature.title}</CardTitle>
                <CardDescription className="mt-1 text-sm text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link href="/tools" passHref>
          <Button
            size="lg"
            variant="secondary"
            className="h-11 mt-5 animate-bounce"
          >
            Explore Tools
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
    
  );
}
