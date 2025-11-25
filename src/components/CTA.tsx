import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send, MessageCircle } from "lucide-react";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-surface/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <MessageCircle size={16} className="text-primary" />
            <span className="text-sm text-text-muted">Бесплатная консультация</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Обсудим <span className="text-gradient">твой проект</span>?
          </h2>

          <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto">
            Напиши в Telegram — посчитаем стоимость и составим техническое задание.{" "}
            <br className="hidden sm:block" />
            Это бесплатно и ни к чему не обязывает.
          </p>

          <motion.a
            href="https://t.me/masitnikov"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-secondary rounded-2xl font-semibold text-xl glow-hover"
          >
            <Send size={24} />
            Написать в Telegram
          </motion.a>

          <p className="text-text-muted/60 text-sm mt-6">
            @masitnikov — обычно отвечаю в течение часа
          </p>
        </motion.div>
      </div>
    </section>
  );
}
