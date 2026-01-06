export type Language = "fr" | "de" | "en";

export const translations = {
  fr: {
    nav: {
      aboutUs: "À propos",
      services: "Services",
      gallery: "Galerie",
      hours: "Horaires",
      contact: "Contact",
      call: "Appeler",
      profession: "CARROSSERIE",
    },
    hero: {
      badge: "Expertise automobile depuis 40 ans",
      title1: "Carrosserie",
      title2: "professionnelle",
      description: "Peinture, tôlerie et restauration de qualité selon les standards suisses",
      sendEmail: "Envoyer un email",
      location: "Vuisternens-en-Ogoz, Suisse",
    },
    about: {
      label: "À propos",
      title1: "40 années",
      title2: "d'excellence",
      p1: "Depuis plus de 40 ans, notre équipe sous la direction de M. Santos offre des services de carrosserie de qualité exceptionnelle. Nous sommes reconnus pour notre professionnalisme et notre engagement envers la satisfaction de nos clients.",
      p2: "Chaque projet est réalisé selon les standards suisses actuels, avec une attention particulière aux détails et à la qualité du travail.",
      stat1: "40+ années",
      stat2: "Expertise confirmée",
      stat3: "Satisfaction client",
      features: [
        { title: "Peinture haute qualité", description: "Peinture en four avec finition professionnelle et durable" },
        { title: "Tôlerie spécialisée", description: "Réparation et remplacement de pièces en tôle avec précision" },
        { title: "Service complet", description: "Vitrages, polissage et nettoyage automobile professionnel" },
        { title: "Assurance simplifiée", description: "Assistance avec la paperasse d'assurance pour vos sinistres" },
      ],
    },
    services: {
      label: "Services",
      title: "Services professionnels",
      description: "Une gamme complète de services de carrosserie automobile",
      items: [
        { title: "Peinture et vernis", description: "Peinture en four avec finition haute qualité selon les standards suisses" },
        { title: "Carrosserie et tôlerie", description: "Travaux de tôle et réparation structurelle de véhicules" },
        { title: "Remplacement de vitrages", description: "Remplacement et installation de pare-brise et vitres automobiles" },
        { title: "Polissage et nettoyage", description: "Finition et nettoyage professionnel de votre véhicule" },
        { title: "Peinture en four", description: "Équipement professionnel pour une peinture durable" },
        { title: "Assistance assurance", description: "Aide complète pour vos démarches administratives d'assurance" },
      ],
    },
    gallery: {
      label: "Galerie",
      title: "Nos réalisations",
      description: "Découvrez nos derniers travaux de carrosserie",
    },
    hours: {
      label: "Horaires",
      title: "Horaires d'ouverture",
      header: "Heures d'ouverture",
      today: "Aujourd'hui",
      closed: "Fermé",
      days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    },
    contact: {
      label: "Contact",
      title1: "Nous vous",
      title2: "attendons",
      description: "N'hésitez pas à nous contacter pour un devis ou une question",
      phone: "Téléphone",
      email: "Email",
      address: "Adresse",
      cta: "Prendre contact",
      callNow: "Appeler maintenant",
      workingHours: "Lun-Ven: 08:00-12:30, 13:30-18:30",
    },
    footer: {
      tagline: "Carrosserie automobile",
      description: "Expertise professionnelle en réparation et peinture automobile depuis plus de 40 ans",
      navigation: "Navigation",
      about: "À propos",
      copyright: "Tous droits réservés.",
    },
    disclaimer: {
      title: "Aperçu du site",
      items: [
        "Ce site web est un brouillon de prévisualisation",
        "Il n'est pas référencé sur Google",
        "Il peut contenir des erreurs ou des inexactitudes",
      ],
      button: "J'ai compris",
    },
  },

  de: {
    nav: {
      aboutUs: "Über uns",
      services: "Leistungen",
      gallery: "Galerie",
      hours: "Öffnungszeiten",
      contact: "Kontakt",
      call: "Anrufen",
      profession: "KAROSSERIE",
    },
    hero: {
      badge: "Automobilkompetenz seit 40 Jahren",
      title1: "Professionelle",
      title2: "Karosserie",
      description: "Lackierung, Blechbearbeitung und Restauration nach Schweizer Standards",
      sendEmail: "E-Mail senden",
      location: "Vuisternens-en-Ogoz, Schweiz",
    },
    about: {
      label: "Über uns",
      title1: "40 Jahre",
      title2: "Exzellenz",
      p1: "Seit über 40 Jahren bietet unser Team unter der Leitung von M. Santos hochwertige Karosseriedienstleistungen an. Wir sind für unseren Professionalismus und unser Engagement für Kundenzufriedenheit bekannt.",
      p2: "Jedes Projekt wird nach aktuellen Schweizer Standards durchgeführt, mit besonderer Aufmerksamkeit auf Details und Workmanship.",
      stat1: "40+ Jahre",
      stat2: "Bewährte Erfahrung",
      stat3: "Kundenzufriedenheit",
      features: [
        { title: "Hochwertige Lackierung", description: "Lackierung im Ofen mit professioneller und langlebiger Oberfläche" },
        { title: "Spezialisierte Blechbearbeitung", description: "Präzise Reparatur und Ersatz von Blechteilen" },
        { title: "Umfassender Service", description: "Verglasungen, Polieren und professionelle Fahzeugpflege" },
        { title: "Versicherungshilfe", description: "Unterstützung bei Versicherungsunterlagen für Ihre Schäden" },
      ],
    },
    services: {
      label: "Leistungen",
      title: "Professionelle Dienstleistungen",
      description: "Komplettes Spektrum von Automobilkarosseriedienstleistungen",
      items: [
        { title: "Lackierung und Beschichtung", description: "Ofenlackierung mit hochwertiger Oberfläche nach Schweizer Standards" },
        { title: "Karosserie und Blechbearbeitung", description: "Blecharbeiten und Strukturreparaturen von Fahrzeugen" },
        { title: "Glaseraustausch", description: "Austausch und Einbau von Windschutzscheiben und Fahrzeugglas" },
        { title: "Polieren und Reinigung", description: "Professionelle Veredelung und Reinigung Ihres Fahrzeugs" },
        { title: "Ofen-Lackierung", description: "Professionelle Ausrüstung für dauerhafte Lackierung" },
        { title: "Versicherungsassistenz", description: "Umfassende Unterstützung bei administrativen Versicherungsfragen" },
      ],
    },
    gallery: {
      label: "Galerie",
      title: "Unsere Arbeiten",
      description: "Entdecken Sie unsere letzten Karosserieprojekte",
    },
    hours: {
      label: "Öffnungszeiten",
      title: "Öffnungszeiten",
      header: "Geschäftszeiten",
      today: "Heute",
      closed: "Geschlossen",
      days: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
    },
    contact: {
      label: "Kontakt",
      title1: "Wir freuen uns",
      title2: "auf Sie",
      description: "Zögern Sie nicht, uns für ein Angebot oder eine Frage zu kontaktieren",
      phone: "Telefon",
      email: "E-Mail",
      address: "Adresse",
      cta: "Kontakt aufnehmen",
      callNow: "Jetzt anrufen",
      workingHours: "Mo-Fr: 08:00-12:30, 13:30-18:30",
    },
    footer: {
      tagline: "Automobilkarosserie",
      description: "Professionelle Kompetenz in Automobilreparatur und Lackierung seit über 40 Jahren",
      navigation: "Navigation",
      about: "Über uns",
      copyright: "Alle Rechte vorbehalten.",
    },
    disclaimer: {
      title: "Website-Vorschau",
      items: [
        "Diese Website ist ein Vorschaudraft",
        "Sie ist in Google nicht indexiert",
        "Sie kann Fehler oder Ungenauigkeiten enthalten",
      ],
      button: "Verstanden",
    },
  },

  en: {
    nav: {
      aboutUs: "About",
      services: "Services",
      gallery: "Gallery",
      hours: "Hours",
      contact: "Contact",
      call: "Call",
      profession: "AUTO BODY SHOP",
    },
    hero: {
      badge: "Automotive expertise for 40 years",
      title1: "Professional",
      title2: "auto body work",
      description: "Painting, sheet metal work and restoration to Swiss standards",
      sendEmail: "Send email",
      location: "Vuisternens-en-Ogoz, Switzerland",
    },
    about: {
      label: "About",
      title1: "40 years of",
      title2: "excellence",
      p1: "For over 40 years, our team under the direction of M. Santos has provided exceptional quality auto body services. We are recognized for our professionalism and commitment to customer satisfaction.",
      p2: "Every project is executed to current Swiss standards, with special attention to detail and craftsmanship.",
      stat1: "40+ years",
      stat2: "Proven expertise",
      stat3: "Customer satisfaction",
      features: [
        { title: "Quality painting", description: "Oven painting with professional and durable finishing" },
        { title: "Specialized sheet metal work", description: "Precision repair and replacement of sheet metal parts" },
        { title: "Comprehensive service", description: "Glazing, polishing and professional vehicle detailing" },
        { title: "Insurance assistance", description: "Help with insurance paperwork for your claims" },
      ],
    },
    services: {
      label: "Services",
      title: "Professional Services",
      description: "Complete range of automotive body shop services",
      items: [
        { title: "Painting and coating", description: "Oven painting with high quality finish to Swiss standards" },
        { title: "Body and sheet metal work", description: "Sheet metal work and vehicle structural repairs" },
        { title: "Glass replacement", description: "Windshield and vehicle glass replacement and installation" },
        { title: "Polishing and cleaning", description: "Professional finishing and detailing of your vehicle" },
        { title: "Oven painting", description: "Professional equipment for durable painting" },
        { title: "Insurance assistance", description: "Full support for your insurance administrative procedures" },
      ],
    },
    gallery: {
      label: "Gallery",
      title: "Our Work",
      description: "Discover our latest auto body projects",
    },
    hours: {
      label: "Hours",
      title: "Opening Hours",
      header: "Business Hours",
      today: "Today",
      closed: "Closed",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    contact: {
      label: "Contact",
      title1: "We look",
      title2: "forward to you",
      description: "Feel free to contact us for a quote or any questions",
      phone: "Phone",
      email: "Email",
      address: "Address",
      cta: "Get in touch",
      callNow: "Call now",
      workingHours: "Mon-Fri: 08:00-12:30, 13:30-18:30",
    },
    footer: {
      tagline: "Auto body shop",
      description: "Professional expertise in automotive repair and painting for over 40 years",
      navigation: "Navigation",
      about: "About",
      copyright: "All rights reserved.",
    },
    disclaimer: {
      title: "Website Preview",
      items: [
        "This website is a draft preview",
        "It is not indexed on Google",
        "It may contain errors or inaccuracies",
      ],
      button: "I understand",
    },
  },
};

export interface Translations {
  nav: Record<string, string>;
  hero: Record<string, string>;
  about: Record<string, string | Array<{ title: string; description: string }>>;
  services: Record<string, string | Array<{ title: string; description: string }>>;
  gallery: Record<string, string>;
  hours: Record<string, string | Array<string>>;
  contact: Record<string, string>;
  footer: Record<string, string>;
  disclaimer: Record<string, string | Array<string>>;
}
