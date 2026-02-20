import { CheckCircle, Award, Users, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const stats = [
    { label: "Years in Business", value: "15+" },
    { label: "Happy Clients", value: "5,000+" },
    { label: "Projects Completed", value: "10,000+" },
    { label: "Customer Satisfaction", value: "99%" },
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Quality First",
      description: "We never compromise on the quality of our work. Every job is done right the first time.",
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Our team consists of skilled, licensed professionals with years of experience.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We listen to your needs and deliver results.",
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "We show up on time, every time. Count on us to be there when you need us.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">About ProFix Handyman</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your trusted partner for all home repair and maintenance needs since 2011
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                ProFix Handyman was founded in 2011 with a simple mission: to provide reliable, high-quality handyman services at fair prices. What started as a one-person operation has grown into a trusted team of skilled professionals serving the community.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Over the years, we've completed thousands of projects, from simple repairs to complete home renovations. Our reputation for quality work and excellent customer service has made us the go-to handyman service in the area.
              </p>
              <p className="text-lg text-gray-700">
                Today, we continue to uphold the same values that guided us from the beginning: integrity, quality, and customer satisfaction. Every member of our team is dedicated to exceeding your expectations.
              </p>
            </div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1768321901750-f7b96d774456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMHdvcmt8ZW58MXx8fHwxNzcxNTk4Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Home renovation work"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl text-white mb-2">{stat.value}</div>
                <div className="text-orange-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                  <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-orange-600" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Skilled professionals dedicated to your home's care
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Mitchell",
                role: "Founder & Lead Handyman",
                description: "15+ years of experience in all aspects of home repair and maintenance.",
              },
              {
                name: "David Chen",
                role: "Master Electrician",
                description: "Licensed electrician specializing in residential electrical work.",
              },
              {
                name: "Robert Garcia",
                role: "Master Plumber",
                description: "Expert plumber with extensive experience in repairs and installations.",
              },
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="bg-orange-100 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-orange-600" />
                </div>
                <h3 className="text-xl mb-1 text-gray-900">{member.name}</h3>
                <p className="text-orange-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Licensed & Insured</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We maintain all necessary licenses and insurance for your protection and peace of mind
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "State Licensed Contractor",
              "Fully Insured & Bonded",
              "BBB Accredited Business",
              "Master Electrician License",
              "Master Plumber License",
              "OSHA Safety Certified",
            ].map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg">
                <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0" />
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
