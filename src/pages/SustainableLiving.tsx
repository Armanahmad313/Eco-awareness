import React from 'react';
import { Recycle, ShoppingBag, Home, Bike } from 'lucide-react';

interface SustainableCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function SustainableCard({ icon: Icon, title, description }: SustainableCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
      <Icon className="w-12 h-12 text-green-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function SustainableLiving() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 pt-16">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-6">Sustainable Living</h1>
            <p className="text-xl text-gray-200">
              Encouraging eco-friendly practices in our daily lives for a better tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Overview Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Sustainable Living Initiatives</h2>
          <p className="text-gray-600 mb-6">
            Sustainable living is about making conscious choices that reduce our environmental impact
            and promote a healthier planet. Our program focuses on educating and empowering individuals
            to adopt eco-friendly practices in their daily lives.
          </p>
          <p className="text-gray-600">
            Through workshops, resources, and community initiatives, we help people make sustainable
            choices that benefit both the environment and their well-being.
          </p>
        </div>

        {/* Sustainable Practices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <SustainableCard
            icon={Recycle}
            title="Waste Reduction"
            description="Promoting recycling, composting, and reducing single-use plastics."
          />
          <SustainableCard
            icon={ShoppingBag}
            title="Sustainable Shopping"
            description="Encouraging conscious consumer choices and supporting eco-friendly products."
          />
          <SustainableCard
            icon={Home}
            title="Green Homes"
            description="Implementing energy-efficient practices and sustainable home improvements."
          />
          <SustainableCard
            icon={Bike}
            title="Sustainable Transport"
            description="Promoting walking, cycling, and public transportation options."
          />
        </div>

        {/* Impact Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5000+</div>
              <p className="text-gray-600">People Educated</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <p className="text-gray-600">Workshops Held</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-600">Community Projects</p>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Sustainable Living Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">At Home</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Use energy-efficient appliances</li>
                <li>• Install LED light bulbs</li>
                <li>• Reduce water consumption</li>
                <li>• Start a home garden</li>
                <li>• Compost food waste</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">In Daily Life</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Use reusable bags and containers</li>
                <li>• Choose sustainable transportation</li>
                <li>• Buy local and seasonal produce</li>
                <li>• Reduce meat consumption</li>
                <li>• Support eco-friendly businesses</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Efforts</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            You can help promote sustainable living by participating in our workshops, sharing
            knowledge with others, or supporting our community initiatives.
          </p>
          <a
            href="/join-movement"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Join Our Movement
          </a>
        </div>
      </div>
    </div>
  );
}

export default SustainableLiving;