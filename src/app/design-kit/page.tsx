"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Code2,
  Star,
  Check,
  Bot,
  BarChart3,
  Smartphone,
  Brain,
  Sparkles,
  MessageCircle,
  Shield,
  Clock,
  Eye,
  Heart,
  ChevronDown,
  Send,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/Logo";

/* ================================================================
   D4O Design Kit — Deep Forest Theme
   Шрифты: Onest (display) + Geologica (body) + JetBrains Mono (code)
   Палитра: #080C0A / #0F1A14 / #162419 / #166534 / #22C55E / #4ADE80 / #86EFAC
   ================================================================ */

export default function DesignKitPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ============================================================
          SECTION 0: KIT HEADER
          ============================================================ */}
      <div className="border-b border-border bg-surface/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Logo />
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            D4O Design Kit
          </h1>
          <p className="mt-2 text-muted-foreground text-lg font-sans">
            Deep Forest &middot; Onest + Geologica &middot; Все элементы
            лендинга
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Палитра",
              "Типографика",
              "Header",
              "Hero",
              "Проблема",
              "Услуги",
              "Кейсы",
              "Почему мы",
              "Процесс",
              "Тарифы",
              "FAQ",
              "CTA",
              "Footer",
            ].map((s) => (
              <span
                key={s}
                className="text-xs font-medium px-3 py-1 rounded-full bg-forest-dark/30 text-bright border border-forest-dark/50"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-32">
        {/* ============================================================
            SECTION 1: COLOR PALETTE
            ============================================================ */}
        <section>
          <SectionLabel>01 — Палитра Deep Forest</SectionLabel>
          <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { name: "BG Dark", hex: "#080C0A" },
              { name: "Surface", hex: "#0F1A14" },
              { name: "Surface Lt", hex: "#162419" },
              { name: "Primary Dark", hex: "#166534" },
              { name: "Primary", hex: "#22C55E", dark: true },
              { name: "Bright", hex: "#4ADE80", dark: true },
              { name: "Accent", hex: "#86EFAC", dark: true },
            ].map((c) => (
              <div key={c.name}>
                <div
                  className="h-24 rounded-xl border border-forest-dark/30"
                  style={{ background: c.hex }}
                />
                <p className="mt-2 text-xs font-semibold">{c.name}</p>
                <p className="text-[10px] font-mono text-muted-foreground">
                  {c.hex}
                </p>
              </div>
            ))}
          </div>

          {/* Gradients */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div>
              <div className="h-14 rounded-xl bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#4ADE80]" />
              <p className="mt-1 text-xs font-mono text-muted-foreground">
                Primary gradient
              </p>
            </div>
            <div>
              <div className="h-14 rounded-xl bg-gradient-to-r from-[#4ADE80] via-[#22C55E] to-[#166534]" />
              <p className="mt-1 text-xs font-mono text-muted-foreground">
                Reversed gradient
              </p>
            </div>
            <div>
              <div
                className="h-14 rounded-xl"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 50%, rgba(34,197,94,0.2), transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(74,222,128,0.15), transparent 60%), #080C0A",
                }}
              />
              <p className="mt-1 text-xs font-mono text-muted-foreground">
                Mesh gradient (hero BG)
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 2: TYPOGRAPHY
            ============================================================ */}
        <section>
          <SectionLabel>02 — Типографика</SectionLabel>
          <div className="mt-8 space-y-8 p-8 rounded-2xl bg-surface border border-border">
            <div>
              <Tag>Onest — Display / Headings</Tag>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mt-3 leading-[1.05]">
                Разрабатываем как{" "}
                <span className="text-gradient">для себя</span>
              </h1>
            </div>

            <div>
              <Tag>H2 — 2.25rem</Tag>
              <h2 className="text-4xl font-bold tracking-tight mt-2">
                SaaS-платформы & Telegram Mini-Apps
              </h2>
            </div>

            <div>
              <Tag>H3 — 1.5rem</Tag>
              <h3 className="text-2xl font-semibold mt-2">
                AI-ускорение, премиальное качество
              </h3>
            </div>

            <div className="border-t border-border pt-6">
              <Tag>Geologica — Body (16px / weight 400)</Tag>
              <p className="text-base leading-relaxed text-muted-foreground mt-2 max-w-2xl font-sans">
                Мы создаём цифровые продукты с такой же тщательностью и
                вниманием к деталям, как если бы делали их для собственного
                бизнеса. Каждая строчка кода написана с любовью и
                профессионализмом.
              </p>
            </div>

            <div>
              <Tag>Geologica — Small (14px / weight 500)</Tag>
              <p className="text-sm font-medium text-muted-foreground mt-2 font-sans">
                Точную стоимость рассчитаем после бесплатной консультации —
                отвечаем в течение часа.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <Tag>JetBrains Mono — Code</Tag>
              <code className="block font-mono text-forest mt-2 bg-forest-dark/20 px-4 py-3 rounded-xl text-sm border border-forest-dark/30">
                {"const roi = (revenue / investment) * 100 // → profit"}
              </code>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 3: HEADER (навигация)
            ============================================================ */}
        <section>
          <SectionLabel>03 — Header</SectionLabel>
          <div className="mt-8 rounded-2xl border border-border overflow-hidden">
            {/* Simulated header */}
            <header className="glass-strong px-6 py-4 flex items-center justify-between">
              <Logo />
              <nav className="hidden md:flex items-center gap-8">
                {["Услуги", "Кейсы", "Процесс", "Цены"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors font-sans"
                  >
                    {item}
                  </a>
                ))}
                <Button size="sm" className="">
                  Обсудить проект
                </Button>
              </nav>
              <button
                type="button"
                className="md:hidden text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </header>
            {mobileMenuOpen && (
              <div className="md:hidden bg-surface border-t border-border px-6 py-4 space-y-3">
                {["Услуги", "Кейсы", "Процесс", "Цены"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-sm font-medium text-foreground/70 font-sans"
                  >
                    {item}
                  </a>
                ))}
                <Button size="sm" className="w-full mt-2">
                  Обсудить проект
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================
            SECTION 4: HERO
            ============================================================ */}
        <section>
          <SectionLabel>04 — Hero (первый экран)</SectionLabel>
          <div className="mt-8 rounded-3xl border border-border overflow-hidden relative bg-background">
            <div className="absolute inset-0 bg-grid opacity-20" />

            <div className="relative px-6 md:px-16 py-20 md:py-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-6 bg-forest-dark/40 text-bright border-forest-dark/60 font-sans">
                  <Zap size={12} className="mr-1" />
                  AI-ускоренная разработка
                </Badge>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] max-w-4xl">
                  Разрабатываем IT&#8209;продукты, которые{" "}
                  <span className="text-aurora">зарабатывают</span>
                </h1>

                <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-sans">
                  SaaS-платформы, Telegram Mini-Apps и сервисы для
                  маркетплейсов. От предпринимателя, который сам создавал и
                  продавал сервисы.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button size="lg" className="text-base">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Обсудить проект
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base"
                  >
                    Рассчитать стоимость
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-border pt-8">
                  {[
                    { value: "5+", label: "Запущенных продуктов" },
                    { value: "x3", label: "Быстрее с AI" },
                    { value: "10+", label: "Лет в IT" },
                    { value: "1", label: "Успешный Exit" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl md:text-4xl font-bold text-gradient">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground font-sans">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 5: PROBLEM → SOLUTION
            ============================================================ */}
        <section>
          <SectionLabel>05 — Проблема → Решение</SectionLabel>
          <div className="mt-8 grid lg:grid-cols-2 gap-8">
            {/* Problems */}
            <div className="rounded-2xl bg-surface border border-border p-8">
              <h3 className="text-xl font-bold mb-6 text-foreground/80">
                Знакомая ситуация?
              </h3>
              <div className="space-y-4">
                {[
                  "Студия сделала сайт, но он не конвертирует",
                  "Разработчики не понимают бизнес, делают не то",
                  "Долго, дорого, непрозрачно",
                  "MVP так и не запустился — бюджет закончился",
                ].map((pain) => (
                  <div
                    key={pain}
                    className="flex items-start gap-3 p-3 rounded-xl bg-destructive/5 border border-destructive/10"
                  >
                    <X
                      size={18}
                      className="text-destructive shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-foreground/70 font-sans">
                      {pain}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="rounded-2xl bg-surface border border-forest-dark/40 p-8 ">
              <h3 className="text-xl font-bold mb-6 text-forest-light">
                Мы работаем иначе
              </h3>
              <div className="space-y-4">
                {[
                  "Сам предприниматель — понимаю бизнес, а не только код",
                  "AI-ускорение: x2-3 быстрее без потери качества",
                  "Спринты с еженедельными демо, полная прозрачность",
                  "Продуктовый подход: помогаем запустить работающий бизнес",
                ].map((solution) => (
                  <div
                    key={solution}
                    className="flex items-start gap-3 p-3 rounded-xl bg-forest-dark/15 border border-forest-dark/25"
                  >
                    <Check
                      size={18}
                      className="text-forest-light shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-foreground/80 font-sans">
                      {solution}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 6: SERVICES
            ============================================================ */}
        <section>
          <SectionLabel>06 — Услуги</SectionLabel>
          <div className="mt-2 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Что мы делаем
            </h2>
            <p className="mt-2 text-muted-foreground font-sans">
              Каждая услуга — отдельная SEO-страница со своим контентом
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Code2,
                title: "SaaS-платформы",
                desc: "Личные кабинеты, подписки, API, аналитика и дашборды. Полный цикл от идеи до масштабирования.",
                tags: ["React", "Node.js", "PostgreSQL"],
              },
              {
                icon: Smartphone,
                title: "Telegram Mini-Apps и боты",
                desc: "Магазины, бронирование, лояльность, платежи. Интеграция с CRM и аналитикой.",
                tags: ["Telegram API", "Mini Apps", "Payments"],
              },
              {
                icon: BarChart3,
                title: "Сервисы для маркетплейсов",
                desc: "Аналитика, автоматизация, инструменты для селлеров WB и Ozon.",
                tags: ["WB API", "Ozon API", "Analytics"],
              },
              {
                icon: Brain,
                title: "AI-интеграции",
                desc: "Внедрение AI в бизнес-процессы: чат-боты, автоматизация, генерация контента.",
                tags: ["OpenAI", "LLM", "RAG"],
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Card className="group relative overflow-hidden bg-surface border-border hover:border-forest-dark/60 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-dark/25 text-forest-light mb-3 group-hover:bg-forest-dark/40 transition-colors">
                      <item.icon size={24} />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                      {item.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono font-medium px-2 py-1 rounded-md bg-forest-dark/20 text-bright/70 border border-forest-dark/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-forest/5 to-transparent" />
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============================================================
            SECTION 7: CASES / PORTFOLIO
            ============================================================ */}
        <section>
          <SectionLabel>07 — Кейсы / Портфолио</SectionLabel>
          <div className="mt-2 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Наши проекты
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "GiftShelf (Полка)",
                type: "SaaS",
                desc: "Платформа программ лояльности для селлеров маркетплейсов. Полный цикл: идея → MVP → продукт.",
                status: "В разработке",
                color: "#22C55E",
              },
              {
                name: "Сервис самовыкупов",
                type: "SaaS / Exit",
                desc: "Создал и продал. Полный путь продукта от разработки до exit.",
                status: "Продан",
                color: "#4ADE80",
              },
              {
                name: "FlyFit",
                type: "Telegram Mini-App",
                desc: "Фитнес-приложение. Интеграция с Telegram, геймификация, трекинг.",
                status: "Запущен",
                color: "#86EFAC",
              },
              {
                name: "Реферальная платформа",
                type: "Внутренний продукт",
                desc: "Реферальная программа для бизнеса. Автоматизация выплат и аналитика.",
                status: "Запущен",
                color: "#166534",
              },
            ].map((project) => (
              <div
                key={project.name}
                className="group rounded-2xl border border-border bg-surface overflow-hidden hover:border-forest-dark/60 transition-all duration-300"
              >
                {/* Placeholder for screenshot */}
                <div
                  className="h-48 bg-gradient-to-br from-surface-elevated to-surface relative flex items-center justify-center"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, ${project.color}15, transparent 70%)`,
                  }}
                >
                  <span className="text-sm text-muted-foreground font-mono">
                    screenshot / mockup
                  </span>
                  <Badge
                    className="absolute top-4 right-4 font-sans text-xs"
                    variant="outline"
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold">{project.name}</h3>
                    <span className="text-xs font-mono text-forest px-2 py-0.5 rounded-md bg-forest-dark/20">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {project.desc}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-forest-light hover:text-bright transition-colors"
                  >
                    Подробнее
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
            SECTION 8: WHY US
            ============================================================ */}
        <section>
          <SectionLabel>08 — Почему мы</SectionLabel>
          <div className="mt-2 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Почему выбирают <span className="text-gradient">D4O</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Сам предприниматель",
                desc: "Понимаю не только код, но и unit-экономику, конверсию, удержание",
              },
              {
                icon: Zap,
                title: "AI-ускорение x2-3",
                desc: "Команда использует AI-агентов — быстрее и дешевле для клиента",
              },
              {
                icon: Eye,
                title: "Продуктовый подход",
                desc: "Не «выполняем ТЗ», а помогаем сделать рабочий бизнес",
              },
              {
                icon: Shield,
                title: "Прозрачный процесс",
                desc: "Спринты, еженедельные демо, Telegram-чат с командой",
              },
              {
                icon: Star,
                title: "Успешный Exit",
                desc: "Создал и продал собственный сервис — знаю весь путь",
              },
              {
                icon: Clock,
                title: "Поддержка после запуска",
                desc: "Доработки, масштабирование, продуктовая аналитика",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="p-6 rounded-2xl border border-border bg-surface/50 hover:border-forest-dark/50 transition-all duration-300 group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest-dark/25 text-forest-light mb-4 group-hover:bg-forest-dark/40 transition-colors">
                  <item.icon size={20} />
                </div>
                <h3 className="text-base font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============================================================
            SECTION 9: PROCESS
            ============================================================ */}
        <section>
          <SectionLabel>09 — Процесс работы</SectionLabel>
          <div className="mt-2 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Пять шагов до <span className="text-gradient">запуска</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Бесплатная консультация",
                desc: "Разбираемся в задаче, оцениваем объём и сроки. 30-60 минут в Zoom или Telegram.",
              },
              {
                step: "02",
                title: "Техническое задание и прототип",
                desc: "Согласуем логику, дизайн и архитектуру до написания первой строчки кода.",
              },
              {
                step: "03",
                title: "Разработка спринтами",
                desc: "Демо каждую неделю — вы видите прогресс и можете влиять на процесс.",
              },
              {
                step: "04",
                title: "Тестирование и запуск",
                desc: "QA, деплой, мониторинг — запускаем в продакшен и убеждаемся, что всё работает.",
              },
              {
                step: "05",
                title: "Поддержка и развитие",
                desc: "Доработки, масштабирование, продуктовая аналитика — растём вместе.",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group flex gap-6 items-start p-6 rounded-2xl border border-border hover:border-forest-dark/50 bg-surface/50 hover:bg-surface transition-all duration-300"
              >
                <span className="text-3xl font-bold text-gradient font-mono shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg font-bold group-hover:text-forest-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============================================================
            SECTION 10: PRICING
            ============================================================ */}
        <section>
          <SectionLabel>10 — Тарифы</SectionLabel>
          <div className="mt-2 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ориентировочные цены
            </h2>
            <p className="mt-2 text-muted-foreground font-sans">
              Точную стоимость рассчитаем после бесплатной консультации
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Telegram Mini-App",
                price: "от 200 000 ₽",
                time: "от 3 недель",
                features: [
                  "Проектирование UX/UI",
                  "Разработка и тестирование",
                  "Интеграция с платежами",
                  "Деплой и настройка",
                ],
                highlighted: false,
              },
              {
                title: "SaaS-платформа",
                price: "от 500 000 ₽",
                time: "от 6 недель",
                features: [
                  "Полный цикл разработки",
                  "Личный кабинет и API",
                  "Подписочная модель",
                  "Аналитика и дашборды",
                  "Поддержка после запуска",
                ],
                highlighted: true,
              },
              {
                title: "Комплексный продукт",
                price: "от 1 000 000 ₽",
                time: "от 10 недель",
                features: [
                  "Продуктовая стратегия",
                  "Дизайн-система",
                  "Разработка спринтами",
                  "AI-интеграции",
                  "DevOps и масштабирование",
                  "Выделенная команда",
                ],
                highlighted: false,
              },
            ].map((plan) => (
              <Card
                key={plan.title}
                className={`relative overflow-hidden ${
                  plan.highlighted
                    ? "border-forest/40 bg-surface"
                    : "border-border bg-surface"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest to-transparent" />
                )}
                <CardHeader>
                  {plan.highlighted && (
                    <Badge className="w-fit mb-2 bg-forest-dark/30 text-forest-light border-forest-dark/50 font-sans">
                      <Star size={12} className="mr-1 fill-forest-light" />
                      Популярный
                    </Badge>
                  )}
                  <CardTitle className="text-xl">{plan.title}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-gradient">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground ml-2 font-sans">
                      / {plan.time}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      <Check
                        size={16}
                        className="text-forest-light shrink-0"
                      />
                      <span className="text-muted-foreground font-sans">
                        {f}
                      </span>
                    </div>
                  ))}
                  <Button
                    className={`w-full mt-6 ${
                      plan.highlighted ? "" : ""
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    Обсудить проект
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ============================================================
            SECTION 11: FAQ
            ============================================================ */}
        <section>
          <SectionLabel>11 — FAQ</SectionLabel>
          <div className="mt-2 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Частые вопросы
            </h2>
          </div>

          <div className="max-w-3xl space-y-3">
            {[
              {
                q: "Какие технологии используете?",
                a: "Next.js, React, Node.js, PostgreSQL, Telegram Bot API. Для AI-интеграций — OpenAI, LangChain. Выбираем стек под задачу.",
              },
              {
                q: "Как происходит оплата?",
                a: "Предоплата 30-50% перед стартом, остальное — по спринтам или по завершении. Работаем по договору.",
              },
              {
                q: "Что если нужно изменить ТЗ в процессе?",
                a: "Это нормально. Работаем спринтами — новые требования добавляются в следующий спринт. Оцениваем влияние на сроки и бюджет.",
              },
              {
                q: "Даёте ли гарантии?",
                a: "Да. Гарантийный период 2 месяца после запуска — исправляем баги бесплатно. Также предлагаем SLA на поддержку.",
              },
              {
                q: "Работаете ли с NDA?",
                a: "Да, подписываем NDA перед началом работы. Ваши данные и идеи защищены.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-surface/50 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-sm pr-4">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-muted-foreground transition-transform duration-200 ${
                      faqOpen === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen === i && (
                  <div className="px-5 pb-5 -mt-1">
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
            SECTION 12: CTA
            ============================================================ */}
        <section>
          <SectionLabel>12 — CTA (финальный)</SectionLabel>
          <div className="mt-8 rounded-3xl border border-border bg-background p-10 md:p-16">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Готовы запустить{" "}
                <span className="text-gradient">свой продукт?</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground font-sans">
                Обсудим вашу идею бесплатно. Отвечаю в течение часа.
              </p>

              {/* Contact form preview */}
              <div className="mt-8 max-w-md mx-auto space-y-3">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm font-sans focus:border-forest focus:ring-2 focus:ring-forest/30 outline-none transition-all"
                  readOnly
                />
                <input
                  type="text"
                  placeholder="Telegram или телефон"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm font-sans focus:border-forest focus:ring-2 focus:ring-forest/30 outline-none transition-all"
                  readOnly
                />
                <textarea
                  placeholder="Кратко о проекте"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm font-sans focus:border-forest focus:ring-2 focus:ring-forest/30 outline-none transition-all resize-none"
                  readOnly
                />
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Button size="lg" className="text-base px-8">
                  <Send className="mr-2 h-5 w-5" />
                  Отправить заявку
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8"
                >
                  <Bot className="mr-2 h-5 w-5" />
                  Написать в Telegram
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 13: FOOTER
            ============================================================ */}
        <section>
          <SectionLabel>13 — Footer</SectionLabel>
          <footer className="mt-8 rounded-2xl border border-border bg-surface/50 p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <Logo />
                <p className="mt-3 text-sm text-muted-foreground font-sans max-w-xs">
                  Продуктовое IT-агентство. Разрабатываем как для себя.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-3">Навигация</h4>
                <div className="space-y-2">
                  {["Услуги", "Кейсы", "Процесс", "Цены", "FAQ"].map(
                    (item) => (
                      <a
                        key={item}
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
                      >
                        {item}
                      </a>
                    )
                  )}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-3">Контакты</h4>
                <div className="space-y-2 text-sm text-muted-foreground font-sans">
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                  >
                    <MessageCircle size={14} />
                    Telegram
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                  >
                    <Send size={14} />
                    hello@d4o.tech
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground font-sans">
                &copy; 2026 D4O (DEV 4 OURSELVES). Все права защищены.
              </p>
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors font-sans"
              >
                Политика конфиденциальности
              </a>
            </div>
          </footer>
        </section>

        {/* Magic UI effects section removed — keeping design minimal */}

        {/* ============================================================
            SECTION 15: BUTTONS & BADGES REFERENCE
            ============================================================ */}
        <section>
          <SectionLabel>14 — Кнопки & Бейджи</SectionLabel>

          <div className="mt-8 space-y-8">
            <div>
              <Tag>Кнопки — все варианты</Tag>
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <Button size="lg" className="">
                  Primary CTA <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Outline Large
                </Button>
                <Button size="lg" variant="secondary">
                  Secondary
                </Button>
                <Button size="lg" variant="ghost">
                  Ghost
                </Button>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <Button>Default</Button>
                <Button size="sm">Small</Button>
                <Button variant="outline" size="sm">
                  Outline SM
                </Button>
                <Button variant="destructive" size="sm">
                  Destructive
                </Button>
                <Button variant="link">Link style</Button>
              </div>
            </div>

            <div>
              <Tag>Бейджи</Tag>
              <div className="mt-3 flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge className="bg-forest-dark/30 text-forest-light border-forest-dark/50">
                  <Zap size={12} className="mr-1" />
                  AI-first
                </Badge>
                <Badge className="bg-forest-dark/30 text-bright border-forest-dark/50">
                  <Sparkles size={12} className="mr-1" />
                  Новое
                </Badge>
                <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                  <Check size={12} className="mr-1" />
                  Готово
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 16: SPACING & RADIUS
            ============================================================ */}
        <section>
          <SectionLabel>15 — Spacing & Radius</SectionLabel>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Tag>Section Padding</Tag>
              <div className="space-y-2 text-sm font-sans">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mobile</span>
                  <span className="font-mono">py-24 (6rem)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Desktop</span>
                  <span className="font-mono">py-32 (8rem)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Container</span>
                  <span className="font-mono">max-w-7xl px-6</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Card padding</span>
                  <span className="font-mono">p-6 / p-8</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Tag>Border Radius</Tag>
              <div className="flex flex-wrap gap-3">
                {[
                  { r: "rounded-lg", label: "lg" },
                  { r: "rounded-xl", label: "xl" },
                  { r: "rounded-2xl", label: "2xl" },
                  { r: "rounded-3xl", label: "3xl" },
                  { r: "rounded-full", label: "full" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`w-16 h-16 bg-forest-dark/30 border border-forest-dark/50 ${item.r} flex items-center justify-center`}
                  >
                    <span className="text-[9px] font-mono text-bright">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Kit footer */}
      <div className="border-t border-border py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-muted-foreground font-sans">
          D4O Design Kit &middot; Deep Forest &middot; Onest + Geologica +
          JetBrains Mono
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   Helper components
   ================================================================ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-block text-[11px] font-semibold uppercase tracking-[2px] text-bright bg-forest-dark/20 border border-forest-dark/40 px-4 py-1.5 rounded-full mb-6">
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-widest">
      {children}
    </span>
  );
}
