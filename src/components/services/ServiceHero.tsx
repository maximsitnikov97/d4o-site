"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ServiceHeroProps {
  title: string;
  highlight: string;
  description: string;
  badge: string;
  tags: string[];
  price: string;
  timeline: string;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function ServiceHero({
  title,
  highlight,
  description,
  badge,
  tags,
  price,
  timeline,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={fadeUp} className="mb-6">
            <Badge variant="outline" className="px-4 py-1.5 text-sm border-forest/50">
              {badge}
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
          >
            {title} <span className="text-gradient">{highlight}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs text-muted-foreground border border-border"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-2 text-sm">
              <Banknote size={18} className="text-forest" />
              <span className="text-muted-foreground">от</span>
              <span className="font-semibold">{price}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock size={18} className="text-forest" />
              <span className="text-muted-foreground">от</span>
              <span className="font-semibold">{timeline}</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="text-base px-8">
              <a href="https://t.me/masitnikov" target="_blank" rel="noopener noreferrer">
                Обсудить проект
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <a href="/#pricing">Тарифы и цены</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
