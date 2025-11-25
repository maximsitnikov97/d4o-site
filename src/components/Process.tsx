import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Созвон",
    description:
      "Разбираемся в задаче, обсуждаем цели и считаем проект. Бесплатно.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Прототип",
    description:
      "Согласовываем логику, структуру и дизайн. Ты видишь результат до начала разработки.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Разработка",
    description:
      "Спринты с демо каждую неделю. Всегда в курсе прогресса, можешь влиять на процесс.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Запуск",
    description:
      "Деплой, тестирование, запуск. Поддержка и доработки после релиза.",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Как <span className="text-gradient">работаем</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Прозрачный процесс от первого сообщения до запуска
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2 opacity-20" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-center">
                  {/* Icon circle */}
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-surface to-surface-light flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
