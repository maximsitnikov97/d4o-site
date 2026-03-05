#!/usr/bin/env node

/**
 * IndexNow — notify search engines (Yandex, Bing) about updated pages.
 * Run after deploy: node scripts/indexnow.mjs
 */

import { readdir } from "node:fs/promises";
import { join } from "node:path";

const HOST = "d4o.tech";
const KEY = "b324922cbc1473f702e2a36c6882792f";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const BLOG_DIR = join(import.meta.dirname, "..", "content", "blog");

const STATIC_PATHS = [
  "/",
  "/blog",
  "/services/telegram-mini-app",
  "/services/saas",
  "/services/marketplace",
  "/services/ai",
];

async function getBlogSlugs() {
  try {
    const files = await readdir(BLOG_DIR);
    return files
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => `/blog/${f.replace(/\.mdx$/, "")}`);
  } catch {
    console.warn("Blog directory not found, skipping blog URLs");
    return [];
  }
}

async function main() {
  const blogPaths = await getBlogSlugs();
  const allPaths = [...STATIC_PATHS, ...blogPaths];
  const urlList = allPaths.map((p) => `https://${HOST}${p}`);

  console.log(`Submitting ${urlList.length} URLs to IndexNow:`);
  urlList.forEach((url) => console.log(`  ${url}`));

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  };

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  if (res.ok) {
    console.log(
      `IndexNow responded ${res.status} — URLs submitted successfully`,
    );
  } else {
    const text = await res.text().catch(() => "");
    console.error(`IndexNow responded ${res.status}: ${text}`);
    process.exit(1);
  }
}

main();
