import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock, Wrench, Facebook, Instagram, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-black dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="h-8 w-8 text-sky-600" />
              <span className="font-bold text-xl text-white dark:text-white">
                {t("footer.brand")}
              </span>
            </div>
            <p className="text-sm mb-4 text-gray-300 dark:text-gray-400">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sky-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-sky-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-sky-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 dark:text-gray-100">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-sky-600 transition-colors text-gray-300 dark:text-gray-400 dark:hover:text-sky-400">
                  {t("footer.links.home")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-600 transition-colors text-gray-300 dark:text-gray-400 dark:hover:text-sky-400">
                  {t("footer.links.services")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-600 transition-colors text-gray-300 dark:text-gray-400 dark:hover:text-sky-400">
                  {t("footer.links.about")}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-sky-600 transition-colors text-gray-300 dark:text-gray-400 dark:hover:text-sky-400">
                  {t("footer.links.gallery")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-600 transition-colors text-gray-300 dark:text-gray-400 dark:hover:text-sky-400">
                  {t("footer.links.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 dark:text-gray-100">
              {t("footer.ourServices")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>{t("footer.services.plumbing")}</li>
              <li>{t("footer.services.electrical")}</li>
              <li>{t("footer.services.painting")}</li>
              <li>{t("footer.services.carpentry")}</li>
              <li>{t("footer.services.general")}</li>
              <li>{t("footer.services.maintenance")}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 dark:text-gray-100">
              {t("footer.contactInfo")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">{t("footer.callUs")}</p>
                  <p className="text-white dark:text-gray-200">(555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">{t("footer.emailUs")}</p>
                  <p className="text-white dark:text-gray-200">info@lucris.nl</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">{t("footer.location")}</p>
                  <p className="text-white dark:text-gray-200">
                    123 Main Street<br />New York, NY 10001
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">{t("footer.hours")}</p>
                  <p className="text-white dark:text-gray-200">{t("footer.hoursValue")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm dark:border-gray-900">
          <p className="text-gray-400 dark:text-gray-500">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
