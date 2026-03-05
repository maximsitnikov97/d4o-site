"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Какие технологии используете?",
    a: "Основной стек: Next.js, React, TypeScript, Node.js, PostgreSQL, Tailwind CSS. Для Telegram — Telegram Bot API и Mini Apps SDK. Активно используем AI-инструменты для ускорения разработки.",
  },
  {
    q: "Как происходит оплата?",
    a: "Работаем по предоплате за спринт (обычно 1-2 недели). Первый платёж — после согласования ТЗ и прототипа. Это снижает риски для обеих сторон.",
  },
  {
    q: "Что если нужно изменить ТЗ в процессе?",
    a: "Это нормальная практика. Работаем спринтами — на каждом демо можно скорректировать приоритеты. Крупные изменения объёма обсуждаем отдельно.",
  },
  {
    q: "Даёте ли гарантии?",
    a: "Да. Гарантия на исправление багов — 3 месяца после запуска. Работаем по договору с чётким описанием результата.",
  },
  {
    q: "Работаете ли с NDA?",
    a: "Да, подписываем NDA перед началом работы. Конфиденциальность вашей идеи и данных — приоритет.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function FAQ() {
  return (
    <section id="faq" className="section-padding">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Частые <span className="text-gradient">вопросы</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-base text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
