# План: Реализация блога D4O

## Контекст
SEO-инструкция предписывает создание блога для привлечения органического трафика по информационным запросам. Блог — ключевой инструмент для НЧ-запросов и E-E-A-T. Реализация адаптируется из проверенного подхода giftshelf-next (MDX + gray-matter + next-mdx-remote).

## Подход: MDX файлы (file-based)
- Статьи как `.mdx` файлы в `content/blog/`
- Frontmatter (YAML) для метаданных: title, description, date, category, tags, ogImage, published
- Рендеринг через `next-mdx-remote`
- Полная SEO-оптимизация: JSON-LD (Article, BreadcrumbList), OG, canonical, sitemap

## Категории (все 4 из SEO-плана)
- `telegram` — Telegram разработка
- `saas` — SaaS и продуктовая разработка
- `marketplace` — Маркетплейсы
- `ai` — AI и автоматизация

## Структура URL
```
/blog/                    — список всех статей
/blog/[slug]/             — страница статьи
```
Категории — фильтр на странице списка, не отдельные URL (избегаем каннибализации с `/services/*`).

---

## Шаги реализации

### 1. Установить зависимости
```bash
npm install next-mdx-remote gray-matter
```

### 2. Создать утилиты блога
**`src/lib/blog.ts`** — адаптация из giftshelf-next:
- `PostMeta` и `Post` интерфейсы
- `getAllPosts()` — все опубликованные статьи, сортировка по дате
- `getPostBySlug(slug)` — получить статью с контентом
- `getAllSlugs()` — для `generateStaticParams`
- `getPostsByCategory(category)` — фильтрация по категории
- `estimateReadingTime()` — расчёт времени чтения
- Чтение из `content/blog/*.mdx`

### 3. Создать MDX компоненты
**`src/components/mdx/index.tsx`** — кастомные компоненты для MDX:
- h1–h3, p, a, ul/ol/li, blockquote, img, hr, code/pre
- Стилизация под D4O Deep Forest тему (тёмный фон, зелёные акценты)
- CTA-компонент для встраивания в статьи

### 4. Создать страницу списка статей
**`src/app/blog/page.tsx`**:
- Metadata: title, description, canonical, OG
- JSON-LD: Blog + BreadcrumbList
- Герой-секция с заголовком
- Фильтр по категориям (кнопки/табы)
- Сетка карточек статей (1/2/3 колонки)
- Карточка: изображение, категория, заголовок, описание, дата, время чтения
- Framer Motion анимации (fadeUp, stagger)

### 5. Создать страницу статьи
**`src/app/blog/[slug]/page.tsx`**:
- `generateStaticParams()` для SSG
- `generateMetadata()` — динамические метаданные (title, description, OG type: article, publishedTime)
- JSON-LD: Article + BreadcrumbList
- Хлебные крошки
- Герой: категория, заголовок, дата, время чтения
- MDX контент через `<MDXRemote>`
- Блок похожих статей (3 шт. из той же категории)
- CTA-блок внизу (Telegram + консультация)

### 6. Создать демо-статью
**`content/blog/telegram-mini-app-dlya-biznesa.mdx`** — первая статья для проверки:
- Тема: "Telegram Mini-App для бизнеса — что это и зачем"
- Категория: telegram
- ~1000 слов контента

### 7. Обновить sitemap
**`src/app/sitemap.ts`** — добавить блог-страницы:
- `/blog` (priority 0.8, weekly)
- `/blog/[slug]` для каждой статьи (priority 0.7, monthly)

### 8. Обновить навигацию
- Header: добавить ссылку "Блог" в навигацию
- Footer: добавить ссылку на блог

---

## Ключевые файлы для изменения
- `src/app/sitemap.ts` — добавить блог-страницы
- `src/components/sections/Header.tsx` — ссылка "Блог"
- `src/components/sections/Footer.tsx` — ссылка "Блог"

## Новые файлы
- `src/lib/blog.ts`
- `src/components/mdx/index.tsx`
- `src/app/blog/page.tsx`
- `src/app/blog/[slug]/page.tsx`
- `content/blog/telegram-mini-app-dlya-biznesa.mdx`

## Верификация
1. `npm run dev` — проверить `/blog` и `/blog/telegram-mini-app-dlya-biznesa`
2. Проверить метаданные через View Source (title, description, canonical, OG, JSON-LD)
3. Проверить адаптивность (mobile/tablet/desktop)
4. `npm run build` — убедиться что SSG работает
