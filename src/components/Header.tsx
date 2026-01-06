import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { t, lang, otherLangs, otherLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="flex flex-col">
          <span className={`font-serif text-2xl font-bold ${isScrolled ? "text-primary" : "text-white"}`}>
            Matos
          </span>
          <span
            className={`text-xs tracking-widest font-semibold ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}
          >
            {t.nav.profession}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#a-propos" className={`text-sm font-medium transition-colors ${isScrolled ? "" : "text-white"}`}>
            {t.nav.aboutUs}
          </a>
          <a href="#services" className={`text-sm font-medium transition-colors ${isScrolled ? "" : "text-white"}`}>
            {t.nav.services}
          </a>
          <a href="#galerie" className={`text-sm font-medium transition-colors ${isScrolled ? "" : "text-white"}`}>
            {t.nav.gallery}
          </a>
          <a href="#horaires" className={`text-sm font-medium transition-colors ${isScrolled ? "" : "text-white"}`}>
            {t.nav.hours}
          </a>
          <a href="#contact" className={`text-sm font-medium transition-colors ${isScrolled ? "" : "text-white"}`}>
            {t.nav.contact}
          </a>

          {/* Language Switcher Desktop */}
          <div className="flex items-center gap-2 pl-4 border-l border-border">
            <div className="flex gap-2">
              {otherLangs.map((otherLang) => (
                <Link
                  key={otherLang}
                  to={otherLangPath(otherLang)}
                  className={`text-xs font-bold transition-colors ${
                    isScrolled ? "text-primary hover:text-primary/80" : "text-white hover:text-white/80"
                  }`}
                >
                  {otherLang.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          <Button asChild className="gap-2">
            <a href="tel:+41264112340">
              <Phone className="h-4 w-4" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-primary" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? "text-primary" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t shadow-soft">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#a-propos"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.aboutUs}
            </a>
            <a
              href="#services"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.services}
            </a>
            <a
              href="#galerie"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.gallery}
            </a>
            <a
              href="#horaires"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.hours}
            </a>
            <a
              href="#contact"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </a>

            <div className="flex gap-2 pt-4 border-t">
              <div className="flex gap-2">
                {otherLangs.map((otherLang) => (
                  <Link
                    key={otherLang}
                    to={otherLangPath(otherLang)}
                    className="text-xs font-bold text-primary hover:text-primary/80"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {otherLang.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>

            <Button asChild className="w-full gap-2">
              <a href="tel:+41264112340">
                <Phone className="h-4 w-4" />
                {t.nav.call}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
