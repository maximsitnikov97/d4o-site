"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, MessageSquare, BarChart3, Bot, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Globe,
    title: "SaaS-платформы",
    description: "Личные кабинеты, подписки, API, аналитика, дашборды. Полный цикл от MVP до масштабирования.",
    tags: ["Next.js", "React", "PostgreSQL"],
    href: "/services/saas",
  },
  {
    icon: MessageSquare,
    title: "Telegram Mini-Apps и боты",
    description: "Магазины, бронирование, лояльность, платежи. Интеграция с CRM и платёжными системами.",
    tags: ["Telegram API", "Mini Apps", "Payments"],
    href: "/services/telegram-mini-app",
  },
  {
    icon: BarChart3,
    title: "Сервисы для маркетплейсов",
    description: "Аналитика, автоматизация, инструменты для селлеров WB и Ozon.",
    tags: ["WB API", "Ozon API", "Analytics"],
    href: "/services/marketplace",
  },
  {
    icon: Bot,
    title: "AI-интеграции",
    description: "Внедрение AI в бизнес-процессы: чат-боты, автоматизация, обработка данных.",
    tags: ["OpenAI", "LLM", "RAG"],
    href: "/services/ai",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <Badge variant="outline" className="mb-4">Услуги</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Что мы <span className="text-gradient">создаём</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  href={service.href}
                  className="group flex flex-col h-full rounded-2xl border border-border bg-card p-6 sm:p-8 transition-colors hover:border-forest/40"
                >
                  <service.icon size={28} className="text-forest mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-0.5 rounded-full border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-sm text-forest font-medium group-hover:underline">
                    Подробнее
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
