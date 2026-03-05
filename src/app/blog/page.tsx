import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { JsonLd } from "@/components/JsonLd";
import { BlogList } from "./blog-list";

export const metadata: Metadata = {
  title: "Блог — статьи о разработке и технологиях",
  description:
    "Статьи о разработке Telegram Mini-Apps, SaaS-платформ, сервисов для маркетплейсов и AI-интеграциях. Кейсы, инструкции и аналитика.",
  alternates: { canonical: "/blog" },
};

const blogLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Блог D4O",
  url: "https://d4o.tech/blog",
  description:
    "Статьи о разработке Telegram Mini-Apps, SaaS, сервисов для маркетплейсов и AI-интеграциях",
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Главная",
      item: "https://d4o.tech",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Блог",
      item: "https://d4o.tech/blog",
    },
  ],
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd data={blogLd} />
      <JsonLd data={breadcrumbLd} />
      <BlogList posts={posts} />
    </>
  );
}
