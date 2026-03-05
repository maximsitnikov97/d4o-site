import Image from "next/image";
import type { MDXComponents } from "mdx/types";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function CTA() {
  return (
    <div className="not-prose my-10 rounded-2xl border border-border bg-card p-8 text-center">
      <h3 className="font-[family-name:var(--font-onest)] text-xl font-bold mb-2">
        Готовы обсудить проект?
      </h3>
      <p className="text-sm text-foreground/70 mb-5 max-w-md mx-auto">
        Бесплатная консультация — расскажем, как решить вашу задачу. Ответим в
        течение часа.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button asChild size="lg">
          <a
            href="https://t.me/masitnikov"
            target="_blank"
            rel="noopener noreferrer"
          >
            Написать в Telegram <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="/#contact">Заполнить бриф</a>
        </Button>
      </div>
    </div>
  );
}

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="font-[family-name:var(--font-onest)] text-3xl md:text-4xl font-bold tracking-tight mt-10 mb-4"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="font-[family-name:var(--font-onest)] text-2xl md:text-3xl font-bold tracking-tight mt-10 mb-4"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-[family-name:var(--font-onest)] text-xl font-semibold tracking-tight mt-8 mb-3"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-base leading-relaxed text-foreground/70 mb-5"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-primary hover:text-primary/80 hover:underline font-medium transition-colors"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="list-disc pl-6 mb-5 space-y-1.5" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal pl-6 mb-5 space-y-1.5" {...props} />
  ),
  li: (props) => (
    <li className="text-base leading-relaxed text-foreground/70" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-primary pl-4 italic text-foreground/70 my-6"
      {...props}
    />
  ),
  img: (props) => {
    const src = props.src as string;
    if (src?.endsWith(".svg")) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="rounded-xl my-6 w-full"
          alt={props.alt ?? ""}
          src={src}
        />
      );
    }
    return (
      <Image
        className="rounded-xl my-6 w-full"
        width={1200}
        height={630}
        alt={props.alt ?? ""}
        src={src}
      />
    );
  },
  hr: () => <hr className="my-10 border-border" />,
  table: (props) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  thead: (props) => (
    <thead className="bg-surface-1 text-foreground" {...props} />
  ),
  th: (props) => (
    <th
      className="px-4 py-3 text-left font-semibold text-sm border-b border-border"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="px-4 py-3 text-foreground/70 border-b border-border last:border-b-0"
      {...props}
    />
  ),
  tr: (props) => (
    <tr className="border-b border-border last:border-b-0" {...props} />
  ),
  code: (props) => (
    <code
      className="bg-surface-1 text-primary px-1.5 py-0.5 rounded text-sm font-[family-name:var(--font-jb-mono)]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-surface-1 border border-border rounded-xl p-4 overflow-x-auto my-6 text-sm font-[family-name:var(--font-jb-mono)]"
      {...props}
    />
  ),
  CTA,
};
