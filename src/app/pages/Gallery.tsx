import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

export function Gallery() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { key: "all", label: t("gallery.categories.all") },
    { key: "plumbing", label: t("gallery.categories.plumbing") },
    { key: "electrical", label: t("gallery.categories.electrical") },
    { key: "painting", label: t("gallery.categories.painting") },
    { key: "carpentry", label: t("gallery.categories.carpentry") },
    { key: "renovation", label: t("gallery.categories.renovation") },
  ];

  const projects = [
    {
      title: t("gallery.projects.kitchen.title"),
      category: "renovation",
      image:
        "https://images.unsplash.com/photo-1768321901750-f7b96d774456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMHdvcmt8ZW58MXx8fHwxNzcxNTk4Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: t("gallery.projects.kitchen.description"),
    },
    {
      title: t("gallery.projects.plumbing.title"),
      category: "plumbing",
      image:
        "https://images.unsplash.com/photo-1760571327612-8ab776dcd462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVwYWlyJTIwcGx1bWJpbmd8ZW58MXx8fHwxNzcxNTE2ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: t("gallery.projects.plumbing.description"),
    },
    {
      title: t("gallery.projects.electrical.title"),
      category: "electrical",
      image:
        "https://images.unsplash.com/photo-1767514536570-83d70c024247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwd29yayUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NzE1OTg3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: t("gallery.projects.electrical.description"),
    },
    {
      title: t("gallery.projects.painting.title"),
      category: "painting",
      image:
        "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHBhaW50aW5nJTIwY29udHJhY3RvcnxlbnwxfHx8fDE3NzE1OTg3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: t("gallery.projects.painting.description"),
    },
    {
      title: t("gallery.projects.carpentry.title"),
      category: "carpentry",
      image:
        "https://images.unsplash.com/photo-1581783898377-1c85bf937427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5keW1hbiUyMGNhcnBlbnRlciUyMHRvb2xzfGVufDF8fHx8MTc3MTU5ODc5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: t("gallery.projects.carpentry.description"),
    },
    {
      title: t("gallery.projects.maintenance.title"),
      category: "renovation",
      image:
        "https://images.unsplash.com/photo-1620838883342-ca19cf8448d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5keW1hbiUyMHNlcnZpY2V8ZW58MXx8fHwxNzcxNTk4Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: t("gallery.projects.maintenance.description"),
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 to-sky-100 py-16 dark:from-gray-900 dark:to-gray-800">
        <h1 className="text-4xl md:text-5xl mb-6 text-gray-900 dark:text-white text-center">
          {t("gallery.hero.title")}
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto dark:text-gray-300">
          {t("gallery.hero.subtitle")}
        </p>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category.key
                    ? "bg-sky-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow cursor-pointer dark:shadow-black/40"
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="inline-block bg-sky-600 px-3 py-1 rounded-full text-sm mb-2">
                      {
                        categories.find((c) => c.key === project.category)
                          ?.label
                      }
                    </div>
                    <h3 className="text-xl mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {t("gallery.empty")}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
