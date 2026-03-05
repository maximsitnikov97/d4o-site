"use client";

import { motion } from "framer-motion";
import { User, Zap, Target, Eye, HeartHandshake, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const reasons = [
  {
    icon: User,
    title: "Сам предприниматель",
    description: "Понимаю не только код, но и бизнес. Создавал и продавал собственные продукты.",
  },
  {
    icon: Zap,
    title: "AI-ускорение x3",
    description: "Команда использует AI-агентов — быстрее без потери качества, дешевле для клиента.",
  },
  {
    icon: Target,
    title: "Продуктовый подход",
    description: "Не «выполняем ТЗ», а помогаем сделать рабочий бизнес с валидацией гипотез.",
  },
  {
    icon: Eye,
    title: "Полная прозрачность",
    description: "Спринты, еженедельные демо, Telegram-чат. Вы всегда знаете статус.",
  },
  {
    icon: HeartHandshake,
    title: "Поддержка после запуска",
    description: "Не бросаем после релиза. Доработки, мониторинг, масштабирование.",
  },
  {
    icon: TrendingUp,
    title: "Фокус на результат",
    description: "Unit-экономика, конверсия, удержание — метрики, которые важны бизнесу.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function WhyUs() {
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
            <Badge variant="outline" className="mb-4">Почему мы</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Шесть причин <span className="text-gradient">работать с нами</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason) => (
              <motion.div
                key={reason.title}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-forest/40"
              >
                <reason.icon size={24} className="text-forest mb-4" />
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
