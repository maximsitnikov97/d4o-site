import { Logo } from "@/components/Logo";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#cases", label: "Кейсы" },
  { href: "#process", label: "Процесс" },
  { href: "#pricing", label: "Цены" },
  { href: "#faq", label: "FAQ" },
  { href: "/blog", label: "Блог" },
  { href: "#contact", label: "Контакты" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Продуктовое IT-агентство. Разрабатываем как для себя.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} D4O (DEV4OURSELVES). Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://t.me/masitnikov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Telegram
            </a>
            <a
              href="mailto:hello@d4o.tech"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@d4o.tech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
