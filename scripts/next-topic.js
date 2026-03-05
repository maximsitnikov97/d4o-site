#!/usr/bin/env node
/**
 * Показывает следующую тему для SEO-статьи
 * Использование: node scripts/next-topic.js [--site d4o]
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const getArg = (name) => {
  const idx = args.indexOf(`--${name}`);
  return idx !== -1 ? args[idx + 1] : null;
};

const site = getArg('site') || 'd4o';
const queuePath = path.join(__dirname, 'topics-queue.json');

if (!fs.existsSync(queuePath)) {
  console.error('❌ Файл topics-queue.json не найден');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(queuePath, 'utf8'));
const siteData = data[site];

if (!siteData) {
  console.error(`❌ Сайт "${site}" не найден в очереди`);
  process.exit(1);
}

const queue = siteData.queue;
const published = siteData.published;

if (queue.length === 0) {
  console.log(`✅ Очередь пуста. Все темы опубликованы: ${published.length}`);
  process.exit(0);
}

const next = queue[0];

console.log(`\n📋 Следующая тема для ${site.toUpperCase()}:`);
console.log(`   Slug:          ${next.slug}`);
console.log(`   Заголовок:     ${next.title}`);
console.log(`   Осн. запрос:   ${next.mainKeyword}`);
console.log(`   Доп. запросы:  ${next.additionalKeywords.join(', ')}`);
console.log(`   Категория:     ${next.category}`);
console.log(`   Конкуренты:    ${next.competitors.length > 0 ? next.competitors.join(', ') : 'не указаны'}`);
console.log(`\n   Осталось в очереди: ${queue.length}`);
console.log(`   Опубликовано:       ${published.length}\n`);

// Выводим команду для генерации обложки
console.log(`💡 Команда для обложки:`);
console.log(`   node scripts/generate-cover.js --title "${next.title}" --category "${next.category}" --output "public/blog/${next.slug}.svg"\n`);
