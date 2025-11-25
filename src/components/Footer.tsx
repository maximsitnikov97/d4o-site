import { Logo } from "./Logo";
import { Send } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo />
            <p className="text-text-muted text-sm">
              Разработка как для себя
            </p>
          </div>

          <nav className="flex items-center gap-6 text-sm text-text-muted">
            <a href="#why" className="hover:text-text transition-colors">
              Почему мы
            </a>
            <a href="#services" className="hover:text-text transition-colors">
              Услуги
            </a>
            <a href="#process" className="hover:text-text transition-colors">
              Процесс
            </a>
          </nav>

          <a
            href="https://t.me/masitnikov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
          >
            <Send size={18} />
            @masitnikov
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center text-text-muted/60 text-sm">
          <p>© {currentYear} DEV 4 OURSELVES. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
