"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCTAProps {
  title: string;
  description: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function ServiceCTA({ title, description }: ServiceCTAProps) {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="rounded-2xl border border-border bg-card p-8 sm:p-12 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground mb-8 max-w-xl mx-auto"
          >
            {description}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="text-base px-8">
              <a href="https://t.me/masitnikov" target="_blank" rel="noopener noreferrer">
                Обсудить проект
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <a href="/#contact">Заполнить бриф</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
