import { Link, useLocation } from "react-router";
import { Menu, X, Wrench } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { name: t("header.nav.home"), path: "/" },
    { name: t("header.nav.services"), path: "/services" },
    { name: t("header.nav.about"), path: "/about" },
    { name: t("header.nav.gallery"), path: "/gallery" },
    { name: t("header.nav.contact"), path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 dark:bg-gray-900 dark:shadow-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-sky-600 dark:text-sky-400" />
            <span className="font-bold text-xl text-gray-900 dark:text-white">
              {t("header.brand")}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${
                  isActive(item.path)
                    ? "text-sky-600"
                    : "text-white-700 hover:text-sky-600 dark:text-white-200 dark:hover:text-sky-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <LanguageSwitcher />
            <ThemeToggle />
          </nav>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:block bg-sky-600 text-white px-6 py-2 rounded-md hover:bg-sky-700 transition-colors"
          >
            {t("header.cta")}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900 dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 transition-colors ${
                  isActive(item.path)
                    ? "text-sky-600"
                    : "text-white-700 hover:text-sky-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
              <div className="mt-4">
                <ThemeToggle />
              </div>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-4 bg-sky-600 text-white px-6 py-2 rounded-md text-center hover:bg-sky-700 transition-colors"
            >
              {t("header.cta")}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
