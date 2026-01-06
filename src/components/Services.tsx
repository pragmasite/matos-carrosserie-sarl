import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();

  const services = t.services.items as Array<{ title: string; description: string }>;

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent font-semibold">{t.services.label}</span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">{t.services.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">{t.services.description}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-xl border border-border bg-card shadow-soft hover:shadow-medium hover:border-accent transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Wrench className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
