"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Code2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "50+", label: "Запущенных продуктов" },
  { value: "x3", label: "Быстрее с AI" },
  { value: "4+", label: "Лет в разработке" },
  { value: "1", label: "Успешный Exit" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className=""
        >
          <motion.div variants={fadeUp} className="mb-6">
            <Badge variant="outline" className="px-4 py-1.5 text-sm gap-2 border-forest/50">
              <Zap size={14} className="fill-forest-light text-forest-light" />
              <span className="text-forest-light font-semibold">AI-first</span>
              <span className="text-muted-foreground">разработка</span>
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
          >
            Разрабатываем{" "}
            <span className="text-gradient">IT-продукты</span>
            <br />
            которые зарабатывают
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            SaaS-платформы, Telegram Mini-Apps и сервисы для маркетплейсов.
            AI-агенты ускоряют разработку в 3 раза — вы получаете продукт быстрее и дешевле.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="text-base px-8">
              <a href="https://t.me/masitnikov" target="_blank" rel="noopener noreferrer">
                Обсудить проект
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <a href="#pricing">Рассчитать стоимость</a>
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
            {[
              { icon: Code2, text: "Продуктовый подход" },
              { icon: Zap, text: "AI-агенты в разработке" },
              { icon: Rocket, text: "От MVP до масштабирования" },
            ].map((item) => (
              <span
                key={item.text}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-muted-foreground border border-border"
              >
                <item.icon size={14} className="text-forest" />
                {item.text}
              </span>
            ))}
          </motion.div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient">
                {stat.value}
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
