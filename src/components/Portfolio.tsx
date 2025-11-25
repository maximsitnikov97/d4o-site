import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Globe, Bot, Briefcase } from "lucide-react";

const projects = [
  {
    icon: Globe,
    title: "SaaS Платформа",
    category: "SaaS",
    description: "Личный кабинет с подписками и аналитикой для B2B сегмента",
    tags: ["React", "Node.js", "PostgreSQL"],
    gradient: "from-blue-500 to-primary",
  },
  {
    icon: Bot,
    title: "Telegram Mini-App",
    category: "Mini-App",
    description: "Каталог товаров с корзиной и интеграцией платежей",
    tags: ["React", "Telegram API", "Stripe"],
    gradient: "from-secondary to-accent",
  },
  {
    icon: Briefcase,
    title: "Собственный сервис",
    category: "Свой продукт",
    description: "Разработали и продали — знаем весь путь продукта",
    tags: ["Full-stack", "Product", "Exit"],
    gradient: "from-green-500 to-emerald-500",
  },
];

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Наши <span className="text-gradient">проекты</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Кейсы, которыми гордимся
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-2xl overflow-hidden glass hover:bg-surface-light/60 transition-all duration-300"
            >
              {/* Gradient top */}
              <div
                className={`h-32 bg-gradient-to-br ${project.gradient} opacity-80 flex items-center justify-center`}
              >
                <project.icon className="w-12 h-12 text-white" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-primary">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-text-muted text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-text-muted px-2 py-1 rounded-md bg-surface-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  disabled
                  className="inline-flex items-center gap-2 text-text-muted text-sm cursor-not-allowed"
                >
                  <ExternalLink size={14} />
                  Скоро добавим детали
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
