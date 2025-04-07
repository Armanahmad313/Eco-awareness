import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Donation = React.lazy(() => import('./pages/Donation'));
const ForestConservation = React.lazy(() => import('./pages/ForestConservation'));
const WaterProtection = React.lazy(() => import('./pages/WaterProtection'));
const CleanEnergy = React.lazy(() => import('./pages/CleanEnergy'));
const SustainableLiving = React.lazy(() => import('./pages/SustainableLiving'));
const JoinMovement = React.lazy(() => import('./pages/JoinMovement'));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <React.Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donation" element={<Donation />} />
              <Route path="/forest-conservation" element={<ForestConservation />} />
              <Route path="/water-protection" element={<WaterProtection />} />
              <Route path="/clean-energy" element={<CleanEnergy />} />
              <Route path="/sustainable-living" element={<SustainableLiving />} />
              <Route path="/join-movement" element={<JoinMovement />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);