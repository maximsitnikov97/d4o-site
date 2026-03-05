"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface TechItem {
  name: string;
  description: string;
}

interface TechStackProps {
  items: TechItem[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function TechStack({ items }: TechStackProps) {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <Badge variant="outline" className="mb-4">Технологии</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Наш <span className="text-gradient">стек</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                whileHover={{ y: -2 }}
                className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-forest/40"
              >
                <div className="font-semibold text-sm mb-1">{item.name}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
