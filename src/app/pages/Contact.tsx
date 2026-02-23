import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const services = [
    t("contact.services.generalRepair"),
    t("contact.services.plumbing"),
    t("contact.services.electrical"),
    t("contact.services.painting"),
    t("contact.services.carpentry"),
    t("contact.services.homeMaintenance"),
    t("contact.services.other"),
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">
            {t("contact.hero.title")}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t("contact.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl mb-6 text-gray-900">
                  {t("contact.info.title")}
                </h2>
                <p className="text-gray-600 mb-8">
                  {t("contact.info.subtitle")}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">{t("contact.info.phone")}</h3>
                    <a href="tel:5551234567" className="text-orange-600 hover:text-orange-700">
                      (555) 123-4567
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      {t("contact.info.phoneHours")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">{t("contact.info.email")}</h3>
                    <a href="mailto:info@lucris.nl" className="text-orange-600 hover:text-orange-700">
                      info@lucris.nl
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      {t("contact.info.emailNote")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">{t("contact.info.address")}</h3>
                    <p className="text-gray-600">
                      {t("contact.info.addressLine1")}<br />
                      {t("contact.info.addressLine2")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">{t("contact.info.hours")}</h3>
                    <p className="text-gray-600">
                      {t("contact.info.hoursLine1")}<br />
                      {t("contact.info.hoursLine2")}<br />
                      {t("contact.info.hoursLine3")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-gray-900 mb-2">{t("contact.emergency.title")}</h3>
                <p className="text-gray-600 mb-3">
                  {t("contact.emergency.subtitle")}
                </p>
                <a href="tel:5559876543" className="text-xl text-orange-600 hover:text-orange-700">
                  (555) 987-6543
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl mb-6 text-gray-900">
                {t("contact.form.title")}
              </h2>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl text-green-900 mb-2">
                    {t("contact.form.successTitle")}
                  </h3>
                  <p className="text-green-800">
                    {t("contact.form.successMessage")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                        {t("contact.form.fullName")} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        placeholder={t("contact.form.fullNamePlaceholder")}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                        {t("contact.form.phone")} *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        placeholder={t("contact.form.phonePlaceholder")}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                      {t("contact.form.email")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                      placeholder={t("contact.form.emailPlaceholder")}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm text-gray-700 mb-2">
                      {t("contact.form.service")} *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    >
                      <option value="">{t("contact.form.servicePlaceholder")}</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                      {t("contact.form.details")} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                      placeholder={t("contact.form.detailsPlaceholder")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {t("contact.form.submit")}
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    {t("contact.form.disclaimer")}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-8 text-gray-900">
            {t("contact.map.title")}
          </h2>
          <div className="bg-gray-300 rounded-lg overflow-hidden h-96 flex items-center justify-center">
            <p className="text-gray-600">
              {t("contact.map.placeholder")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
