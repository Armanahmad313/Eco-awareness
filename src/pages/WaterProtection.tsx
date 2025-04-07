import React from 'react';
import { Droplets, Waves, Filter, Globe } from 'lucide-react';

interface WaterCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function WaterCard({ icon: Icon, title, description }: WaterCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
      <Icon className="w-12 h-12 text-green-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function WaterProtection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 pt-16">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-6">Water Protection</h1>
            <p className="text-xl text-gray-200">
              Preserving our water resources and ensuring clean water access for future generations.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Overview Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Water Protection Initiatives</h2>
          <p className="text-gray-600 mb-6">
            Water is essential for all life on Earth. Our water protection program focuses on
            preserving water resources, improving water quality, and ensuring sustainable access
            to clean water for communities worldwide.
          </p>
          <p className="text-gray-600">
            Through research, education, and direct action, we work to protect water ecosystems
            and promote responsible water management practices.
          </p>
        </div>

        {/* Protection Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <WaterCard
            icon={Droplets}
            title="Water Quality"
            description="Monitoring and improving water quality in rivers, lakes, and oceans."
          />
          <WaterCard
            icon={Waves}
            title="Marine Life"
            description="Protecting marine ecosystems and endangered aquatic species."
          />
          <WaterCard
            icon={Filter}
            title="Clean Water"
            description="Providing access to clean drinking water in underserved communities."
          />
          <WaterCard
            icon={Globe}
            title="Global Impact"
            description="Addressing water-related challenges on a global scale."
          />
        </div>

        {/* Impact Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-gray-600">Water Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
              <p className="text-gray-600">Liters of Clean Water</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-600">Protected Water Bodies</p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Current Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">River Cleanup Initiative</h3>
              <p className="text-gray-600 mb-4">
                Working with local communities to clean up and protect major river systems.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <span>Learn More</span>
                <span>→</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Ocean Conservation</h3>
              <p className="text-gray-600 mb-4">
                Protecting marine ecosystems and reducing plastic pollution in our oceans.
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
            You can help protect our water resources by supporting our projects, volunteering,
            or making a donation to fund water protection initiatives.
          </p>
          <a
            href="/donate"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Support Water Protection
          </a>
        </div>
      </div>
    </div>
  );
}

export default WaterProtection; 