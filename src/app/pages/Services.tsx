import { Link } from "react-router";
import {
  Wrench,
  Droplet,
  Zap,
  PaintBucket,
  Hammer,
  Home,
  Settings,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Droplet,
      title: t("services.list.plumbing.title"),
      description: t("services.list.plumbing.description"),
      items: [
        t("services.list.plumbing.items.0"),
        t("services.list.plumbing.items.1"),
        t("services.list.plumbing.items.2"),
        t("services.list.plumbing.items.3"),
        t("services.list.plumbing.items.4"),
        t("services.list.plumbing.items.5"),
      ],
    },
    {
      icon: Zap,
      title: t("services.list.electrical.title"),
      description: t("services.list.electrical.description"),
      items: [
        t("services.list.electrical.items.0"),
        t("services.list.electrical.items.1"),
        t("services.list.electrical.items.2"),
        t("services.list.electrical.items.3"),
        t("services.list.electrical.items.4"),
        t("services.list.electrical.items.5"),
      ],
    },
    {
      icon: PaintBucket,
      title: t("services.list.painting.title"),
      description: t("services.list.painting.description"),
      items: [
        t("services.list.painting.items.0"),
        t("services.list.painting.items.1"),
        t("services.list.painting.items.2"),
        t("services.list.painting.items.3"),
        t("services.list.painting.items.4"),
        t("services.list.painting.items.5"),
      ],
    },
    {
      icon: Hammer,
      title: t("services.list.carpentry.title"),
      description: t("services.list.carpentry.description"),
      items: [
        t("services.list.carpentry.items.0"),
        t("services.list.carpentry.items.1"),
        t("services.list.carpentry.items.2"),
        t("services.list.carpentry.items.3"),
        t("services.list.carpentry.items.4"),
        t("services.list.carpentry.items.5"),
      ],
    },
    {
      icon: Home,
      title: t("services.list.repairs.title"),
      description: t("services.list.repairs.description"),
      items: [
        t("services.list.repairs.items.0"),
        t("services.list.repairs.items.1"),
        t("services.list.repairs.items.2"),
        t("services.list.repairs.items.3"),
        t("services.list.repairs.items.4"),
        t("services.list.repairs.items.5"),
      ],
    },
    {
      icon: Settings,
      title: t("services.list.maintenance.title"),
      description: t("services.list.maintenance.description"),
      items: [
        t("services.list.maintenance.items.0"),
        t("services.list.maintenance.items.1"),
        t("services.list.maintenance.items.2"),
        t("services.list.maintenance.items.3"),
        t("services.list.maintenance.items.4"),
        t("services.list.maintenance.items.5"),
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: t("services.process.items.0.title"),
      description: t("services.process.items.0.description"),
    },
    {
      step: "2",
      title: t("services.process.items.1.title"),
      description: t("services.process.items.1.description"),
    },
    {
      step: "3",
      title: t("services.process.items.2.title"),
      description: t("services.process.items.2.description"),
    },
    {
      step: "4",
      title: t("services.process.items.3.title"),
      description: t("services.process.items.3.description"),
    },
  ];

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 to-sky-100 py-16 dark:from-gray-900 dark:to-gray-800">
        <h1 className="text-4xl md:text-5xl mb-6 text-gray-900 dark:text-white text-center">
          {t("services.hero.title")}
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto dark:text-gray-300">
          {t("services.hero.subtitle")}
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow dark:bg-gray-900 dark:border-gray-800"
                >
                  <div className="bg-sky-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-sky-600" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4 dark:text-gray-300">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900 dark:text-white">
              {t("services.process.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t("services.process.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-sky-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-600 dark:bg-sky-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-white">
            {t("services.cta.title")}
          </h2>
          <p className="text-xl text-sky-100 mb-8 dark:text-sky-100/90">
            {t("services.cta.subtitle")}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-sky-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {t("services.cta.button")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
