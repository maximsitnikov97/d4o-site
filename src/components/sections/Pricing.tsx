"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Telegram бот / Mini-App",
    price: "от 80 000 ₽",
    timeline: "от 3 недель",
    features: [
      "Telegram Mini-App или бот",
      "Интеграция с CRM / платежами",
      "Админ-панель",
      "Деплой и настройка",
    ],
  },
  {
    name: "SaaS-платформа (MVP)",
    price: "от 300 000 ₽",
    timeline: "от 6 недель",
    popular: true,
    features: [
      "Личный кабинет и подписки",
      "API и интеграции",
      "Аналитика и дашборды",
      "Адаптивный дизайн",
      "CI/CD и мониторинг",
    ],
  },
  {
    name: "Комплексный продукт",
    price: "от 800 000 ₽",
    timeline: "от 10 недель",
    features: [
      "Всё из SaaS MVP",
      "Мобильное приложение",
      "AI-интеграции",
      "Масштабируемая архитектура",
      "Поддержка 3 месяца",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">Цены</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Прозрачные <span className="text-gradient">тарифы</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Точную стоимость рассчитаем после консультации — это бесплатно
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative rounded-2xl border p-6 sm:p-8 transition-colors ${
                  plan.popular
                    ? "border-forest bg-card"
                    : "border-border bg-card hover:border-forest/40"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-6">Популярный</Badge>
                )}
                <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                <div className="text-3xl font-extrabold text-gradient mb-1">
                  {plan.price}
                </div>
                <p className="text-sm text-muted-foreground mb-6">{plan.timeline}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="shrink-0 text-forest" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={plan.popular ? "default" : "outline"} className="w-full">
                  <a href="#contact">
                    Обсудить проект
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
