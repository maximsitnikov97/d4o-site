"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const nodeAppear = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
};

function AgentNode({ label, role, accent }: { label: string; role: string; accent?: boolean }) {
  return (
    <motion.div
      variants={nodeAppear}
      className={`flex flex-col items-center gap-1.5 px-4 py-3 rounded-xl border text-center min-w-[100px] ${
        accent
          ? "border-forest bg-forest/10"
          : "border-border bg-surface"
      }`}
    >
      <span className={`text-xs font-mono ${accent ? "text-forest-light" : "text-muted-foreground"}`}>
        {role}
      </span>
      <span className={`text-sm font-semibold ${accent ? "text-forest-light" : "text-foreground"}`}>
        {label}
      </span>
    </motion.div>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <motion.div
      variants={nodeAppear}
      className={`flex items-center justify-center ${className}`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-forest/60">
        <path d="M12 5v14m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.div>
  );
}

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <motion.div
      variants={nodeAppear}
      className={`flex items-center justify-center ${className}`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-forest/60">
        <path d="M5 12h14m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.div>
  );
}

export function AgentWorkflow() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">AI-first подход</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Как работают <span className="text-gradient">AI-агенты</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto text-sm">
              Команда AI-агентов под управлением тех-лида — как настоящая студия, только в 3 раза быстрее
            </p>
          </motion.div>

          {/* Diagram */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card p-6 sm:p-10"
          >
            {/* Desktop layout */}
            <div className="hidden md:flex flex-col items-center gap-4">
              {/* Row 1: Input agents */}
              <div className="flex items-center gap-6">
                <AgentNode label="Аналитик" role="agent" />
                <AgentNode label="Дизайнер" role="agent" />
              </div>

              <Arrow />

              {/* Row 2: Tech Lead */}
              <AgentNode label="Тех-лид" role="orchestrator" accent />

              {/* Row 3: Delegation arrows */}
              <div className="flex items-center gap-2">
                <svg width="200" height="32" viewBox="0 0 200 32" fill="none" className="text-forest/40">
                  <path d="M100 0 v8 M100 8 H20 M100 8 H180 M20 8 v16 M100 8 v16 M180 8 v16" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M17 24l3 4 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M97 24l3 4 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M177 24l3 4 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Row 4: Sub-agents */}
              <div className="flex items-center gap-6">
                <AgentNode label="Frontend" role="sub-agent" />
                <AgentNode label="Backend" role="sub-agent" />
                <AgentNode label="Интеграции" role="sub-agent" />
              </div>

              {/* Row 5: Merge arrows */}
              <div className="flex items-center gap-2">
                <svg width="200" height="32" viewBox="0 0 200 32" fill="none" className="text-forest/40">
                  <path d="M20 0 v16 M100 0 v16 M180 0 v16 M20 16 H180 M100 16 v8" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M97 24l3 4 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Row 6: Review & Tests */}
              <div className="flex items-center gap-6">
                <AgentNode label="Code Review" role="quality" accent />
                <AgentNode label="Тесты" role="quality" accent />
              </div>

              <Arrow />

              {/* Row 7: Output */}
              <motion.div
                variants={nodeAppear}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-forest bg-forest/5"
              >
                <span className="text-sm font-bold text-forest-light">Готовый продукт</span>
              </motion.div>
            </div>

            {/* Mobile layout — vertical with arrows */}
            <div className="flex md:hidden flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                <AgentNode label="Аналитик" role="agent" />
                <span className="text-forest/40">+</span>
                <AgentNode label="Дизайнер" role="agent" />
              </div>

              <Arrow />
              <AgentNode label="Тех-лид" role="orchestrator" accent />
              <Arrow />

              <div className="flex items-center gap-3 flex-wrap justify-center">
                <AgentNode label="Frontend" role="sub-agent" />
                <AgentNode label="Backend" role="sub-agent" />
                <AgentNode label="Интеграции" role="sub-agent" />
              </div>

              <Arrow />

              <div className="flex items-center gap-3">
                <AgentNode label="Review" role="quality" accent />
                <AgentNode label="Тесты" role="quality" accent />
              </div>

              <Arrow />

              <motion.div
                variants={nodeAppear}
                className="px-6 py-3 rounded-xl border-2 border-forest bg-forest/5"
              >
                <span className="text-sm font-bold text-forest-light">Готовый продукт</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
