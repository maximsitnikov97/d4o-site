"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const cases = [
  {
    title: "GiftShelf (Полка)",
    type: "SaaS",
    description: "Платформа программ лояльности для селлеров маркетплейсов. Полный цикл: идея → MVP → продукт.",
    stack: ["Next.js", "PostgreSQL", "Telegram Bot"],
    result: "Запущен в production, активные пользователи",
  },
  {
    title: "Сервис самовыкупов",
    type: "SaaS / Exit",
    description: "Создал и продал. Полный путь продукта от разработки до exit.",
    stack: ["React", "Node.js", "WB API"],
    result: "Успешная продажа бизнеса",
  },
  {
    title: "FlyFit",
    type: "Telegram Mini-App",
    description: "Фитнес-приложение с геймификацией. Интеграция с Telegram.",
    stack: ["Telegram Mini App", "React", "Gamification"],
    result: "Активное использование в Telegram",
  },
  {
    title: "Реферальная платформа",
    type: "Внутренний продукт",
    description: "Реферальная программа для бизнеса с аналитикой и автовыплатами.",
    stack: ["Next.js", "Stripe", "Analytics"],
    result: "Автоматизация реферальных выплат",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Portfolio() {
  return (
    <section id="cases" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <Badge variant="outline" className="mb-4">Кейсы</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Наши <span className="text-gradient">проекты</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {cases.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-2xl border border-border bg-card p-6 sm:p-8 transition-colors hover:border-forest/40"
              >
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">{item.type}</Badge>
                  <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <p className="text-sm text-forest-light mb-4">{item.result}</p>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-0.5 rounded-full border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
