import React from 'react';
import { TreeDeciduous, Leaf, Shield, Users } from 'lucide-react';

interface ConservationCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function ConservationCard({ icon: Icon, title, description }: ConservationCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
      <Icon className="w-12 h-12 text-green-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ForestConservation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 pt-16">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-6">Forest Conservation</h1>
            <p className="text-xl text-gray-200">
              Protecting and restoring our forests to maintain biodiversity and combat climate change.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Overview Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Forest Conservation Efforts</h2>
          <p className="text-gray-600 mb-6">
            Forests are essential to life on Earth. They provide clean air, fresh water, and are home
            to countless species of plants and animals. Our forest conservation program focuses on
            protecting existing forests and restoring degraded areas.
          </p>
          <p className="text-gray-600">
            Through partnerships with local communities and organizations, we work to ensure the
            sustainable management of forest resources while preserving biodiversity and combating
            climate change.
          </p>
        </div>

        {/* Conservation Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <ConservationCard
            icon={TreeDeciduous}
            title="Reforestation"
            description="Planting native tree species to restore degraded forest areas and create new habitats."
          />
          <ConservationCard
            icon={Leaf}
            title="Biodiversity"
            description="Protecting endangered species and maintaining ecosystem balance in forest habitats."
          />
          <ConservationCard
            icon={Shield}
            title="Protection"
            description="Implementing measures to prevent deforestation and illegal logging activities."
          />
          <ConservationCard
            icon={Users}
            title="Community"
            description="Engaging local communities in sustainable forest management practices."
          />
        </div>

        {/* Impact Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
              <p className="text-gray-600">Trees Planted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-600">Protected Species</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <p className="text-gray-600">Partner Communities</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Efforts</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            You can help protect our forests by volunteering, donating, or spreading awareness about
            the importance of forest conservation.
          </p>
          <a
            href="/donate"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Support Forest Conservation
          </a>
        </div>
      </div>
    </div>
  );
}

export default ForestConservation; 