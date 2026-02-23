import { CheckCircle, Award, Users, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  const stats = [
    { label: t("about.stats.years"), value: "15+" },
    { label: t("about.stats.clients"), value: "5,000+" },
    { label: t("about.stats.projects"), value: "10,000+" },
    { label: t("about.stats.satisfaction"), value: "99%" },
  ];

  const values = [
    {
      icon: CheckCircle,
      title: t("about.values.quality.title"),
      description: t("about.values.quality.description"),
    },
    {
      icon: Award,
      title: t("about.values.excellence.title"),
      description: t("about.values.excellence.description"),
    },
    {
      icon: Users,
      title: t("about.values.customer.title"),
      description: t("about.values.customer.description"),
    },
    {
      icon: Clock,
      title: t("about.values.reliable.title"),
      description: t("about.values.reliable.description"),
    },
  ];

  const team = [
    {
      name: t("about.team.members.john.name"),
      role: t("about.team.members.john.role"),
      description: t("about.team.members.john.description"),
    },
    {
      name: t("about.team.members.david.name"),
      role: t("about.team.members.david.role"),
      description: t("about.team.members.david.description"),
    },
    {
      name: t("about.team.members.robert.name"),
      role: t("about.team.members.robert.role"),
      description: t("about.team.members.robert.description"),
    },
  ];

  const certifications = [
    t("about.certifications.items.0"),
    t("about.certifications.items.1"),
    t("about.certifications.items.2"),
    t("about.certifications.items.3"),
    t("about.certifications.items.4"),
    t("about.certifications.items.5"),
  ];

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 to-sky-100 py-16 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6 text-gray-900 dark:text-white text-center">
            {t("about.hero.title")}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto dark:text-gray-300">
            {t("about.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900 dark:text-white">
                {t("about.story.title")}
              </h2>
              <p className="text-lg text-gray-700 mb-4 dark:text-gray-300">
                {t("about.story.p1")}
              </p>
              <p className="text-lg text-gray-700 mb-4 dark:text-gray-300">
                {t("about.story.p2")}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {t("about.story.p3")}
              </p>
            </div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1768321901750-f7b96d774456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMHdvcmt8ZW58MXx8fHwxNzcxNTk4Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt={t("about.story.imageAlt")}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-sky-600 dark:bg-sky-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sky-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900 dark:text-white">
              {t("about.values.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              {t("about.values.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center dark:bg-gray-900 dark:border dark:border-gray-800">
                  <div className="bg-sky-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-sky-600" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900 dark:text-white">
              {t("about.team.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              {t("about.team.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center dark:bg-gray-800">
                <div className="bg-sky-100 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-sky-600" />
                </div>
                <h3 className="text-xl mb-1 text-gray-900">{member.name}</h3>
                <p className="text-sky-600 mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900 dark:text-white">
              {t("about.certifications.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              {t("about.certifications.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg dark:bg-gray-900 dark:border dark:border-gray-800">
                <CheckCircle className="h-6 w-6 text-sky-600 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
