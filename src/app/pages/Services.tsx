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
  ArrowRight 
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Droplet,
      title: "Plumbing Services",
      description: "Expert plumbing repairs and installations for your home.",
      items: [
        "Faucet & Fixture Repairs",
        "Toilet Repairs & Replacement",
        "Pipe Repairs & Leak Detection",
        "Drain Cleaning",
        "Water Heater Services",
        "Garbage Disposal Installation",
      ],
    },
    {
      icon: Zap,
      title: "Electrical Work",
      description: "Safe and reliable electrical services by licensed professionals.",
      items: [
        "Light Fixture Installation",
        "Outlet & Switch Repair",
        "Ceiling Fan Installation",
        "Circuit Breaker Services",
        "Home Rewiring",
        "Electrical Safety Inspections",
      ],
    },
    {
      icon: PaintBucket,
      title: "Painting & Drywall",
      description: "Transform your space with professional painting services.",
      items: [
        "Interior Painting",
        "Exterior Painting",
        "Drywall Installation",
        "Drywall Repair",
        "Texture Matching",
        "Wallpaper Removal",
      ],
    },
    {
      icon: Hammer,
      title: "Carpentry",
      description: "Custom carpentry work for all your woodworking needs.",
      items: [
        "Custom Shelving",
        "Cabinet Installation",
        "Door Installation & Repair",
        "Crown Molding",
        "Deck Repairs",
        "Trim & Baseboards",
      ],
    },
    {
      icon: Home,
      title: "Home Repairs",
      description: "General home repairs to keep your property in top shape.",
      items: [
        "Window Repairs",
        "Door Repairs",
        "Lock Installation",
        "Weather Stripping",
        "Caulking & Sealing",
        "Minor Roof Repairs",
      ],
    },
    {
      icon: Settings,
      title: "Maintenance Services",
      description: "Regular maintenance to prevent future problems.",
      items: [
        "Seasonal Home Inspections",
        "Gutter Cleaning",
        "Pressure Washing",
        "HVAC Filter Changes",
        "Preventive Maintenance",
        "Home Safety Checks",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">Our Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From minor repairs to major renovations, we offer comprehensive handyman services to meet all your home improvement needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-orange-600" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600">
              Getting your home repairs done is easy with our simple process
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Contact Us",
                description: "Call or fill out our online form to describe your project",
              },
              {
                step: "2",
                title: "Get a Quote",
                description: "Receive a fair, transparent estimate for the work",
              },
              {
                step: "3",
                title: "Schedule Service",
                description: "Choose a convenient time that works for you",
              },
              {
                step: "4",
                title: "Job Complete",
                description: "We complete the work with quality and care",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl mb-2 text-gray-900">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-white">
            Need a Handyman?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Contact us today for a free estimate on any of our services!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Request a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
