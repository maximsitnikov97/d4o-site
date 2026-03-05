#!/usr/bin/env node
/**
 * Генератор SVG-обложек для блога D4O
 * Использование: node scripts/generate-cover.js --title "Заголовок" --category "telegram" --output "public/blog/slug.svg"
 */

const fs = require('fs');
const path = require('path');

// Парсинг аргументов
const args = process.argv.slice(2);
const getArg = (name) => {
  const idx = args.indexOf(`--${name}`);
  return idx !== -1 ? args[idx + 1] : null;
};

const title = getArg('title') || 'Статья D4O';
const category = getArg('category') || 'saas';
const output = getArg('output') || 'public/blog/cover.svg';

// Цвета Deep Forest
const COLORS = {
  bg1: '#080C0A',
  bg2: '#0F1A14',
  accent: '#22C55E',
  accentLight: '#4ADE80',
  bright: '#86EFAC',
  text: '#F0FDF4',
  textMuted: '#6EE7B7',
};

// Названия категорий
const CATEGORY_LABELS = {
  telegram: 'Telegram',
  saas: 'SaaS',
  marketplace: 'Маркетплейсы',
  ai: 'AI & Автоматизация',
};

// Перенос текста на строки (грубый, для SVG)
function wrapText(text, maxCharsPerLine = 36) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    if ((current + ' ' + word).trim().length > maxCharsPerLine) {
      if (current) lines.push(current.trim());
      current = word;
    } else {
      current = (current + ' ' + word).trim();
    }
  }
  if (current) lines.push(current.trim());
  return lines;
}

// Генерация уникального ID для градиентов
const uid = Math.random().toString(36).slice(2, 8);

// Разбиваем заголовок на строки
const titleLines = wrapText(title, 34);
const lineHeight = 72;
const titleStartY = 260 - ((titleLines.length - 1) * lineHeight) / 2;

// Иконки категорий (простые SVG-пути)
const CATEGORY_ICONS = {
  telegram: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.68 7.93c-.12.56-.46.7-.93.43l-2.58-1.9-1.24 1.2c-.14.14-.25.25-.51.25l.18-2.6 4.7-4.24c.2-.18-.05-.28-.32-.1L7.42 14.7 4.88 13.9c-.55-.17-.56-.55.12-.82l10.2-3.93c.46-.17.86.11.44 1.65z" fill="${COLORS.accent}" opacity="0.9"/>`,
  saas: `<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" fill="${COLORS.accent}" opacity="0.9"/>`,
  marketplace: `<path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.1 17 7 17h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0023.25 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" fill="${COLORS.accent}" opacity="0.9"/>`,
  ai: `<path d="M21 10.5h-.5V8c0-2.76-2.24-5-5-5h-1V2.5C14.5 1.12 13.38 0 12 0S9.5 1.12 9.5 2.5V3h-1C5.74 3 3.5 5.24 3.5 8v2.5H3C1.62 10.5.5 11.62.5 13v2C.5 16.38 1.62 17.5 3 17.5h.5V19c0 2.76 2.24 5 5 5h1v.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V24h1c2.76 0 5-2.24 5-5v-1.5h.5c1.38 0 2.5-1.12 2.5-2.5v-2c0-1.38-1.12-2.5-2.5-2.5z" fill="${COLORS.accent}" opacity="0.9"/>`,
};

const categoryLabel = CATEGORY_LABELS[category] || category.toUpperCase();
const categoryIcon = CATEGORY_ICONS[category] || CATEGORY_ICONS['saas'];

// SVG шаблон
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <!-- Фоновый градиент -->
    <linearGradient id="bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${COLORS.bg1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${COLORS.bg2};stop-opacity:1" />
    </linearGradient>
    <!-- Градиент для заголовка -->
    <linearGradient id="title-${uid}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${COLORS.text};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${COLORS.bright};stop-opacity:1" />
    </linearGradient>
    <!-- Свечение акцента -->
    <radialGradient id="glow-${uid}" cx="15%" cy="85%" r="45%">
      <stop offset="0%" style="stop-color:${COLORS.accent};stop-opacity:0.15" />
      <stop offset="100%" style="stop-color:${COLORS.bg1};stop-opacity:0" />
    </radialGradient>
  </defs>

  <!-- Фон -->
  <rect width="1200" height="630" fill="url(#bg-${uid})"/>
  <rect width="1200" height="630" fill="url(#glow-${uid})"/>

  <!-- Сетка (тонкие линии) -->
  ${Array.from({length: 13}, (_, i) => `<line x1="${i * 100}" y1="0" x2="${i * 100}" y2="630" stroke="${COLORS.accent}" stroke-width="0.5" opacity="0.08"/>`).join('\n  ')}
  ${Array.from({length: 7}, (_, i) => `<line x1="0" y1="${i * 105}" x2="1200" y2="${i * 105}" stroke="${COLORS.accent}" stroke-width="0.5" opacity="0.08"/>`).join('\n  ')}

  <!-- Декоративный акцент (левая полоса) -->
  <rect x="0" y="0" width="6" height="630" fill="${COLORS.accent}" opacity="0.8"/>
  <rect x="0" y="0" width="2" height="630" fill="${COLORS.accentLight}"/>

  <!-- Декоративный круг (фон) -->
  <circle cx="1050" cy="120" r="280" fill="${COLORS.accent}" opacity="0.04"/>
  <circle cx="1050" cy="120" r="180" fill="${COLORS.accent}" opacity="0.05"/>

  <!-- Бейдж категории -->
  <rect x="80" y="80" width="${categoryLabel.length * 12 + 60}" height="40" rx="6" fill="${COLORS.accent}" opacity="0.15"/>
  <rect x="80" y="80" width="${categoryLabel.length * 12 + 60}" height="40" rx="6" fill="none" stroke="${COLORS.accent}" stroke-width="1" opacity="0.6"/>
  <!-- Иконка категории -->
  <g transform="translate(95, 88) scale(0.85)">${categoryIcon}</g>
  <text x="${95 + 32}" y="106" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="${COLORS.accent}" letter-spacing="0.5">${categoryLabel}</text>

  <!-- Заголовок статьи -->
  ${titleLines.map((line, i) => `<text x="80" y="${titleStartY + i * lineHeight}" font-family="system-ui, -apple-system, sans-serif" font-size="62" font-weight="700" fill="url(#title-${uid})" letter-spacing="-1">${escapeXml(line)}</text>`).join('\n  ')}

  <!-- Разделитель -->
  <rect x="80" y="${titleStartY + titleLines.length * lineHeight + 20}" width="60" height="3" rx="2" fill="${COLORS.accent}"/>

  <!-- Подпись d4o.tech -->
  <text x="80" y="${titleStartY + titleLines.length * lineHeight + 65}" font-family="system-ui, -apple-system, sans-serif" font-size="22" fill="${COLORS.textMuted}" opacity="0.8" letter-spacing="1">d4o.tech</text>

  <!-- Логотип D4O (правый нижний угол) -->
  <text x="1120" y="590" font-family="system-ui, -apple-system, monospace" font-size="28" font-weight="700" fill="${COLORS.accentLight}" text-anchor="end" opacity="0.9">&lt;/&gt; D4O</text>
</svg>`;

// Функция экранирования XML (вызывается в шаблоне)
function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Перезаписываем SVG с уже экранированным текстом
const finalSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${COLORS.bg1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${COLORS.bg2};stop-opacity:1" />
    </linearGradient>
    <linearGradient id="title-${uid}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${COLORS.text};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${COLORS.bright};stop-opacity:1" />
    </linearGradient>
    <radialGradient id="glow-${uid}" cx="15%" cy="85%" r="45%">
      <stop offset="0%" style="stop-color:${COLORS.accent};stop-opacity:0.15" />
      <stop offset="100%" style="stop-color:${COLORS.bg1};stop-opacity:0" />
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg-${uid})"/>
  <rect width="1200" height="630" fill="url(#glow-${uid})"/>

  ${Array.from({length: 13}, (_, i) => `<line x1="${i * 100}" y1="0" x2="${i * 100}" y2="630" stroke="${COLORS.accent}" stroke-width="0.5" opacity="0.08"/>`).join('\n  ')}
  ${Array.from({length: 7}, (_, i) => `<line x1="0" y1="${i * 105}" x2="1200" y2="${i * 105}" stroke="${COLORS.accent}" stroke-width="0.5" opacity="0.08"/>`).join('\n  ')}

  <rect x="0" y="0" width="6" height="630" fill="${COLORS.accent}" opacity="0.8"/>
  <rect x="0" y="0" width="2" height="630" fill="${COLORS.accentLight}"/>

  <circle cx="1050" cy="120" r="280" fill="${COLORS.accent}" opacity="0.04"/>
  <circle cx="1050" cy="120" r="180" fill="${COLORS.accent}" opacity="0.05"/>

  <rect x="80" y="80" width="${categoryLabel.length * 12 + 60}" height="40" rx="6" fill="${COLORS.accent}" opacity="0.15"/>
  <rect x="80" y="80" width="${categoryLabel.length * 12 + 60}" height="40" rx="6" fill="none" stroke="${COLORS.accent}" stroke-width="1" opacity="0.6"/>
  <text x="${95 + 32}" y="106" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="${COLORS.accent}" letter-spacing="0.5">${categoryLabel}</text>

  ${titleLines.map((line, i) => `<text x="80" y="${titleStartY + i * lineHeight}" font-family="system-ui, -apple-system, sans-serif" font-size="62" font-weight="700" fill="url(#title-${uid})" letter-spacing="-1">${escapeXml(line)}</text>`).join('\n  ')}

  <rect x="80" y="${titleStartY + titleLines.length * lineHeight + 20}" width="60" height="3" rx="2" fill="${COLORS.accent}"/>
  <text x="80" y="${titleStartY + titleLines.length * lineHeight + 65}" font-family="system-ui, -apple-system, sans-serif" font-size="22" fill="${COLORS.textMuted}" opacity="0.8" letter-spacing="1">d4o.tech</text>
  <text x="1120" y="590" font-family="system-ui, -apple-system, monospace" font-size="28" font-weight="700" fill="${COLORS.accentLight}" text-anchor="end" opacity="0.9">&lt;/&gt; D4O</text>
</svg>`;

// Создаём директорию если не существует
const outputPath = path.resolve(output);
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, finalSvg, 'utf8');
console.log(`✅ Обложка создана: ${output}`);
console.log(`   Заголовок: ${title}`);
console.log(`   Категория: ${categoryLabel}`);
console.log(`   Строк в заголовке: ${titleLines.length}`);
