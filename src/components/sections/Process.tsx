"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Code2, TestTube, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    icon: MessageSquare,
    num: "01",
    title: "Бесплатная консультация",
    description: "Разбираемся в задаче, оцениваем объём, предлагаем решение.",
  },
  {
    icon: FileText,
    num: "02",
    title: "ТЗ и прототип",
    description: "Согласуем логику и дизайн до написания кода.",
  },
  {
    icon: Code2,
    num: "03",
    title: "Разработка спринтами",
    description: "Демо каждую неделю — вы влияете на процесс в реальном времени.",
  },
  {
    icon: TestTube,
    num: "04",
    title: "Тестирование и запуск",
    description: "QA, деплой, мониторинг. Убеждаемся что всё работает.",
  },
  {
    icon: Rocket,
    num: "05",
    title: "Поддержка и развитие",
    description: "Доработки, масштабирование, аналитика после запуска.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <Badge variant="outline" className="mb-4">Процесс</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Пять шагов до <span className="text-gradient">запуска</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {steps.map((step) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-start gap-5 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-forest/40"
              >
                <div className="flex shrink-0 items-center justify-center w-12 h-12 rounded-xl bg-forest/10">
                  <step.icon size={22} className="text-forest" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs text-forest opacity-60">{step.num}</span>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
