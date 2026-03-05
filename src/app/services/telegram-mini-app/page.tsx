import type { Metadata } from "next";
import {
  ShoppingCart,
  CalendarCheck,
  Gift,
  CreditCard,
  Users,
  BarChart3,
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/services/Breadcrumbs";
import { ServiceHero } from "@/components/services/ServiceHero";
import { UseCases } from "@/components/services/UseCases";
import { TechStack } from "@/components/services/TechStack";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata: Metadata = {
  title: "Разработка Telegram Mini-App для бизнеса",
  description:
    "Создаём Telegram Mini-App под ключ: магазины, бронирование, программы лояльности, платёжные сервисы. Интеграция с CRM, платежами и Telegram Bot API. От 200 000 ₽, от 3 недель.",
  alternates: { canonical: "/services/telegram-mini-app" },
  openGraph: {
    title: "Разработка Telegram Mini-App для бизнеса | D4O",
    description:
      "Telegram Mini-App под ключ: магазины, бронирование, лояльность, платежи. От 200 000 ₽.",
    url: "https://d4o.tech/services/telegram-mini-app",
    siteName: "D4O",
    locale: "ru_RU",
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Разработка Telegram Mini-App",
  description:
    "Создание Telegram Mini-App для бизнеса: интернет-магазины, системы бронирования, программы лояльности, платёжные сервисы.",
  provider: {
    "@type": "Organization",
    name: "D4O",
    url: "https://d4o.tech",
  },
  areaServed: "RU",
  serviceType: "Разработка Telegram Mini-App",
  offers: {
    "@type": "Offer",
    priceCurrency: "RUB",
    price: "200000",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: "200000",
      priceCurrency: "RUB",
    },
  },
};

const useCases = [
  {
    icon: <ShoppingCart size={28} className="text-forest" />,
    title: "Интернет-магазин в Telegram",
    description:
      "Каталог товаров, корзина, оформление заказа и оплата — всё внутри Telegram. Клиенту не нужно скачивать приложение или переходить на сайт.",
  },
  {
    icon: <CalendarCheck size={28} className="text-forest" />,
    title: "Система бронирования",
    description:
      "Запись на услуги, выбор времени и специалиста, автоматические напоминания. Для салонов, клиник, коворкингов и сервисных компаний.",
  },
  {
    icon: <Gift size={28} className="text-forest" />,
    title: "Программа лояльности",
    description:
      "Бонусные карты, кэшбек, реферальные программы и акции. Удержание клиентов без отдельного приложения — всё прямо в мессенджере.",
  },
  {
    icon: <CreditCard size={28} className="text-forest" />,
    title: "Платёжный сервис",
    description:
      "Приём платежей через Telegram Payments, ЮKassa, Stripe. Подписки, разовые платежи, инвойсы и чеки по 54-ФЗ.",
  },
  {
    icon: <Users size={28} className="text-forest" />,
    title: "Корпоративный портал",
    description:
      "Внутренние инструменты для команды: согласования, заявки, опросы, база знаний. Удобно для распределённых команд.",
  },
  {
    icon: <BarChart3 size={28} className="text-forest" />,
    title: "Аналитический дашборд",
    description:
      "Визуализация данных, отчёты и метрики для руководителей прямо в Telegram. Быстрый доступ к ключевым показателям без десктопа.",
  },
];

const techStack = [
  { name: "Telegram Mini Apps SDK", description: "Нативный SDK для Telegram Web Apps" },
  { name: "Telegram Bot API", description: "Управление ботом и уведомлениями" },
  { name: "React / Next.js", description: "Фронтенд Mini-App" },
  { name: "Node.js", description: "Бэкенд и API" },
  { name: "PostgreSQL", description: "База данных" },
  { name: "Telegram Payments", description: "Встроенные платежи" },
  { name: "ЮKassa / Stripe", description: "Платёжные провайдеры" },
  { name: "Redis", description: "Кэширование и сессии" },
];

const faqItems = [
  {
    q: "Что такое Telegram Mini-App?",
    a: "Telegram Mini-App (ранее Web App) — это полноценное веб-приложение, которое открывается прямо в Telegram. Пользователю не нужно ничего скачивать — он получает нативный опыт мобильного приложения внутри мессенджера. Mini-App имеет доступ к данным пользователя, нативным элементам Telegram и встроенным платежам.",
  },
  {
    q: "Сколько стоит разработка Telegram Mini-App?",
    a: "Стоимость зависит от сложности. Простой магазин или система бронирования — от 200 000 ₽. Сложные проекты с кастомной логикой, интеграциями и админ-панелью — от 400 000 ₽. Точную оценку даём после изучения задачи — обычно за 1-2 дня.",
  },
  {
    q: "Какие сроки разработки?",
    a: "MVP Telegram Mini-App занимает от 3 недель. За это время создаём работающий продукт с основной функциональностью. Полноценное приложение с интеграциями и админ-панелью — 6-10 недель.",
  },
  {
    q: "Можно ли принимать оплату через Mini-App?",
    a: "Да. Telegram поддерживает встроенные платежи через Telegram Payments. Также можно подключить ЮKassa, Stripe и другие платёжные системы. Мы настраиваем чеки по 54-ФЗ и рекуррентные платежи.",
  },
  {
    q: "Будет ли Mini-App работать на всех устройствах?",
    a: "Да. Telegram Mini-App работает на iOS, Android и десктопе — везде, где есть Telegram. Мы тестируем на всех платформах и оптимизируем под разные размеры экрана.",
  },
  {
    q: "Как продвигать Mini-App?",
    a: "Mini-App легко распространять: ссылкой в чате, через бот, inline-кнопки, QR-коды и рекламу в Telegram Ads. Виральный эффект — пользователи делятся Mini-App одним нажатием.",
  },
  {
    q: "Предоставляете ли поддержку после запуска?",
    a: "Да. 3 месяца гарантийной поддержки: исправление багов, мониторинг, консультации. Далее — по тарифу сопровождения или разово.",
  },
];

export default function TelegramMiniAppPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Услуги", href: "/#services" },
            { label: "Telegram Mini-App" },
          ]}
        />
      </div>
      <ServiceHero
        badge="Telegram Mini-App"
        title="Разработка Telegram Mini-App"
        highlight="для бизнеса"
        description="Создаём полноценные приложения внутри Telegram: магазины, системы бронирования, программы лояльности и платёжные сервисы. Ваши клиенты получают удобный продукт без установки — прямо в мессенджере."
        tags={["Telegram API", "Mini Apps SDK", "Payments", "Bot API"]}
        price="80 000 ₽"
        timeline="3 недель"
      />
      <UseCases items={useCases} />
      <TechStack items={techStack} />
      <ServiceFAQ items={faqItems} />
      <ServiceCTA
        title="Запустим вашу Mini-App?"
        description="Бесплатная консультация — обсудим идею, оценим сроки и стоимость. Ответим в течение часа."
      />
    </>
  );
}
