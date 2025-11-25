import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Bot, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "SaaS-платформы",
    description: "От идеи до работающего бизнеса",
    features: [
      "Личные кабинеты и админ-панели",
      "Системы подписок и биллинга",
      "API-интеграции с сервисами",
      "Аналитика и дашборды",
    ],
    gradient: "from-primary to-blue-500",
  },
  {
    icon: Bot,
    title: "Telegram Mini-Apps",
    description: "750+ млн пользователей — твоя аудитория",
    features: [
      "Магазины и каталоги товаров",
      "Сервисы бронирования",
      "Геймификация и программы лояльности",
      "Интеграция с платежами",
    ],
    gradient: "from-secondary to-accent",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Что <span className="text-gradient">делаем</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Специализируемся на двух направлениях — делаем их отлично
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-light" />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative p-8">
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-text-muted mb-6">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-text-muted"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://t.me/masitnikov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-medium"
                >
                  Обсудить проект
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
