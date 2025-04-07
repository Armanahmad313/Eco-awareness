import React from 'react';
import { TreeDeciduous, Droplets, Wind, Sun, ArrowRight } from 'lucide-react';
import ClimateClock from '../components/ClimateClock';

interface EnvironmentCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}

function EnvironmentCard({ icon: Icon, title, description, link }: EnvironmentCardProps) {
  return (
    <a href={link} className="block">
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
        <Icon className="w-12 h-12 text-green-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  );
}

function Home() {
  const handleGetStarted = () => {
    const featuresSection = document.querySelector('#features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Hero Section */}
      <div 
        className="min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Protecting Our Planet, Preserving Our Future
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Join us in our mission to create a sustainable future through environmental awareness and action.
            </p>
            <button 
              onClick={handleGetStarted}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors duration-300 transform hover:scale-105 active:scale-95 mb-12"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <ClimateClock />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">Our Environmental Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <EnvironmentCard
            icon={TreeDeciduous}
            title="Forest Conservation"
            description="Protecting and restoring our forests to maintain biodiversity and combat climate change."
            link="/forest-conservation"
          />
          <EnvironmentCard
            icon={Droplets}
            title="Water Protection"
            description="Preserving our water resources and ensuring clean water access for future generations."
            link="/water-protection"
          />
          <EnvironmentCard
            icon={Wind}
            title="Clean Energy"
            description="Promoting renewable energy solutions to reduce our carbon footprint."
            link="/clean-energy"
          />
          <EnvironmentCard
            icon={Sun}
            title="Sustainable Living"
            description="Encouraging eco-friendly practices in our daily lives for a better tomorrow."
            link="/sustainable-living"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-green-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Every small action counts. Join our community of environmental advocates and help create positive change for our planet.
          </p>
          <a 
            href="/join-movement"
            className="inline-block bg-white text-green-900 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Join Our Movement
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home; 