"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Cpu, ShieldCheck, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import maximPhoto from "../../../public/founder/maxim.jpg";

const values = [
  {
    icon: Briefcase,
    title: "Бизнес-мышление",
    description: "За каждым решением — логика прибыли, а не просто техническое задание.",
  },
  {
    icon: Cpu,
    title: "Глубина, а не хайп",
    description: "Применяем ИИ осознанно: понимаем, что и зачем делаем на каждом уровне.",
  },
  {
    icon: ShieldCheck,
    title: "Ответственность основателя",
    description: "Ключевые проекты веду лично — от архитектуры до результата.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Founder() {
  return (
    <section id="founder" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <Badge variant="outline" className="mb-4">Об основателе</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Кто стоит <span className="text-gradient">за D4O</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-[minmax(260px,340px)_1fr] gap-10 lg:gap-14 items-start">
            {/* Фото */}
            <motion.div variants={fadeUp} className="mx-auto w-full max-w-sm lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border glow-green-sm">
                <Image
                  src={maximPhoto}
                  alt="Максим Ситников — главный инженер и основатель D4O"
                  fill
                  sizes="(max-width: 1024px) 100vw, 340px"
                  className="object-cover object-[center_20%]"
                  placeholder="blur"
                  priority={false}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5">
                  <div className="text-base font-semibold text-white">Максим Ситников</div>
                  <div className="text-sm text-white/70">Главный инженер и основатель D4O</div>
                </div>
              </div>
            </motion.div>

            {/* Текст */}
            <div>
              <motion.div variants={fadeUp} className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Предприниматель с опытом создания, масштабирования и продажи собственных
                  digital-продуктов. Основал несколько сервисов для селлеров и e-commerce: один
                  проект продан, другой вырос до 800+ платящих клиентов. Сегодня
                  развиваю{" "}
                  <a
                    href="https://giftshelf.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest hover:text-forest-light transition-colors"
                  >
                    giftshelf.ru
                  </a>{" "}
                  — платформу для сбора и работы с аудиторией, которой пользуются десятки брендов с
                  оборотом от 10 млн ₽ в месяц.
                </p>
                <p>
                  Имею профильное IT-образование и полностью погрузился в разработку с использованием
                  ИИ. Принципиально не ограничиваюсь генерацией кода по промптам — разбираюсь в
                  архитектуре, инструментах и сути каждого решения. Текущий продукт спроектировал и
                  написал самостоятельно, от первой строки до продакшена.
                </p>
                <p className="text-foreground">
                  Я понимаю обе стороны продукта — инженерную и бизнесовую. Поэтому в D4O мы создаём
                  не «сайты и боты», а работающие инструменты, которые приносят клиентам деньги.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 grid sm:grid-cols-3 gap-4">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-forest/40"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-forest/10">
                      <value.icon size={20} className="text-forest" />
                    </div>
                    <h3 className="mb-1.5 text-sm font-semibold">{value.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8">
                <Button asChild size="lg" className="text-base px-8">
                  <a href="https://t.me/masitnikov" target="_blank" rel="noopener noreferrer">
                    <Send className="mr-2 h-4 w-4" />
                    Написать в Telegram
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
