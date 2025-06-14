import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Products from './pages/Products';
import NotFound from './pages/NotFound';

// Product Pages
import FormGuard from './pages/products/FormGuard';
import PartnerHub from './pages/products/PartnerHub';
import PriceScout from './pages/products/PriceScout';
import Logify from './pages/products/Logify';
import AlgoSphere from './pages/products/AlgoSphere';
import CrossShare from './pages/products/CrossShare';
import ZapDine from './pages/products/ZapDine';
import TutorBox from './pages/products/TutorBox';

// Service Pages
import AIAutomations from './pages/services/AIAutomations';
import CustomAIAgents from './pages/services/CustomAIAgents';
import BusinessDigitalization from './pages/services/BusinessDigitalization';
import SoftwareSolutions from './pages/services/SoftwareSolutions';
import WebsitesDevelopment from './pages/services/WebsitesDevelopment';
import CollegeProjectDevelopment from './pages/services/CollegeProjectDevelopment';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Product Routes */}
            <Route path="/products/formguard" element={<FormGuard />} />
            <Route path="/products/partner-hub" element={<PartnerHub />} />
            <Route path="/products/price-scout" element={<PriceScout />} />
            <Route path="/products/logify" element={<Logify />} />
            <Route path="/products/algo-sphere" element={<AlgoSphere />} />
            <Route path="/products/cross-share" element={<CrossShare />} />
            <Route path="/products/zap-dine" element={<ZapDine />} />
            <Route path="/products/tutor-box" element={<TutorBox />} />
            
            {/* Service Routes */}
            <Route path="/services/ai-automations" element={<AIAutomations />} />
            <Route path="/services/custom-ai-agents" element={<CustomAIAgents />} />
            <Route path="/services/business-digitalization" element={<BusinessDigitalization />} />
            <Route path="/services/software-solutions" element={<SoftwareSolutions />} />
            <Route path="/services/websites-development" element={<WebsitesDevelopment />} />
            <Route path="/services/college-project-development" element={<CollegeProjectDevelopment />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;