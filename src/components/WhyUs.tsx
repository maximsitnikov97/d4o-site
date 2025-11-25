import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Heart, Rocket, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Разбираемся в твоём бизнесе",
    description:
      "Не делаем шаблонно — погружаемся в задачу, изучаем аудиторию и делаем продукт, который решает реальные проблемы.",
  },
  {
    icon: Brain,
    title: "AI-агенты в команде",
    description:
      "Используем искусственный интеллект для ускорения разработки в 2-3 раза. Без потери качества — только выигрыш во времени.",
  },
  {
    icon: Rocket,
    title: "Свой продукт = наш опыт",
    description:
      "Сами создали и продали сервис. Знаем изнутри, что важно для бизнеса: конверсия, удержание, масштабирование.",
  },
  {
    icon: Sparkles,
    title: "UI/UX без компромиссов",
    description:
      "Интерфейс, которым приятно пользоваться. Продуманные сценарии, красивый дизайн, внимание к каждой детали.",
  },
];

export function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Почему <span className="text-gradient">выбирают нас</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Мы не просто пишем код — создаём продукты, которыми сами бы хотели пользоваться
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-2xl glass hover:bg-surface-light/60 transition-all duration-300 glow-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-text-muted leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
