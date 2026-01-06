import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  // Hours from business data: Monday-Friday 08:00-12:30, 13:30-18:30; Saturday 08:00-12:00
  const schedule = [
    { hours: "08:00 - 12:30, 13:30 - 18:30" }, // Monday
    { hours: "08:00 - 12:30, 13:30 - 18:30" }, // Tuesday
    { hours: "08:00 - 12:30, 13:30 - 18:30" }, // Wednesday
    { hours: "08:00 - 12:30, 13:30 - 18:30" }, // Thursday
    { hours: "08:00 - 12:30, 13:30 - 18:30" }, // Friday
    { hours: "08:00 - 12:00" }, // Saturday
    { hours: t.hours.closed }, // Sunday
  ];

  const todayIndex = [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];

  const days = t.hours.days as string[];

  return (
    <section id="horaires" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-accent font-semibold">{t.hours.label}</span>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">{t.hours.title}</h2>
          </div>

          <div className="rounded-2xl border border-border bg-background shadow-soft overflow-hidden">
            <div className="flex items-center gap-3 border-b bg-accent/5 px-6 py-4">
              <Clock className="h-5 w-5 text-accent" />
              <span className="font-serif text-lg font-semibold">{t.hours.header}</span>
            </div>
            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === todayIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-accent/10" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />}
                      <span className={`font-medium ${isToday ? "text-accent" : "text-foreground"}`}>{days[i]}</span>
                      {isToday && (
                        <span className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full font-semibold">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span className={`text-sm ${isClosed ? "text-muted-foreground font-medium" : "text-foreground"}`}>
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
