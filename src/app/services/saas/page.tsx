import type { Metadata } from "next";
import {
  LayoutDashboard,
  CreditCard,
  Users,
  BarChart3,
  Settings,
  Shield,
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/services/Breadcrumbs";
import { ServiceHero } from "@/components/services/ServiceHero";
import { UseCases } from "@/components/services/UseCases";
import { TechStack } from "@/components/services/TechStack";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata: Metadata = {
  title: "Разработка SaaS-платформы под ключ",
  description:
    "Разработка SaaS-платформ: личные кабинеты, подписки, мультитенантность, API, дашборды и аналитика. Полный цикл от MVP до масштабирования. От 500 000 ₽, от 6 недель.",
  alternates: { canonical: "/services/saas" },
  openGraph: {
    title: "Разработка SaaS-платформы под ключ | D4O",
    description:
      "SaaS-платформы под ключ: подписки, мультитенантность, API, дашборды. От 500 000 ₽.",
    url: "https://d4o.tech/services/saas",
    siteName: "D4O",
    locale: "ru_RU",
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Разработка SaaS-платформы",
  description:
    "Создание SaaS-платформ под ключ: личные кабинеты, подписки, биллинг, API, мультитенантность, аналитика и дашборды.",
  provider: {
    "@type": "Organization",
    name: "D4O",
    url: "https://d4o.tech",
  },
  areaServed: "RU",
  serviceType: "Разработка SaaS-платформы",
  offers: {
    "@type": "Offer",
    priceCurrency: "RUB",
    price: "500000",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: "500000",
      priceCurrency: "RUB",
    },
  },
};

const useCases = [
  {
    icon: <LayoutDashboard size={28} className="text-forest" />,
    title: "Личные кабинеты и дашборды",
    description:
      "Интуитивные интерфейсы для ваших пользователей: управление аккаунтом, настройки, визуализация данных и метрик в реальном времени.",
  },
  {
    icon: <CreditCard size={28} className="text-forest" />,
    title: "Биллинг и подписки",
    description:
      "Гибкая система тарифов, триал-периоды, апгрейды и даунгрейды, автоматическое продление. Интеграция с ЮKassa, Stripe и эквайрингом.",
  },
  {
    icon: <Users size={28} className="text-forest" />,
    title: "Мультитенантность",
    description:
      "Архитектура для обслуживания множества клиентов из единой кодовой базы. Изоляция данных, кастомизация под каждого арендатора, масштабирование.",
  },
  {
    icon: <BarChart3 size={28} className="text-forest" />,
    title: "Аналитика и отчёты",
    description:
      "Встроенная аналитика для ваших пользователей и для вас: метрики использования, воронки, когорты, экспорт данных и автоматические отчёты.",
  },
  {
    icon: <Settings size={28} className="text-forest" />,
    title: "API и интеграции",
    description:
      "REST и GraphQL API для внешних интеграций, вебхуки, OAuth 2.0, SSO. Документация API в Swagger/OpenAPI для ваших клиентов-разработчиков.",
  },
  {
    icon: <Shield size={28} className="text-forest" />,
    title: "Безопасность и compliance",
    description:
      "Аутентификация 2FA, ролевая модель доступа (RBAC), шифрование данных, аудит-логи. Соответствие 152-ФЗ и GDPR по запросу.",
  },
];

const techStack = [
  { name: "Next.js / React", description: "Фронтенд и SSR" },
  { name: "Node.js", description: "Бэкенд и API" },
  { name: "PostgreSQL", description: "Основная база данных" },
  { name: "Redis", description: "Кэширование и очереди" },
  { name: "Stripe / ЮKassa", description: "Биллинг и платежи" },
  { name: "Docker / K8s", description: "Контейнеризация и оркестрация" },
  { name: "Vercel / AWS", description: "Хостинг и инфраструктура" },
  { name: "TypeScript", description: "Типизация на всех уровнях" },
];

const faqItems = [
  {
    q: "Что входит в разработку SaaS-платформы?",
    a: "Полный цикл: проектирование архитектуры, дизайн интерфейса, фронтенд и бэкенд разработка, настройка биллинга, тестирование, деплой и документация. Вы получаете готовый к запуску продукт.",
  },
  {
    q: "Сколько стоит разработка SaaS?",
    a: "MVP SaaS-платформы — от 500 000 ₽. Стоимость зависит от количества модулей, интеграций и сложности бизнес-логики. Точную оценку даём за 2-3 дня после изучения требований.",
  },
  {
    q: "Какие сроки разработки MVP?",
    a: "MVP SaaS-платформы — от 6 недель. За это время создаём ключевую функциональность, биллинг и личные кабинеты. Полноценная платформа — 3-6 месяцев в зависимости от объёма.",
  },
  {
    q: "Как устроена мультитенантность?",
    a: "Используем подход shared database с изоляцией по tenant_id. Каждый клиент видит только свои данные. При необходимости — отдельные схемы или базы для крупных клиентов. Архитектура масштабируется горизонтально.",
  },
  {
    q: "Можно ли начать с MVP и масштабировать потом?",
    a: "Именно так мы и рекомендуем. Стартуем с ключевых функций, получаем обратную связь от первых пользователей, затем итеративно развиваем продукт. Архитектура изначально проектируется с учётом масштабирования.",
  },
  {
    q: "Какой хостинг используете?",
    a: "Vercel для фронтенда, Railway или AWS для бэкенда — зависит от требований. Настраиваем CI/CD, мониторинг, автоматическое масштабирование и бэкапы.",
  },
  {
    q: "Помогаете ли с развитием продукта после запуска?",
    a: "Да. Предлагаем тарифы сопровождения: от исправления багов до полноценной продуктовой разработки. Многие клиенты работают с нами годами, развивая продукт итерациями.",
  },
];

export default function SaaSPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Услуги", href: "/#services" },
            { label: "SaaS-платформы" },
          ]}
        />
      </div>
      <ServiceHero
        badge="SaaS"
        title="Разработка SaaS-платформы"
        highlight="под ключ"
        description="Проектируем и создаём SaaS-продукты: от личных кабинетов и биллинга до мультитенантной архитектуры и API. Полный цикл разработки — от идеи до масштабирования на тысячи пользователей."
        tags={["Next.js", "React", "PostgreSQL", "Stripe", "API"]}
        price="300 000 ₽"
        timeline="6 недель"
      />
      <UseCases items={useCases} />
      <TechStack items={techStack} />
      <ServiceFAQ items={faqItems} />
      <ServiceCTA
        title="Запустим ваш SaaS?"
        description="Бесплатная консультация — обсудим архитектуру, оценим сроки и стоимость. Ответим в течение часа."
      />
    </>
  );
}
