import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">EcoAware</h3>
            <p className="text-green-100">
              Dedicated to creating a sustainable future through environmental awareness and action.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-green-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/forest-conservation" className="text-green-100 hover:text-white transition-colors">
                  Forest Conservation
                </Link>
              </li>
              <li>
                <Link to="/water-protection" className="text-green-100 hover:text-white transition-colors">
                  Water Protection
                </Link>
              </li>
              <li>
                <Link to="/clean-energy" className="text-green-100 hover:text-white transition-colors">
                  Clean Energy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-green-100">
                <Mail size={16} />
                <span>contact@ecoaware.org</span>
              </li>
              <li className="flex items-center gap-2 text-green-100">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-green-100">
                <MapPin size={16} />
                <span>123 Green Street, Eco City</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-100">
          <p>&copy; {new Date().getFullYear()} EcoAware. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 