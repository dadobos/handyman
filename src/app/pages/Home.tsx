import { Link } from "react-router";
import { CheckCircle, Phone, ArrowRight, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("home.services.items.plumbing.title"),
      description: t("home.services.items.plumbing.description"),
      image:
        "https://images.unsplash.com/photo-1760571327612-8ab776dcd462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVwYWlyJTIwcGx1bWJpbmd8ZW58MXx8fHwxNzcxNTE2ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: t("home.services.items.electrical.title"),
      description: t("home.services.items.electrical.description"),
      image:
        "https://images.unsplash.com/photo-1767514536570-83d70c024247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwd29yayUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NzE1OTg3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: t("home.services.items.painting.title"),
      description: t("home.services.items.painting.description"),
      image:
        "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHBhaW50aW5nJTIwY29udHJhY3RvcnxlbnwxfHx8fDE3NzE1OTg3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const features = [
    t("home.features.licensed"),
    t("home.features.sameDay"),
    t("home.features.quality"),
    t("home.features.affordable"),
    t("home.features.satisfaction"),
    t("home.features.emergency"),
  ];

  const testimonials = [
    {
      name: t("home.testimonials.items.sarah.name"),
      text: t("home.testimonials.items.sarah.text"),
      rating: 5,
    },
    {
      name: t("home.testimonials.items.mike.name"),
      text: t("home.testimonials.items.mike.text"),
      rating: 5,
    },
    {
      name: t("home.testimonials.items.emily.name"),
      text: t("home.testimonials.items.emily.text"),
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900">
                {t("home.hero.title")}
                <span className="text-orange-600"> {t("home.hero.titleHighlight")}</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                {t("home.hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  {t("home.hero.ctaPrimary")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:5551234567"
                  className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-lg border-2 border-orange-600 hover:bg-orange-50 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {t("home.hero.ctaSecondary")}
                </a>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1620838883342-ca19cf8448d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5keW1hbiUyMHNlcnZpY2V8ZW58MXx8fHwxNzcxNTk4Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt={t("home.hero.imageAlt")}
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              {t("home.services.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("home.services.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700"
                  >
                    {t("home.services.learnMore")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              {t("home.services.viewAll")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5keW1hbiUyMGNhcnBlbnRlciUyMHRvb2xzfGVufDF8fHx8MTc3MTU5ODc5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt={t("home.about.imageAlt")}
              className="rounded-lg shadow-lg w-full"
            />
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
                {t("home.about.title")}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t("home.about.subtitle")}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-900">
                      {t("home.about.points.experienced.title")}
                    </span>
                    <p className="text-gray-600">
                      {t("home.about.points.experienced.text")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-900">
                      {t("home.about.points.pricing.title")}
                    </span>
                    <p className="text-gray-600">
                      {t("home.about.points.pricing.text")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-900">
                      {t("home.about.points.guarantee.title")}
                    </span>
                    <p className="text-gray-600">
                      {t("home.about.points.guarantee.text")}
                    </p>
                  </div>
                </li>
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center text-orange-600 hover:text-orange-700 text-lg"
              >
                {t("home.about.learnMore")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              {t("home.testimonials.title")}
            </h2>
            <p className="text-xl text-gray-600">
              {t("home.testimonials.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-white">
            {t("home.cta.title")}
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            {t("home.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {t("home.cta.primary")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:5551234567"
              className="inline-flex items-center justify-center bg-orange-700 text-white px-8 py-4 rounded-lg hover:bg-orange-800 transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              {t("home.cta.secondary")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
