import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t, otherLangs, otherLangPath } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-2">Matos</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">{t.footer.tagline}</p>
            <p className="text-sm text-primary-foreground/70">{t.footer.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#a-propos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t.nav.aboutUs}
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#galerie" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#horaires" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Languages</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Français
              </Link>
              {otherLangs.includes("de") && (
                <Link
                  to={otherLangPath("de")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Deutsch
                </Link>
              )}
              {otherLangs.includes("en") && (
                <Link
                  to={otherLangPath("en")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  English
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Matos Carrosserie. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
