"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function CTA() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;

    // TODO: подключить реальный бэкенд/бота для отправки заявок
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="rounded-2xl border border-border bg-card p-8 sm:p-12"
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Обсудим ваш <span className="text-gradient">проект</span>?
            </h2>
            <p className="text-muted-foreground">
              Бесплатная консультация — отвечаю в течение часа
            </p>
          </motion.div>

          {submitted ? (
            <motion.div variants={fadeUp} className="text-center py-8">
              <p className="text-lg font-semibold text-primary mb-2">Заявка отправлена!</p>
              <p className="text-muted-foreground">Свяжемся с вами в течение часа</p>
            </motion.div>
          ) : (
            <motion.form variants={fadeUp} className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest/50"
              />
              <input
                type="text"
                placeholder="Telegram или телефон"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest/50"
              />
              <textarea
                placeholder="Опишите проект в двух словах"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest/50 resize-none"
              />

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button type="submit" size="default" className="flex-1 w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Отправить заявку
                </Button>
                <Button asChild variant="outline" size="default" className="flex-1 w-full">
                  <a href="https://t.me/masitnikov" target="_blank" rel="noopener noreferrer">
                    Написать в Telegram
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
