import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const features = t.about.features as Array<{ title: string; description: string }>;

  return (
    <section id="a-propos" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm uppercase tracking-widest text-accent font-semibold">{t.about.label}</span>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">
              {t.about.title1}
              <br />
              <span className="text-accent">{t.about.title2}</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t.about.p1}</p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{t.about.p2}</p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">40+</div>
                <p className="text-sm text-muted-foreground mt-2">{t.about.stat1}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">✓</div>
                <p className="text-sm text-muted-foreground mt-2">{t.about.stat2}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100%</div>
                <p className="text-sm text-muted-foreground mt-2">{t.about.stat3}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-border bg-background shadow-soft hover:shadow-medium transition-shadow"
              >
                <h3 className="font-serif text-lg font-semibold text-primary">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
