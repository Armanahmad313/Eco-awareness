import React from 'react';
import { Sun, Wind, Zap, Leaf } from 'lucide-react';

interface EnergyCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function EnergyCard({ icon: Icon, title, description }: EnergyCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
      <Icon className="w-12 h-12 text-green-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CleanEnergy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 pt-16">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1473341304170-971dccf5e1d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-6">Clean Energy</h1>
            <p className="text-xl text-gray-200">
              Promoting renewable energy solutions to reduce our carbon footprint and create a sustainable future.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Overview Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Clean Energy Initiatives</h2>
          <p className="text-gray-600 mb-6">
            The transition to clean energy is essential for combating climate change and ensuring
            a sustainable future. Our clean energy program focuses on promoting renewable energy
            solutions and reducing our reliance on fossil fuels.
          </p>
          <p className="text-gray-600">
            Through innovation, education, and implementation, we work to accelerate the adoption
            of clean energy technologies worldwide.
          </p>
        </div>

        {/* Energy Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <EnergyCard
            icon={Sun}
            title="Solar Power"
            description="Promoting solar energy adoption through community projects and education."
          />
          <EnergyCard
            icon={Wind}
            title="Wind Energy"
            description="Supporting wind power development and infrastructure projects."
          />
          <EnergyCard
            icon={Zap}
            title="Energy Efficiency"
            description="Implementing energy-saving solutions in homes and businesses."
          />
          <EnergyCard
            icon={Leaf}
            title="Green Technology"
            description="Advancing sustainable technologies and clean energy innovation."
          />
        </div>

        {/* Impact Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <p className="text-gray-600">Solar Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
              <p className="text-gray-600">Tons CO2 Reduced</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <p className="text-gray-600">Homes Powered</p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Current Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Community Solar</h3>
              <p className="text-gray-600 mb-4">
                Installing solar panels in underserved communities to provide clean, affordable energy.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <span>Learn More</span>
                <span>→</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Wind Farm Development</h3>
              <p className="text-gray-600 mb-4">
                Supporting the development of wind energy projects in suitable locations.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <span>Learn More</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Efforts</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            You can help accelerate the transition to clean energy by supporting our projects,
            learning about renewable energy, or making a donation to fund clean energy initiatives.
          </p>
          <a
            href="/donate"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Support Clean Energy
          </a>
        </div>
      </div>
    </div>
  );
}

export default CleanEnergy; 