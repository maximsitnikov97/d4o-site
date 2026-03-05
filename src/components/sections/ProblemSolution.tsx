"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

const problems = [
  "Называют сроки 4-6 месяцев на MVP — и это только начало",
  "Говорят на техническом языке, не понимают бизнес и продукт",
  "Не получается найти общий язык — вы о метриках, они о спринтах",
  "Долго, дорого, непрозрачно — результат не оправдывает ожиданий",
];

const solutions = [
  "MVP за 3-6 недель благодаря AI-ускорению x3",
  "Сам предприниматель — говорю на языке бизнеса, не кода",
  "Думаю о конверсии, unit-экономике и удержании — как вы",
  "Спринты с еженедельными демо — полный контроль и прозрачность",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function ProblemSolution() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Problem */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              Знакомая ситуация?
            </h2>
            <ul className="space-y-5">
              {problems.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <XCircle size={20} className="mt-0.5 shrink-0 text-destructive" />
                  <span className="text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              Мы работаем <span className="text-gradient">иначе</span>
            </h2>
            <ul className="space-y-5">
              {solutions.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-0.5 shrink-0 text-forest" />
                  <span className="text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
