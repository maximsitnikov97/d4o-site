import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { getAllSlugs, getPostBySlug, getAllPosts, CATEGORIES } from "@/lib/blog";
import { mdxComponents } from "@/components/mdx";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/services/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedAt,
      images: post.ogImage
        ? [{ url: post.ogImage, width: 1200, height: 630 }]
        : undefined,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  // If not enough in same category, fill from other posts
  if (related.length < 3) {
    const more = allPosts
      .filter((p) => p.slug !== slug && !related.some((r) => r.slug === p.slug))
      .slice(0, 3 - related.length);
    related.push(...more);
  }

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "D4O",
      url: "https://d4o.tech",
    },
    image: post.ogImage ? `https://d4o.tech${post.ogImage}` : undefined,
    mainEntityOfPage: `https://d4o.tech/blog/${slug}`,
  };

  return (
    <>
      <JsonLd data={articleLd} />

      {/* Hero */}
      <section className="pt-24 pb-12 lg:pt-28 lg:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Блог", href: "/blog" },
              { label: post.title },
            ]}
          />

          {post.category && (
            <Badge variant="secondary" className="mt-4 mb-3 text-[11px]">
              {CATEGORIES[post.category] ?? post.category}
            </Badge>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mt-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 lg:pb-20">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </article>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="pb-16 lg:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-t border-border pt-12">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Похожие статьи
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group rounded-2xl border border-border bg-card p-5 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {r.description}
                    </p>
                    <span className="text-xs text-primary font-medium inline-flex items-center gap-1">
                      Читать <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Обсудим ваш проект?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Бесплатная консультация — расскажем, как реализовать вашу идею.
              Ответим в течение часа.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <a
                  href="https://t.me/masitnikov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Обсудить проект
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8"
              >
                <a href="/#contact">Заполнить бриф</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
