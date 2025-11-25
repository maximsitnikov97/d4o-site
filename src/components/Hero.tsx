import { motion } from "framer-motion";
import { Send, Sparkles, Zap } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles size={16} className="text-primary" />
          <span className="text-sm text-text-muted">AI-ускоренная разработка</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Разрабатываем IT-продукты{" "}
          <span className="text-gradient">как для себя</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-10"
        >
          SaaS и Telegram mini-apps с использованием AI-агентов.{" "}
          <br className="hidden sm:block" />
          Быстрее, современнее, с заботой о каждой детали.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://t.me/masitnikov"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold text-lg hover:opacity-90 transition-all glow-hover"
          >
            <Send size={20} />
            Обсудить проект
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 px-8 py-4 glass rounded-xl font-semibold text-lg hover:bg-surface-light/60 transition-all"
          >
            <Zap size={20} className="text-primary" />
            Что делаем
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-text-muted"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm">200+ реализованных проектов</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm">Кейс: продажа Saas платформы за 7,5 млн.</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-sm">AI в каждом проекте</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-text-muted/50"
          />
        </div>
      </motion.div>
    </section>
  );
}
