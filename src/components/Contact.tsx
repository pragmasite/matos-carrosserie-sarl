import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent font-semibold">{t.contact.label}</span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">
            {t.contact.title1}
            <br />
            <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">{t.contact.description}</p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold">{t.contact.phone}</h3>
                <div className="mt-2 space-y-1">
                  <p className="text-muted-foreground">
                    <a href="tel:+41264112340" className="hover:text-accent transition-colors">
                      +41 26 411 23 40
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <a href="tel:+41798610656" className="hover:text-accent transition-colors">
                      +41 79 861 06 56
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold">{t.contact.email}</h3>
                <p className="mt-2 text-muted-foreground">
                  <a href="mailto:carrosserie-matos@hotmail.com" className="hover:text-accent transition-colors">
                    carrosserie-matos@hotmail.com
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold">{t.contact.address}</h3>
                <p className="mt-2 text-muted-foreground">
                  Chemin de la Faye 6<br />
                  1696 Vuisternens-en-Ogoz<br />
                  Switzerland
                </p>
                <Button asChild variant="outline" className="mt-4 gap-2">
                  <a href="https://maps.google.com/?q=46.709953,7.05242" target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-4 w-4" />
                    Open in Maps
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button asChild size="lg" className="w-full gap-2">
                <a href="tel:+41264112340">
                  <Phone className="h-5 w-5" />
                  {t.contact.callNow}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-soft h-full min-h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2734.0524238892944!2d7.04945!3d46.70995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478f2d5d5d5d5d5d%3A0x5d5d5d5d5d5d5d5d!2sCarosserie%20Matos%20Sa%CC%80rl!5e0!3m2!1sfr!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
