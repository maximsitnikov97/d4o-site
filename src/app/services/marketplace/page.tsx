import type { Metadata } from "next";
import {
  BarChart3,
  TrendingUp,
  Package,
  Calculator,
  RefreshCw,
  FileText,
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/services/Breadcrumbs";
import { ServiceHero } from "@/components/services/ServiceHero";
import { UseCases } from "@/components/services/UseCases";
import { TechStack } from "@/components/services/TechStack";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata: Metadata = {
  title: "Сервисы для селлеров маркетплейсов",
  description:
    "Разработка сервисов для Wildberries и Ozon: аналитика продаж, автоматизация поставок, управление ценами, мониторинг конкурентов. От 300 000 ₽, от 4 недель.",
  alternates: { canonical: "/services/marketplace" },
  openGraph: {
    title: "Сервисы для селлеров маркетплейсов | D4O",
    description:
      "Сервисы для WB и Ozon: аналитика, автоматизация, управление ценами. От 300 000 ₽.",
    url: "https://d4o.tech/services/marketplace",
    siteName: "D4O",
    locale: "ru_RU",
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Сервисы для маркетплейсов",
  description:
    "Разработка сервисов для селлеров Wildberries и Ozon: аналитика продаж, автоматизация поставок, управление ценами, мониторинг конкурентов.",
  provider: {
    "@type": "Organization",
    name: "D4O",
    url: "https://d4o.tech",
  },
  areaServed: "RU",
  serviceType: "Разработка сервисов для маркетплейсов",
  offers: {
    "@type": "Offer",
    priceCurrency: "RUB",
    price: "300000",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: "300000",
      priceCurrency: "RUB",
    },
  },
};

const useCases = [
  {
    icon: <BarChart3 size={28} className="text-forest" />,
    title: "Аналитика продаж",
    description:
      "Дашборды с ключевыми метриками: выручка, маржинальность, оборачиваемость, ABC-анализ. Данные из WB и Ozon в одном месте с автоматическим обновлением.",
  },
  {
    icon: <TrendingUp size={28} className="text-forest" />,
    title: "Управление ценами",
    description:
      "Автоматический мониторинг цен конкурентов и динамическое ценообразование. Правила репрайсинга, минимальная маржа, реакция на акции маркетплейса.",
  },
  {
    icon: <Package size={28} className="text-forest" />,
    title: "Управление поставками",
    description:
      "Планирование поставок на основе прогноза спроса, остатков на складах и сроков доставки. Оптимизация FBO и FBS логистики.",
  },
  {
    icon: <Calculator size={28} className="text-forest" />,
    title: "Юнит-экономика",
    description:
      "Расчёт себестоимости с учётом всех комиссий маркетплейса, логистики, хранения и возвратов. Точное понимание прибыли по каждому SKU.",
  },
  {
    icon: <RefreshCw size={28} className="text-forest" />,
    title: "Автоматизация рутины",
    description:
      "Автоответы на отзывы, генерация карточек товаров, массовое обновление цен и остатков, автоматическая загрузка контента.",
  },
  {
    icon: <FileText size={28} className="text-forest" />,
    title: "Отчёты и документы",
    description:
      "Автоматическая сверка с маркетплейсом, формирование отчётов для бухгалтерии, контроль удержаний и штрафов.",
  },
];

const techStack = [
  { name: "WB API", description: "Wildberries Statistics & Content API" },
  { name: "Ozon API", description: "Seller API и Performance API" },
  { name: "Next.js / React", description: "Интерфейс и дашборды" },
  { name: "Node.js", description: "Бэкенд и обработка данных" },
  { name: "PostgreSQL", description: "Хранение аналитики" },
  { name: "ClickHouse", description: "Быстрая аналитика больших объёмов" },
  { name: "Redis + BullMQ", description: "Очереди и фоновые задачи" },
  { name: "Python", description: "ML-модели и прогнозирование" },
];

const faqItems = [
  {
    q: "С какими маркетплейсами работаете?",
    a: "Основной фокус — Wildberries и Ozon, так как они покрывают 80% рынка. Также работаем с Яндекс.Маркет и другими площадками по запросу. Можем объединить данные из нескольких маркетплейсов в единый дашборд.",
  },
  {
    q: "Чем ваш сервис лучше готовых решений?",
    a: "Готовые решения (MPStats, Sellmonitor) — универсальные. Мы создаём инструмент точно под ваши процессы: кастомные метрики, интеграция с вашей 1С или ERP, уникальные алгоритмы ценообразования. Вы платите за то, что реально используете.",
  },
  {
    q: "Сколько стоит разработка?",
    a: "MVP аналитического сервиса — от 300 000 ₽. Комплексная платформа с репрайсингом, прогнозированием и автоматизацией — от 600 000 ₽. Точная оценка — после изучения ваших процессов.",
  },
  {
    q: "Какие сроки разработки?",
    a: "MVP с базовой аналитикой — от 4 недель. Полноценная платформа — 2-4 месяца. Работаем итерациями: каждые 2 недели показываем результат.",
  },
  {
    q: "Как происходит интеграция с API маркетплейсов?",
    a: "Подключаемся через официальные API Wildberries и Ozon. Настраиваем автоматическую синхронизацию данных, обрабатываем лимиты запросов, кэшируем для быстрого доступа. Данные обновляются от раза в час до реального времени.",
  },
  {
    q: "Можно ли интегрировать с 1С или МоимСкладом?",
    a: "Да. Настраиваем двустороннюю синхронизацию с 1С, МоимСкладом и другими учётными системами. Остатки, цены, заказы и поставки обновляются автоматически.",
  },
];

export default function MarketplacePage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Услуги", href: "/#services" },
            { label: "Сервисы для маркетплейсов" },
          ]}
        />
      </div>
      <ServiceHero
        badge="Маркетплейсы"
        title="Сервисы для селлеров"
        highlight="маркетплейсов"
        description="Разрабатываем инструменты для продавцов на Wildberries и Ozon: аналитика продаж, управление ценами, автоматизация поставок и мониторинг конкурентов. Кастомные решения, заточенные под ваши процессы."
        tags={["WB API", "Ozon API", "Analytics", "Automation"]}
        price="300 000 ₽"
        timeline="4 недель"
      />
      <UseCases items={useCases} />
      <TechStack items={techStack} />
      <ServiceFAQ items={faqItems} />
      <ServiceCTA
        title="Автоматизируем ваш бизнес на маркетплейсах?"
        description="Бесплатная консультация — разберём ваши процессы и предложим решение. Ответим в течение часа."
      />
    </>
  );
}
