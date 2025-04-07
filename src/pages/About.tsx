import React from 'react';
import { Users, Target, Heart, Globe } from 'lucide-react';

interface MissionCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function MissionCard({ icon: Icon, title, description }: MissionCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
      <Icon className="w-12 h-12 text-green-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 pt-16">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About EcoAware</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          EcoAware is a non-profit organization dedicated to environmental conservation and sustainability.
          Our mission is to create a sustainable future through education, advocacy, and action.
        </p>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MissionCard
            icon={Users}
            title="Community"
            description="Building a global community of environmental advocates and activists."
          />
          <MissionCard
            icon={Target}
            title="Action"
            description="Taking concrete steps to protect and preserve our environment."
          />
          <MissionCard
            icon={Heart}
            title="Passion"
            description="Driven by our love for nature and commitment to future generations."
          />
          <MissionCard
            icon={Globe}
            title="Impact"
            description="Creating lasting positive change for our planet and its inhabitants."
          />
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Founded in 2020, EcoAware emerged from a shared concern about the state of our environment
              and a determination to make a difference. What started as a small group of passionate
              individuals has grown into a global movement.
            </p>
            <p>
              Our journey began with local community initiatives and has expanded to include
              international projects, educational programs, and advocacy efforts. We believe that
              every action, no matter how small, contributes to the greater goal of environmental
              preservation.
            </p>
            <p>
              Today, we continue to work tirelessly to protect our planet's resources, promote
              sustainable practices, and inspire others to join us in this crucial mission.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl text-green-600">JD</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600">Executive Director</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl text-green-600">JS</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-600">Program Director</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl text-green-600">MJ</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
            <p className="text-gray-600">Outreach Coordinator</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 