import React from 'react';
import Borrow from './Borrow';
import { Shield, TrendingUp, Lock, Zap, ArrowRight, MessageCircle, Twitter, Github } from 'lucide-react';

const StakingProtocol = () => {
  // Sample metrics data
  const metrics = {
    btcStaked: "25,000+",
    users: "510,000+",
    utilizationRate: "90%"
  };

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-16">

          <div className="w-[fit-content] px-20 font-courgette font-extrabold text-[#e29032] text-5xl cursor-pointer hover:scale-125 transition duration-200">
      BitStake
      </div>

          
          <nav className="flex justify-between items-center mb-16">
            
            <div className="text-2xl font-bold"></div>
            {/* <div className="hidden md:flex space-x-6">
              <a href="#features" className="hover:text-blue-200">Features</a>
              <a href="#how-it-works" className="hover:text-blue-200">How It Works</a>
              <a href="#security" className="hover:text-blue-200">Security</a>
            </div> */}
            {/* <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50">
            <a href="/Borrow" className="hover:text-blue-200"> Launch App</a>

             
            </button> */}
          </nav>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Secure Bitcoin Staking for Maximum Yields</h1>
            <p className="text-xl mb-8">Earn competitive yields on your Bitcoin with institutional-grade security and complete liquidity</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium text-lg hover:bg-blue-50 mr-4">

            <a href="/Borrow" className="hover:text-blue-200"> Launch App</a>
              
            </button>
            <button className="border border-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* What We Offer Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Why Stake with BTC Stake?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Shield className="w-12 h-12 text-blue-600" />}
              title="Secure & Transparent"
              description="Fully audited smart contracts and Proof-of-Reserve ensure your Bitcoin is safe and verifiable"
            />
            <FeatureCard 
              icon={<TrendingUp className="w-12 h-12 text-blue-600" />}
              title="Competitive Yields"
              description="Maximize returns on your BTC without sacrificing security or peace of mind"
            />
            <FeatureCard 
              icon={<Lock className="w-12 h-12 text-blue-600" />}
              title="Flexible Liquidity"
              description="Access your staked funds anytime through Liquid Staking Tokens (LSTs)"
            />
            <FeatureCard 
              icon={<Zap className="w-12 h-12 text-blue-600" />}
              title="Seamless Integration"
              description="Compatible with major DeFi platforms and Bitcoin ecosystems"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Simple Steps to Stake Your Bitcoin</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard 
              number="1"
              title="Deposit BTC"
              description="Transfer your Bitcoin to our protocol's staking vault"
            />
            <StepCard 
              number="2"
              title="Earn LSTs"
              description="Receive Liquid Staking Tokens as proof of your deposit"
            />
            <StepCard 
              number="3"
              title="Earn Rewards"
              description="Your Bitcoin starts earning competitive yields immediately"
            />
            <StepCard 
              number="4"
              title="Stay Liquid"
              description="Redeem your LSTs or use them in DeFi platforms anytime"
            />
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Trusted by Thousands Globally</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <MetricCard 
              value={metrics.btcStaked}
              label="BTC Staked"
            />
            <MetricCard 
              value={metrics.users}
              label="Active Users"
            />
            <MetricCard 
              value={metrics.utilizationRate}
              label="Utilization Rate"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Grow Your Bitcoin?</h2>
          <p className="text-xl text-gray-700 mb-8">Join thousands of users already earning yields on their Bitcoin</p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-blue-700">
              Start Staking Today
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium text-lg hover:bg-blue-50">
              Join Our Community
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <p className="text-gray-400">Pioneering secure Bitcoin staking with institutional-grade infrastructure and complete liquidity</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Whitepaper</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Risk Disclosure</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 BTC Stake. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Component for feature cards
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

// Component for step cards
const StepCard = ({ number, title, description }) => (
  <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
      {number}
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

// Component for metric cards
const MetricCard = ({ value, label }) => (
  <div>
    <div className="text-4xl font-bold mb-2">{value}</div>
    <div className="text-xl text-blue-200">{label}</div>
  </div>
);

export default StakingProtocol;