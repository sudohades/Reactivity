import React, { useState } from 'react';
import { Check } from 'lucide-react';

// Hero Section Component
const HeroSection = () => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
        Modern React Development
      </h1>
      <p className="text-xl md:text-2xl mb-8 opacity-90">
        Learn routing, API handling, and smooth animations
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
          Get Started
        </button>
        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
          Learn More
        </button>
      </div>
    </div>
  </div>
);

// Technical Info Section
const TechnicalInfoSection = () => {
  const [activeTab, setActiveTab] = useState('features');
  
  const tabs = {
    features: {
      title: 'Key Features',
      content: [
        'React 18 with Hooks',
        'Client-side routing simulation',
        'Custom API hook with error handling',
        'Responsive Tailwind CSS design',
        'Smooth animations and transitions'
      ]
    },
    tech: {
      title: 'Tech Stack',
      content: [
        'React.js - Frontend framework',
        'Tailwind CSS - Utility-first styling',
        'Lucide React - Beautiful icons',
        'JavaScript ES6+ - Modern syntax',
        'Fetch API - HTTP requests'
      ]
    },
    performance: {
      title: 'Performance',
      content: [
        'Component-based architecture',
        'Efficient state management',
        'Optimized re-renders',
        'Lazy loading ready',
        'Mobile-first responsive design'
      ]
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Overview</h2>
        
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-100 rounded-lg p-1">
            {Object.keys(tabs).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === key
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tabs[key].title}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-4">{tabs[activeTab].title}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {tabs[activeTab].content.map((item, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <Check className="text-green-500" size={20} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Home Page Component
const HomePage = () => (
  <div className="animate-fade-in">
    <HeroSection />
    <TechnicalInfoSection />
  </div>
);

export default HomePage;
export { HeroSection, TechnicalInfoSection };