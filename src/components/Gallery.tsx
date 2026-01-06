import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Gallery images with French and German descriptions
  const images = [
    { src: "/images/img-1.jpg", fr: "Vitrage automobile", de: "Fahrzeugverglasung", en: "Vehicle glazing" },
    { src: "/images/img-2.jpg", fr: "Réparation carrosserie", de: "Karosserie-Reparatur", en: "Body repair" },
    { src: "/images/img-3.jpg", fr: "Atelier professionnel", de: "Professionelle Werkstatt", en: "Professional workshop" },
    { src: "/images/img-4.jpg", fr: "Finitions détaillées", de: "Detailliertes Finish", en: "Detailed finishing" },
    { src: "/images/img-5.jpg", fr: "Peinture de qualité", de: "Qualitätslackierung", en: "Quality painting" },
    { src: "/images/img-6.jpg", fr: "Travail de précision", de: "Präzisionsarbeit", en: "Precision work" },
  ];

  // Get description based on current language
  const getDescription = (image: typeof images[0]): string => {
    const { t } = useLanguage();
    if (t === "fr") return image.fr;
    if (t === "de") return image.de;
    return image.en;
  };

  const { t: currentLang } = useLanguage();
  const descriptionKey = currentLang === "de" ? "de" : currentLang === "en" ? "en" : "fr";

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galerie" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent font-semibold">{t.gallery.label}</span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">{t.gallery.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.gallery.description}</p>
        </motion.div>

        {/* Gallery Grid for less than 6 images shown as thumbnails */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl"
            >
              <img
                src={image.src}
                alt={image[descriptionKey as keyof typeof image]}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-semibold text-white">{image[descriptionKey as keyof typeof image]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <div className="relative bg-black rounded-xl overflow-hidden">
                <img
                  src={images[currentSlideIndex].src}
                  alt={images[currentSlideIndex][descriptionKey as keyof typeof images[0]]}
                  className="w-full h-auto"
                />

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="h-6 w-6 text-white" />
                </button>

                {/* Description */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-semibold">{images[currentSlideIndex][descriptionKey as keyof typeof images[0]]}</p>
                  <p className="text-white/70 text-sm mt-1">
                    {currentSlideIndex + 1} / {images.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
