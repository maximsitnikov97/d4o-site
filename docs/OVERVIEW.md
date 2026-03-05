# D4O — Сайт продуктового IT-агентства

## Описание

Конверсионный лендинг для D4O (DEV4OURSELVES) — продуктового IT-агентства.
Цель: конвертировать посетителя в заявку через Telegram или форму.

**Домен:** d4o.tech
**Целевая аудитория:** стартапы, малый/средний бизнес, селлеры маркетплейсов

## Стек

- **Фреймворк:** Next.js 16 (App Router, SSG)
- **UI:** React 19, TypeScript
- **Стили:** Tailwind CSS 4, shadcn/ui (new-york), CSS variables
- **Анимации:** Framer Motion 12
- **Иконки:** Lucide React
- **Шрифты:** Onest (display), Geologica (body), JetBrains Mono (code)
- **SEO:** Schema.org JSON-LD, robots.txt, sitemap.xml

## Архитектура

```
src/
├── app/
│   ├── layout.tsx          # Root layout, шрифты, метаданные
│   ├── page.tsx            # Главная (лендинг), JSON-LD разметка
│   ├── globals.css         # Deep Forest тема, утилиты
│   ├── icon.svg            # Favicon
│   ├── robots.ts           # robots.txt
│   ├── sitemap.ts          # sitemap.xml
│   └── design-kit/         # Страница дизайн-кита (внутренняя)
├── components/
│   ├── Logo.tsx            # Логотип (SVG </> + текст D4O)
│   ├── JsonLd.tsx          # Компонент для Schema.org разметки
│   ├── sections/           # Секции лендинга (см. ниже)
│   └── ui/                 # shadcn компоненты
└── lib/
    └── utils.ts            # cn() — утилита для классов
```

## Секции лендинга

Порядок на странице:

| # | Компонент | id | Описание |
|---|-----------|-----|----------|
| 1 | `Header` | — | Фиксированная навигация, glass-эффект |
| 2 | `Hero` | — | Заголовок, CTA-кнопки, метрики, AI-first бейдж |
| 3 | `ProblemSolution` | — | Боли ЦА → решения D4O |
| 4 | `Services` | #services | 4 карточки услуг с тегами стека |
| 5 | `Portfolio` | #cases | 4 кейса (GiftShelf, Самовыкупы, FlyFit, Реферальная) |
| 6 | `WhyUs` | — | 6 причин в сетке 3×2 |
| 7 | `Process` | #process | 5 шагов с иконками |
| 8 | `Pricing` | #pricing | 3 тарифа (от 200K до 1M+ ₽) |
| 9 | `FAQ` | #faq | 5 вопросов, аккордеон (Radix UI) |
| 10 | `CTA` | #contact | Форма → Telegram deep link |
| 11 | `Footer` | — | Навигация, контакты, копирайт |

Все секции — `"use client"` компоненты (кроме Footer) с framer-motion анимациями.

## Дизайн-система

### Тема: Deep Forest

Всегда тёмная, зелёная палитра:
- **Фон:** `#080C0A` (--background)
- **Поверхность:** `#0F1A14` / `#162419`
- **Акцент:** `#22C55E` (--forest), `#4ADE80` (--forest-light), `#86EFAC` (--bright)
- **Текст:** `#F0FDF4` (--foreground)

### Утилиты (globals.css)

- `.text-gradient` — зелёный градиент для заголовков
- `.glass` / `.glass-strong` — стекло-эффект с backdrop-blur
- `.bg-grid` — фоновая сетка (только Hero)
- `.section-padding` — py-16 mobile / py-20 desktop

### UI компоненты (shadcn)

`button`, `card`, `badge`, `accordion`, `separator`

## SEO

- **JSON-LD:** Organization, WebSite, FAQPage — в `page.tsx`
- **Компонент:** `JsonLd` — рендерит `<script type="application/ld+json">`
- **robots.ts:** allow `/`, disallow `/api/`, `/design-kit/`
- **sitemap.ts:** главная страница, weekly, priority 1
- **Метаданные:** в `layout.tsx` — title, description, keywords, Open Graph

## Команды

```bash
npm run dev      # Dev-сервер http://localhost:3000
npm run build    # Production-билд (SSG)
npm run start    # Запуск production
npm run lint     # ESLint
```

## Контакты в коде

- Telegram: `https://t.me/maximsemeniuk`
- Email: `hello@d4o.tech`
- Домен: `d4o.tech`

---
*Обновлено: 2026-03-05*
