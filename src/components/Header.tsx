import { Logo } from "./Logo";
import { Send } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          <a href="#why" className="text-text-muted hover:text-text transition-colors">
            Почему мы
          </a>
          <a href="#services" className="text-text-muted hover:text-text transition-colors">
            Услуги
          </a>
          <a href="#process" className="text-text-muted hover:text-text transition-colors">
            Процесс
          </a>
        </nav>
        <a
          href="https://t.me/masitnikov"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium hover:opacity-90 transition-opacity glow-hover"
        >
          <Send size={18} />
          <span className="hidden sm:inline">Написать</span>
        </a>
      </div>
    </header>
  );
}
