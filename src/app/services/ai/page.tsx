import type { Metadata } from "next";
import {
  MessageSquare,
  FileSearch,
  Workflow,
  BrainCircuit,
  ImageIcon,
  Database,
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/services/Breadcrumbs";
import { ServiceHero } from "@/components/services/ServiceHero";
import { UseCases } from "@/components/services/UseCases";
import { TechStack } from "@/components/services/TechStack";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata: Metadata = {
  title: "AI-интеграции для бизнеса",
  description:
    "Внедрение AI в бизнес-процессы: чат-боты с GPT, RAG-системы, автоматизация документов, анализ данных, AI-агенты. От 300 000 ₽, от 3 недель.",
  alternates: { canonical: "/services/ai" },
  openGraph: {
    title: "AI-интеграции для бизнеса | D4O",
    description:
      "Внедрение AI: чат-боты, RAG, автоматизация, анализ данных. От 300 000 ₽.",
    url: "https://d4o.tech/services/ai",
    siteName: "D4O",
    locale: "ru_RU",
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI-интеграции для бизнеса",
  description:
    "Внедрение AI в бизнес-процессы: чат-боты с GPT, RAG-системы, автоматизация документов, анализ данных и AI-агенты.",
  provider: {
    "@type": "Organization",
    name: "D4O",
    url: "https://d4o.tech",
  },
  areaServed: "RU",
  serviceType: "AI-интеграции",
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
    icon: <MessageSquare size={28} className="text-forest" />,
    title: "AI-чат-боты",
    description:
      "Умные чат-боты для поддержки клиентов и внутренних процессов. Понимают контекст, отвечают на сложные вопросы, интегрируются с вашими базами данных и CRM.",
  },
  {
    icon: <FileSearch size={28} className="text-forest" />,
    title: "RAG-системы",
    description:
      "Поиск и генерация ответов на основе ваших документов: базы знаний, регламенты, документация. AI находит нужную информацию и формулирует точный ответ.",
  },
  {
    icon: <Workflow size={28} className="text-forest" />,
    title: "AI-агенты и автоматизация",
    description:
      "Автономные AI-агенты для выполнения рутинных задач: обработка заявок, классификация писем, заполнение документов, мониторинг и оповещения.",
  },
  {
    icon: <BrainCircuit size={28} className="text-forest" />,
    title: "Анализ данных",
    description:
      "ML-модели для прогнозирования, сегментации, рекомендаций. Превращаем ваши данные в actionable insights — от предсказания оттока до оптимизации цен.",
  },
  {
    icon: <ImageIcon size={28} className="text-forest" />,
    title: "Генерация контента",
    description:
      "Автоматическая генерация текстов, описаний товаров, отчётов и презентаций. AI создаёт контент по вашим шаблонам и tone of voice.",
  },
  {
    icon: <Database size={28} className="text-forest" />,
    title: "Обработка документов",
    description:
      "Извлечение данных из PDF, сканов, таблиц. Распознавание, классификация и структурирование — от накладных до договоров.",
  },
];

const techStack = [
  { name: "OpenAI API", description: "GPT-4o, GPT-4o-mini" },
  { name: "Anthropic Claude", description: "Claude 3.5 Sonnet / Opus" },
  { name: "LangChain", description: "Оркестрация LLM-цепочек" },
  { name: "Pinecone / Qdrant", description: "Векторные базы данных" },
  { name: "Python", description: "ML-пайплайны и бэкенд" },
  { name: "Node.js", description: "API и интеграции" },
  { name: "Next.js / React", description: "Интерфейсы и дашборды" },
  { name: "PostgreSQL + pgvector", description: "Хранение и векторный поиск" },
];

const faqItems = [
  {
    q: "Какие задачи можно решить с помощью AI?",
    a: "Практически любые задачи, связанные с текстом, данными и рутиной: ответы на вопросы клиентов, генерация контента, классификация документов, прогнозирование спроса, поиск по базе знаний, автоматизация отчётов. Если задача повторяемая — скорее всего, AI с ней справится.",
  },
  {
    q: "Сколько стоит внедрение AI?",
    a: "Простой чат-бот или RAG-система — от 300 000 ₽. Комплексная AI-интеграция с несколькими агентами и кастомными моделями — от 600 000 ₽. Точная оценка — после анализа вашей задачи.",
  },
  {
    q: "Какие сроки внедрения?",
    a: "Прототип AI-решения — 2-3 недели. Продакшен-версия с интеграциями — от 3 до 8 недель. Начинаем с пилота, чтобы быстро проверить гипотезу перед масштабированием.",
  },
  {
    q: "Безопасно ли передавать данные в AI?",
    a: "Да. Используем API с enterprise-уровнем безопасности: данные не используются для обучения моделей. При необходимости разворачиваем модели on-premise или в вашем облаке. Все данные шифруются в транзите и в покое.",
  },
  {
    q: "Что такое RAG и зачем он нужен?",
    a: "RAG (Retrieval-Augmented Generation) — это подход, при котором AI ищет релевантную информацию в ваших документах и генерирует ответ на их основе. Это позволяет AI отвечать точно по вашим данным, а не «придумывать». Идеально для баз знаний, техподдержки и внутренних справочников.",
  },
  {
    q: "Можно ли использовать свои данные для обучения модели?",
    a: "Да. Для RAG-систем загружаем ваши документы в векторную базу — модель отвечает на их основе. Для более сложных случаев делаем fine-tuning (дообучение) моделей на ваших данных для повышения точности.",
  },
  {
    q: "Какие API и модели используете?",
    a: "Работаем с OpenAI (GPT-4o), Anthropic (Claude), а также open-source моделями (Mistral, Llama). Выбор зависит от задачи: для генерации текста — GPT-4o, для анализа документов — Claude, для приватности — self-hosted модели.",
  },
];

export default function AIPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Услуги", href: "/#services" },
            { label: "AI-интеграции" },
          ]}
        />
      </div>
      <ServiceHero
        badge="AI"
        title="AI-интеграции"
        highlight="для бизнеса"
        description="Внедряем AI в ваши бизнес-процессы: от умных чат-ботов и RAG-систем до автоматизации документооборота и предиктивной аналитики. Не абстрактный AI, а конкретные решения с измеримым ROI."
        tags={["OpenAI", "LLM", "RAG", "AI Agents", "ML"]}
        price="300 000 ₽"
        timeline="3 недель"
      />
      <UseCases items={useCases} />
      <TechStack items={techStack} />
      <ServiceFAQ items={faqItems} />
      <ServiceCTA
        title="Внедрим AI в ваш бизнес?"
        description="Бесплатная консультация — разберём задачу и предложим решение с оценкой ROI. Ответим в течение часа."
      />
    </>
  );
}
