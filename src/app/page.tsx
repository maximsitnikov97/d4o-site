import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { JsonLd } from "@/components/JsonLd";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "D4O",
  alternateName: "DEV4OURSELVES",
  url: "https://d4o.tech",
  logo: "https://d4o.tech/og-image.png",
  description:
    "Продуктовое IT-агентство. SaaS-платформы, Telegram Mini-Apps, сервисы для маркетплейсов.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://t.me/masitnikov",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "D4O",
  url: "https://d4o.tech",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Какие технологии используете?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Основной стек: Next.js, React, TypeScript, Node.js, PostgreSQL, Tailwind CSS. Для Telegram — Telegram Bot API и Mini Apps SDK. Активно используем AI-инструменты для ускорения разработки.",
      },
    },
    {
      "@type": "Question",
      name: "Как происходит оплата?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Работаем по предоплате за спринт (обычно 1-2 недели). Первый платёж — после согласования ТЗ и прототипа. Это снижает риски для обеих сторон.",
      },
    },
    {
      "@type": "Question",
      name: "Что если нужно изменить ТЗ в процессе?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Это нормальная практика. Работаем спринтами — на каждом демо можно скорректировать приоритеты. Крупные изменения объёма обсуждаем отдельно.",
      },
    },
    {
      "@type": "Question",
      name: "Даёте ли гарантии?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Гарантия на исправление багов — 3 месяца после запуска. Работаем по договору с чётким описанием результата.",
      },
    },
    {
      "@type": "Question",
      name: "Работаете ли с NDA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, подписываем NDA перед началом работы. Конфиденциальность вашей идеи и данных — приоритет.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={faqJsonLd} />
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <Portfolio />
        <WhyUs />
        <Process />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
